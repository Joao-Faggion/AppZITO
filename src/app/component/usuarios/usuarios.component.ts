import { Component, OnInit, ViewChild } from '@angular/core';
import { EditUsarioComponent } from '../edit-usario/edit-usario.component';
import { MatDialog } from '@angular/material/dialog';
import { MasterService } from 'src/app/shared/master.service';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/Interface/IUsuarios';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarioList!: any;
  dataSource: any;
  displayedColumns: string[] = ["nome", "sobrenome", "pais", "endereco", "complemento", "email", "telefone"];
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

  EditUser() {
    this.OpenPopUp();
  }

  OpenPopUp() {
    this.dialog.open(EditUsarioComponent, {
      width: '65%',
    })
  }

}
