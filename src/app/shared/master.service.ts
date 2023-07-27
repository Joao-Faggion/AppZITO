import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogModel } from './store/BLOG/blog.model';
import { Observable, tap } from 'rxjs';
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
    return this.http.post(`http://localhost:3000/usuarios/${id}`, data);
  }

  getAllUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>("http://localhost:3000/usuarios");
  }

  saveUsuario(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/usuarios', data);
  }

  deletarUsuario(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/usuarios/${id}`);
  }

  getAllBlogs(): Observable<BlogModel[]> {
    return this.http.get<BlogModel[]>("http://localhost:3000/Blogs");
  }

  createBlog(bloginput: BlogModel) {
    return this.http.post("http://localhost:3000/Blogs", bloginput).pipe(
      tap(() => {
        this.http.get<BlogModel>("");
      })
    );
  }

  updateBlog(bloginput: BlogModel) {
    return this.http.put("http://localhost:3000/Blogs/"+bloginput.id, bloginput);
  }

  deleteBlog(Blogid: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/Blogs/${Blogid}`);
  }

}
