import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-usario',
  templateUrl: './edit-usario.component.html',
  styleUrls: ['./edit-usario.component.scss']
})
export class EditUsarioComponent implements OnInit {

  pais =['Brasil', 'Australia', 'Argentina', 'Alemanha', 'Peru', 'Uruguai', 'Bolívia', 'Angola', 'Estados Unidos', 'Canadá', 'França', 'Espanha', 'Congo', 'Armênia'];

  constructor(private builder: FormBuilder, private dialog: MatDialogRef<EditUsarioComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 

  }

  userForm = this.builder.group({
    nome: this.builder.control('', Validators.required),
    sobrenome: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.required),
    pais: this.builder.control('', Validators.required),
    complemento: this.builder.control('', Validators.required),
    telefone: this.builder.control('', Validators.required),
    endereco: this.builder.control('', Validators.required),
    senha: this.builder.control('', Validators.required),
    novasenha: this.builder.control('', Validators.required)
  });

  SalvarUser(){
    console.log(this.userForm.value);
  }

  ClosePopUp(){
    this.dialog.close();
  }

  ngOnInit(): void {
  //   this.userForm.setValue({
  //     nome: 'João Faggion', sobrenome: 'Faggion',email: 'joafaggion2003@gmail.com', pais: 'Brasil', telefone: '46991150027'})
  // }

}
}
