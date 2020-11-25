import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private appService:AppService,private http:HttpClient) { }

  ngOnInit(): void {
  }
  public firstName:any;
  public lastName:any;
  public contact:any;
  public mail:any;
  public message:string;
public saveDataPopup:boolean=false;
  saveData(){
    var param:any={
      "id":0,
      "name":this.firstName +" "+this.lastName,
      "registrationDate":null,
      "contactNumber":this.contact,
      "mailId":this.mail
    }
    this.addEnty(param).subscribe(response => {
      if(response!=null && response!=undefined)
      this.message="User Registered Succesfully";
      this.saveDataPopup=true;
    });
  }


  addEnty(param: any): Observable<any> {
    const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          })
        };
    let url = this.appService.getSessionStorage('configurl') + '/insertData/';
    return this.http.post<any>(url, JSON.stringify(param), httpOptions);
   }

   closePopup(){
    this.saveDataPopup=false;
   }
}



