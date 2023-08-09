import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MasterService } from 'src/app/shared/master.service';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/Interface/IUsuarios';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormComponent } from '../form/form.component';
import { MatIconModule } from '@angular/material/icon';
import { NgToastService } from 'ng-angular-popup';
import { NgConfirmService } from 'ng-confirm-box';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  Usuario!: Usuario;
  usuarioList!: any;
  dataSource: any;
  displayedColumns: string[] = ["nome", "sobrenome", "pais", "email", "telefone", "excluir"];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog,private router: Router , private service: MasterService, private toastService: NgToastService, private confirm: NgConfirmService) {
    this.loadUsuario();
  }

  ngOnInit(): void {

  }

  edit(id: number) {
    this.router.navigate(['atualizar', id]);
  }

  loadUsuario() {
    this.service.getAllUsuarios().subscribe(res => {
      this.usuarioList = res;
      this.dataSource = new MatTableDataSource<Usuario>(this.usuarioList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }


  filterChange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  DeletarUsuario(id: number) {

    try {
      this.confirm.showConfirm(`Você quer deletar esse usuário?`, () => {
        this.service.deletarUsuario(id).subscribe(res => {
          this.toastService.success({ detail: "SUCESSO", summary: "Usuário Deletado", duration: 2000 });
          this.service.getAllUsuarios;
        })
      },
        () => {

        })

    }
    catch (e) {
      console.log(e)
    }
    finally {
      setTimeout(() => {
        window.location.reload()
      }, 2002)
    }


  }
}
