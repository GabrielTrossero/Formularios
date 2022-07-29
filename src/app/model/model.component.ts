import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;

  constructor() { 
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellido: new FormControl('',[
        Validators.maxLength(10)
      ]),
      edad: new FormControl('22'), //Podemos poner un valor por default
      dni: new FormControl(''),
      password: new FormControl(''),
      repite_password: new FormControl(''),
      email: new FormControl('',[
        //Validators.email  Esta es una validación muy báscia, por lo que utilizaremos una externa
        //La siguiente expresión regular es sacada de https://regexlib.com/
        //Debemos colocarla entre "/ /"
        Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)
      ]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formulario.value);
  }

}
