import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openLeftMenu() {
    document.getElementById("leftMenu").style.display = "block";
  }
  
   closeLeftMenu() {
    document.getElementById("leftMenu").style.display = "none";
  }
  
   openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
  }
  
   closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
  }

  openDashBoard(){
  
    this.router.navigate(['/dashboard']);
  }

}
