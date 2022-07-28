import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;

  constructor() { 
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      edad: new FormControl(),
      dni: new FormControl(),
      password: new FormControl(),
      repite_password: new FormControl(),
      email: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formulario.value);
  }

}
