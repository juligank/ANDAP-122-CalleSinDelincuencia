import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-registry',
  templateUrl: 'registry.html',
})
export class RegistryPage {

  myForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder
  ) {
    this.myForm = this.createMyForm();
  }

  saveData() {
    console.log(this.myForm.value);
  }

  private createMyForm() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      dateBirth: ['', Validators.required],
      passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      }),
      document: this.formBuilder.group({
        tipoDocumento: ['', Validators.required],
        numeroDocumento: ['', Validators.required]
      }),
      gender: ['', Validators.required],
    });
  }



}
