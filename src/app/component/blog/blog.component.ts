import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BlogModel } from 'src/app/shared/store/BLOG/blog.model';
import { getBlog } from 'src/app/shared/store/BLOG/blog.selector';
import { AppStateModel } from 'src/app/shared/store/GLOBAL/appstate.model';
import { AddBlogComponent } from '../add-blog/add-blog.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private store: Store<AppStateModel>, private dialog: MatDialog) { }

  blogList!: BlogModel[];

  ngOnInit(): void {
      this.store.select(getBlog).subscribe(item =>{
        this.blogList = item;
        console.log(this.blogList);
      })
  }

  AddBlog(){
    this.OpenPopUp(0, 'Add Blog')
  }

  OpenPopUp(id: any, title: any, isedit = false){
    this.dialog.open(AddBlogComponent, {
      width: '40%',
      data: {
        id: id,
        title: title,
        isedit: isedit
      }
    })
  }

  EditBlog(id: any){
    this.OpenPopUp(0, 'Edit Blog', true);   
  }

 

}
