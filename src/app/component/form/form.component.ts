//ANGULAR
import { Component, OnInit } from '@angular/core';

//ANGULAR ROUTES
import { ActivatedRoute, Router } from '@angular/router';

//API´s
import { MasterService } from 'src/app/shared/master.service';
import { NgToastService } from 'ng-angular-popup';

//INTERFACE
import { Usuario } from 'src/app/Interface/IUsuarios';

//ANGULAR FORM
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  //VARIÁEIS
  pais = ['Brasil', 'Australia', 'Argentina', 'Alemanha', 'Peru', 'Uruguai', 'Bolívia', 'Angola', 'Estados Unidos', 'Canadá', 'França', 'Espanha', 'Congo', 'Armênia'];
  isUpdateActive: boolean = false;
  idAtualizaUsuario!: number;
  userForm!: FormGroup;
  validaLetras = /^[A-Za-z áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/;
  validaNumero = /^(1[1-9]|[4689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/
  validaEmail = /\S+@\S+\.\S+/;

  constructor (  private builder: FormBuilder, 
                 private service: MasterService, 
                 private toastService: NgToastService,
                 private Router: Router,
                 private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {

//FORMULÁRIO
    this.userForm = this.builder.group({
      nome: ['', Validators.compose([Validators.required, this.nameValidator()])],
      sobrenome: ['', Validators.compose([Validators.required, this.nameValidator()])],
      email: ['', Validators.compose([Validators.required, this.emailValidator()])],
      pais: ['', Validators.required],
      telefone: ['', Validators.compose([Validators.required, this.foneValidator()])]
    })

//ROTA PARA ALTERAR DADOS
    this.activatedRoute.params.subscribe(val => {
      this.idAtualizaUsuario = val['id'];
      this.service.getUsuarioById(this.idAtualizaUsuario).subscribe(res => {
        this.isUpdateActive = true;
        this.preenchaFormToUpdate(res)
      })
    })

  }


//VALIDADORES DOS INPUTS DO FORMULARIO  
  nameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }

      const nameValid = this.validaLetras.test(value);
      console.log(nameValid);
      return !nameValid ? { nameUsable: true } : null; //errors = nameUsable


    }
  }

  foneValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }

      const numValid = this.validaNumero.test(value);
      console.log(numValid);
      return !numValid ? { nameUsable: true } : null; //errors = nameUsable


    }
  }

  emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }

      const emailValid = this.validaEmail.test(value);
      console.log(emailValid);
      return !emailValid ? { nameUsable: true } : null; //errors = nameUsable


    }
  }

//FUNÇÔES DO FORMULÁRIO DO USUÁRIO
  SalvarUser() {
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
  
  atualizar() {
    
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
  
  LimparForm() {
    this.userForm.reset();
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
  
  
}
