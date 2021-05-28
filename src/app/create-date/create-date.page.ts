import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import * as moment from 'moment';

@Component({
  selector: 'app-create-date',
  templateUrl: './create-date.page.html',
  styleUrls: ['./create-date.page.scss'],
})
export class CreateDatePage implements OnInit {

  namePattern: string = '[a-zA-Z ]*$';
  todayDate: string = moment( new Date() ).format();

  dates = [];

  constructor(
    private fb: FormBuilder,
    private nativeStorage: NativeStorage
  ) { }

  form: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.minLength( 3 ), Validators.pattern( this.namePattern ) ] ],
    date: [ '', [ Validators.required] ],
    time: [ '', [ Validators.required ] ]
  }); 


  ngOnInit() {
    moment.locale('es-mx');

    this.dates.push( this.nativeStorage.getItem('dates') );
    console.log( this.dates );

  }

  onAddDate() {
    
    if( this.form.invalid ) {
      this.form.markAllAsTouched();
      return;
    }

    this.nativeStorage.setItem('dates', this.form.value);
  }

}
