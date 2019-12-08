import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	constructor(private http: HttpClient) { }

	Login(Email, Password) {
		let headers = new HttpHeaders();
		return this.http.post(environment.apiURI + 'Login', { "Email": Email, "Password": Password }, { headers: headers });
	}
	GetAllLogin() {
		return this.http.get(environment.apiURI + 'Get/Login', { headers: { 'x-access-token': localStorage.getItem('OmegaDc') } });
	}
}
