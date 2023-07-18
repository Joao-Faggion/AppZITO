import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogModel } from './store/BLOG/blog.model';
import { Observable } from 'rxjs';
import { Usuario } from '../Interface/IUsuarios';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  haveAccess() {
    return true;
  }

  editUsuario(id: number, data: any): Observable<any> {
    return this.http.get(`http://localhost:3000/usuarios/${id}`, data);
  }

  getAllUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>("http://localhost:3000/usuarios");
  }

  SaveUsuario(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/usuarios', data);
  }

  DeletarUsuario(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/usuarios/${id}`);
  }

  getAllBlogs(): Observable<BlogModel[]> {
    return this.http.get<BlogModel[]>("http://localhost:3000/Blogs");
  }

}
