import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user/userService';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	ListaUser: any = []
	email;

	constructor(private router: Router,public _UserService: UserService) { }

	ngOnInit() {
		this.email = localStorage.getItem('OmegaDc.Email');
		this._UserService.GetAllUser().subscribe(result => { this.ListaUser = result; console.log(result) });
	}
	Logout(){
		localStorage.removeItem('OmegaDc');
		localStorage.removeItem('OmegaDc.user');
		this.router.navigateByUrl('/');
	}
}
