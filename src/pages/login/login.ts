import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

//import {passwordPatternValidator} from '../../services/passwordPatternValidator';

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
	  		password: [null, Validators.compose([Validators.required, Validators.minLength(4), this.alphaNumeric])]
	  	})
  }

  signInUser() {
  	this.show = true;
  	console.log(this.loginForm, this.loginForm.controls.username.valid, this.loginForm.controls.password.errors);
  	/*console.log(this.user.value, this.password.value);

  	let alert = this.alertCtrl.create({
  	    title: 'Login',
  	    subTitle: 'You are logged in',
  	    buttons: ['Ok']
  	});
	  	alert.present();*/
  }

  alphaNumeric(fieldControl: FormControl) : ValidationResult {
		if(fieldControl.value == '' || /^[A-Za-z0-9_]+$/.test(fieldControl.value)) {
			return { 'startsWithNumber': false };
		}
		return null;
	}



}


interface ValidationResult {
	[key:string]: boolean;
}