//ANGULAR
import { Component, OnInit } from '@angular/core';

//ANGULAR ROUTES
import { ActivatedRoute } from '@angular/router';

//INTERFACE
import { Usuario } from 'src/app/Interface/IUsuarios';

//API
import { MasterService } from 'src/app/shared/master.service';

@Component({
  selector: 'app-detalhes-usuarios',
  templateUrl: './detalhes-usuarios.component.html',
  styleUrls: ['./detalhes-usuarios.component.scss']
})
export class DetalhesUsuariosComponent implements OnInit {


  detalhesUsuario!: Usuario;
  usuarioId!: number;
  
  constructor(    private activatedRoute: ActivatedRoute, 
                  private service: MasterService   ) {  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val => {
      this.usuarioId = val['id'];
      this.fetchUsuarioDetail(this.usuarioId);
    })      
  }

  fetchUsuarioDetail(Id: number){
    this.service.getUsuarioById(Id).subscribe(res => {
      this.detalhesUsuario = res;
      console.log(this.detalhesUsuario)
    })
  }

}
