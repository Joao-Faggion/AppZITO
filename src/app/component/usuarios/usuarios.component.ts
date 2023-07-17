import { Component, OnInit } from '@angular/core';
import { EditUsarioComponent } from '../edit-usario/edit-usario.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
      
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
