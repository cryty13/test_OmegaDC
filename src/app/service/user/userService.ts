import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private http: HttpClient) { }

	GetAllUser() {
		return this.http.get(environment.apiURI + 'Get/User',
			{
				// headers: {
				//   'x-access-token': localStorage.getItem('OmegaDc'),
				// }
			});
	}
	CreateUser(Name, Email, Password) {
		let headers = new HttpHeaders();
		return this.http.post(environment.apiURI + 'Save/User', {
			"Name": Name,
			"Email": Email,
			"Password": Password
		}, { headers: headers });
	}
}
