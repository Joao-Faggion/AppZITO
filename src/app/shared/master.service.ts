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

  haveAccess(){
    return true;
  }

  getAllUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>("http://localhost:3000/usuarios");
  }

  getAllBlogs(): Observable<BlogModel[]>{
    return this.http.get<BlogModel[]>("http://localhost:3000/Blogs");
  }

}
