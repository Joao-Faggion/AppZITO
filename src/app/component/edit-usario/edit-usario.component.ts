import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from 'src/app/Interface/IUsuarios';
import { MasterService } from 'src/app/shared/master.service';

@Component({
  selector: 'app-edit-usario',
  templateUrl: './edit-usario.component.html',
  styleUrls: ['./edit-usario.component.scss']
})
export class EditUsarioComponent implements OnInit {

  id!: number;
  body!: Usuario;
  pais = ['Brasil', 'Australia', 'Argentina', 'Alemanha', 'Peru', 'Uruguai', 'Bolívia', 'Angola', 'Estados Unidos', 'Canadá', 'França', 'Espanha', 'Congo', 'Armênia'];

  constructor(private builder: FormBuilder, private dialog: MatDialogRef<EditUsarioComponent>, @Inject(MAT_DIALOG_DATA) public data: Usuario, private service: MasterService) {

  }

  usuarioForm = this.builder.group({
    nome: this.builder.control('', Validators.required),
    sobrenome: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.required),
    pais: this.builder.control('', Validators.required),
    complemento: this.builder.control('', Validators.required),
    telefone: this.builder.control('', Validators.required),
    endereco: this.builder.control('', Validators.required),
  });

  // EditarUsuario(data: Usuario) {
  //   if (this.usuarioForm.valid) {
  //     console.log(this.usuarioForm.value)
  //     this.service.updateUsuario(data).subscribe({
  //       next: (val: any) => {
  //         window.location.reload();
  //       },
  //       error: (err: any) => {
  //         console.error(err)
  //       }
  //     })
  //   }
  // }

  EditarUsuario() {
    if(this.usuarioForm.valid){
      this.service.updateUsuario(this.usuarioForm.value).subscribe({
        next: (val: any) => {
          alert('Usuário adicionado com Sucesso!');
          window.location.reload();
        },
        error: (err: any) => {
          console.error(err)
        }
    })
  }
}



  ClosePopUp() {
    this.dialog.close();
  }

  ngOnInit(): void {
    //   this.userForm.setValue({
    //     nome: 'João Faggion', sobrenome: 'Faggion',email: 'joafaggion2003@gmail.com', pais: 'Brasil', telefone: '46991150027'})
    // }

  }
}
