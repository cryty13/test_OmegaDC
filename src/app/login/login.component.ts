import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login/loginService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../service/login/login';
import { Router } from '@angular/router';
import { UserService } from '../service/user/userService';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public form: FormGroup;
	public formCadastro: FormGroup;
	public cadastro = false;

	constructor(private loginservice: LoginService, private userservice: UserService,
		private formBuilder: FormBuilder, private router: Router

	) {
		this.form = this.formBuilder.group({
			Email: ['', Validators.compose([Validators.required])],
			Password: ['', Validators.compose([Validators.required])],
		});
		this.formCadastro = this.formBuilder.group({
			Email: ['', Validators.compose([Validators.required])],
			Name: ['', Validators.compose([Validators.required])],
			Password: ['', Validators.compose([Validators.required])],
		});
	}


	ngOnInit() {

	}
	Login() {
		this.loginservice.Login(this.form.value['Email'], this.form.value['Password']).subscribe(result => {
			if (result == null) {
				alert("Usuario ou senha invalido");
			} else {

				console.log(result)

				localStorage.setItem('OmegaDc', result['token']);
				localStorage.setItem('OmegaDc.Email', result['user']['email']);
				this.router.navigateByUrl('/home');
			}
		})
	}
	CreateUser() {
		this.userservice.CreateUser(
			this.formCadastro.value['Name'],
			this.formCadastro.value['Email'],
			this.formCadastro.value['Password']
		).subscribe(result => {
			alert(result['name'] + " Criado com Sucesso")
			this.formCadastro.reset();
			this.cadastro = false;
			this.form.reset();
		})
	}

	Novo(obj) {
		this.cadastro = obj;
	}
}
