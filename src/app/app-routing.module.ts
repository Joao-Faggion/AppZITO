import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContadorComponent } from './component/contador/contador.component';
import { authGuard } from './Guard/auth.guard';
import { FormComponent } from './component/form/form.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { DetalhesUsuariosComponent } from './component/detalhes-usuarios/detalhes-usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blog',
    component: BlogComponent, canActivate:[authGuard]
  },
  {
    path: 'contador',
    component: ContadorComponent, canActivate:[authGuard]
  },
  {
    path: 'formulario',
    component: FormComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'detalhes/:id',
    component: DetalhesUsuariosComponent
  },
  {
    path: 'atualizar/:id',
    component: FormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
