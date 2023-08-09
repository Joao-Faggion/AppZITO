import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgConfirmService } from 'ng-confirm-box';
import { Usuario } from 'src/app/Interface/IUsuarios';
import { MasterService } from 'src/app/shared/master.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  pais =['Brasil', 'Australia', 'Argentina', 'Alemanha', 'Peru', 'Uruguai', 'Bolívia', 'Angola', 'Estados Unidos', 'Canadá', 'França', 'Espanha', 'Congo', 'Armênia'];

  isUpdateActive: boolean = false;
  idAtualizaUsuario!: number;
  userForm!: FormGroup;

  constructor(private builder: FormBuilder, private service: MasterService, private toastService: NgToastService, 
    private Router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.userForm = this.builder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', Validators.required],
      pais: ['', Validators.required],
      telefone: ['', Validators.required]
    })

    this.activatedRoute.params.subscribe(val => {
      this.idAtualizaUsuario = val['id'];
      this.service.getUsuarioById(this.idAtualizaUsuario).subscribe(res => {
        this.isUpdateActive = true;
        this.preenchaFormToUpdate(res)
      })
    })

  }

  SalvarUser(){
    if (this.userForm.valid) {
      
      try {
        this.service.saveUsuario(this.userForm.value).subscribe(res => {
          this.toastService.success({ detail: "SUCESSO", summary: "Usuário adicionado.", duration: 2000 });
        }
        )
      }

      catch (e) {
        console.log(e);
      }

      finally {
        setTimeout(() => {
          this.Router.navigate(['usuarios']);
        }, 2002);

      }

    } else {
      this.toastService.error({ detail: "ERRO", summary: "Informe seus dados nos campos solicitados.", duration: 3000 })
    }
  }

  preenchaFormToUpdate(usuario: Usuario) {
    this.userForm.setValue({
      nome: usuario.nome,
      sobrenome: usuario.sobrenome,
      email: usuario.email,
      telefone: usuario.telefone,
      pais: usuario.pais
    })
  }


  atualizar(){
    this.service.updateUsuario(this.idAtualizaUsuario, this.userForm.value).subscribe(res => {
      try {
        this.toastService.success({ detail: "SUCESSO", summary: "Usuário Alterado", duration: 1500 });
      }
      catch (e) {
        console.log(e)
      }
      finally {
        this.userForm.reset();

        setTimeout(() => {
          this.Router.navigate(['usuarios'])
        }, 1502)


      }
    })
  }

  LimparForm(){
    this.userForm.reset();
  }



}
