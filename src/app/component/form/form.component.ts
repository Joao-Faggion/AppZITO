import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  pais =['Brasil', 'Australia', 'Argentina', 'Alemanha', 'Peru', 'Uruguai', 'Bolívia', 'Angola', 'Estados Unidos', 'Canadá', 'França', 'Espanha', 'Congo', 'Armênia'];

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {

  }

  userForm = this.builder.group({
    nome: this.builder.control('', Validators.required),
    sobrenome: this.builder.control('', Validators.required),
    datanasc: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.required])),
    endereco: this.builder.control('', Validators.required),
    senha: this.builder.control('', Validators.required),
    complemento: this.builder.control('', Validators.required),
    país: this.builder.control('', Validators.required),
    telefone: this.builder.control('', Validators.required),
    genero: this.builder.control('Masculino'),
  })

  SalvarUser(){
    console.log(this.userForm.value)
  }

  LimparForm(){
    this.userForm.reset();
  }



}
