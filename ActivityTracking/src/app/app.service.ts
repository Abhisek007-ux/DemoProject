import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, config } from 'rxjs';

import { Router } from '@angular/router';
import { configModel } from 'src/assets/configModel';


@Injectable({
    providedIn: 'root'
})
export class AppService {
    config: configModel;
    build: configModel;
    public loggedIn: string = "false";
    public error_popup = false; //ERROR POPUP TOGGLE VARIABLE
    public error_message = "";  //ERROR POPUP CONTENT VARIABLE
    public error_popup_width = 450; //ERROR POPUP DIMENSION
    public information_popup = false; //INFORMATION POPUP TOGGLE VARIABLE
    public information_message = "";  //INFORMATION POPUP CONTENT VARIABLE
    public information_popup_width = 450; //INFORMATION POPUP DIMENSION

    constructor(private http: HttpClient, public router: Router) {
       
        this.getConfig().subscribe(data => {
            this.config = data;
            this.setSessionStorage('configurl', data.LOGINPAGEAPIUrl);
            
        });
    }

    getConfig(): Observable<configModel> {
        return this.http.get<configModel>("./assets/config.json");
    }
    public getSessionStorage<T>(token: string): T {
        const settings = sessionStorage.getItem(token);
        return settings ? JSON.parse(settings) : settings;
    }

    public setSessionStorage<T>(token: string, value: string): void {
        sessionStorage.setItem(token, JSON.stringify(value));
    }

    public removeFromSessionStorage(token: string): void {
        sessionStorage.removeItem(token);
    }
}