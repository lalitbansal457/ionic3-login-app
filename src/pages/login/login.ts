import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	@ViewChild('username') user;
	@ViewChild('password') password;
	private loginForm: FormGroup;
	show: any;	


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private formBuilder: FormBuilder) {
	  	this.loginForm = formBuilder.group({
	  		username: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
	  		password: [null, Validators.compose([Validators.required, Validators.minLength(4)])]
	  	})
  }

  signInUser() {
  	this.show = true;
  	console.log(this.loginForm, this.loginForm.controls.username.valid);
  	/*console.log(this.user.value, this.password.value);

  	let alert = this.alertCtrl.create({
  	    title: 'Login',
  	    subTitle: 'You are logged in',
  	    buttons: ['Ok']
  	});
	  	alert.present();*/
  }

}
