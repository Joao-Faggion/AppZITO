import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MasterService } from 'src/app/shared/master.service';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/Interface/IUsuarios';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormComponent } from '../form/form.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

   Usuario!: Usuario;
  usuarioList!: any;
  dataSource: any;
  displayedColumns: string[] = ["nome", "sobrenome", "pais", "endereco", "complemento", "email", "telefone", "excluir"];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private service: MasterService) {
    this.loadUsuario();
  }

  ngOnInit(): void {
      
  }

  loadUsuario(){
    this.service.getAllUsuarios().subscribe(res => {
      this.usuarioList = res;
      this.dataSource = new MatTableDataSource<Usuario>(this.usuarioList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  

  filterChange(data: Event){
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  DeletarUsuario(id: number){
    this.service.deletarUsuario(id).subscribe({
      next: (res) => {
        alert('Usuário deletado com sucesso!');
        window.location.reload();
    },
    error: console.log
    })

  }

}
