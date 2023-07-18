import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MasterService } from 'src/app/shared/master.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  pais =['Brasil', 'Australia', 'Argentina', 'Alemanha', 'Peru', 'Uruguai', 'Bolívia', 'Angola', 'Estados Unidos', 'Canadá', 'França', 'Espanha', 'Congo', 'Armênia'];

  constructor(private builder: FormBuilder, private service: MasterService) { }

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
    pais: this.builder.control('', Validators.required),
    telefone: this.builder.control('', Validators.required),
    genero: this.builder.control('Masculino'),
  })

  SalvarUser(){
    console.log(this.userForm.value);
    if(this.userForm.valid){
      this.service.SaveUsuario(this.userForm.value).subscribe({
        next: (val: any) => {
          alert('Usuário adicionado com Sucesso!');
        },
        error: (err: any) => {
          console.error(err)
        }
      })
  }
}

  LimparForm(){
    this.userForm.reset();
  }



}
