import { Observable } from 'rxjs';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

//import { Product } from './model';
//import { EditService } from './edit-service';

import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppService } from '../app.service';

import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './mydashboard.component.html',
  styleUrls: ['./mydashboard.component.css']
     
  
})
export class MydashboardComponent implements OnInit {
    public view: Observable<GridDataResult>;
    public gridState: State = {
        sort: [],
        skip: 0,
        take: 10
    };
    public formGroup: FormGroup;

    //private editService: EditService;
    private editedRowIndex: number;
public data:any;
     constructor(/*@Inject(EditService) editServiceFactory: any*/private http:HttpClient,private appService:AppService,
     private router:Router) {
       // this.editService = editServiceFactory();
        this.getProjectList("").subscribe(response => {
          
          this.data=response;
        });
    }

     getProjectList(param: any): Observable<any> {
      const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            })
          };
      let url = this.appService.getSessionStorage('configurl') + '/getAllData';
      return this.http.post<any>(url, JSON.stringify(param), httpOptions);
     }

    public ngOnInit(): void {
      //  this.view = this.editService.pipe(map(data => process(data, this.gridState)));

       // this.editService.read();
    }

    public onStateChange(state: State) {
        this.gridState = state;

      //  this.editService.read();
    }

    public addHandler({sender}) {
        this.closeEditor(sender);

        this.formGroup = new FormGroup({
            'ProductID': new FormControl(),
            'ProductName': new FormControl('', Validators.required),
            'UnitPrice': new FormControl(0),
            'UnitsInStock': new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])),
            'Discontinued': new FormControl(false)
        });

        sender.addRow(this.formGroup);
    }

    public editHandler({sender, rowIndex, dataItem}) {
        this.closeEditor(sender);

     

        this.editedRowIndex = rowIndex;

        sender.editRow(rowIndex, this.formGroup);
    }

    public cancelHandler({sender, rowIndex}) {
        this.closeEditor(sender, rowIndex);
    }

    public saveHandler({sender, rowIndex, formGroup, isNew}) {
        // const product: Product = formGroup.value;

        // this.editService.save(product, isNew);

        sender.closeRow(rowIndex);
    }

    public removeHandler({dataItem}) {
      //  this.editService.remove(dataItem);
    }

    private closeEditor(grid, rowIndex = this.editedRowIndex) {
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.formGroup = undefined;
    }

   public deleteData(data:any){
this.deleteEnty(data.id).subscribe(response => {
  this.router.navigate['dashboard'];
  window.location.reload();
});
   }

   deleteEnty(param: any): Observable<any> {
    const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          })
        };
    let url = this.appService.getSessionStorage('configurl') + '/deleteData/'+param;
    return this.http.post<any>(url, JSON.stringify(param), httpOptions);
   }
}
