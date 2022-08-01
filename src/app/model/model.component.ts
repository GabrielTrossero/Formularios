import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

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
      edad: new FormControl('22', [ //Podemos poner un valor por default
        this.edadValidator
      ]), 
      dni: new FormControl('',[
        Validators.minLength(8),
        Validators.maxLength(8)
      ]),
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
    //esto capta los cambios del campo email, para por ejemplo, comprobar si es un email cargado en la BD
    const emailControl = this.formulario.controls.email;
    emailControl.valueChanges.pipe(debounceTime(500)).subscribe(value => { //debounceTime(500) comprueba cada 5seg los cambios realizados (para no estar todo el tiempo "controlado")
      console.log(value);
    });
  }

  onSubmit(){
    console.log(this.formulario.value);
  }

  edadValidator(FormControl){
    const value = FormControl.value;
    
    const min = 18;
    const max = 65;

    if(value >= min && value <=max){
      return null;
    }
    else{
      return {edadValidator: {max, min}};
    }
  }

}
