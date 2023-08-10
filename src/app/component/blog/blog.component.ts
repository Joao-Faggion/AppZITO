//ANGULAR
import { Component, OnInit } from '@angular/core';

//MATERIAL
import { MatDialog } from '@angular/material/dialog';

//NGRX
import { Store } from '@ngrx/store';

//INTERFACE
import { AppStateModel } from 'src/app/shared/store/GLOBAL/appstate.model';

//SHARED BLOG
import { BlogModel, Blogs } from 'src/app/shared/store/BLOG/blog.model';
import { getBlog, getBlogInfo } from 'src/app/shared/store/BLOG/blog.selector';

//COMPONENT
import { AddBlogComponent } from '../add-blog/add-blog.component';

//BLOG ACTIONS
import { deleteBlog, loadBlog } from 'src/app/shared/store/BLOG/blog.actions';

//API´s
import { NgToastService } from 'ng-angular-popup';
import { NgConfirmService } from 'ng-confirm-box';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogList!: BlogModel[];
  blogInfo!: Blogs;

  constructor(    private store: Store<AppStateModel>, 
                  private dialog: MatDialog, 
                  private toastService: NgToastService, 
                  private confirm: NgConfirmService   ) { }

                  

  ngOnInit(): void {
    this.store.dispatch(loadBlog());
    this.store.select(getBlogInfo).subscribe(item => {
      this.blogInfo = item;
    })
  }

  AddBlog() {
    this.OpenPopUp(0, 'Add Blog')
  }

  OpenPopUp(id: any, title: any, isedit = false) {
    this.dialog.open(AddBlogComponent, {
      width: '65%',
      data: {
        id: id,
        title: title,
        isedit: isedit
      }
    })
  }

  EditBlog(id: any, title: any) {
    this.OpenPopUp(id, title, true);
  }

  RemoveBlog(id: any, title: any) {

    try {
      this.confirm.showConfirm(`Você quer deletar este Blog?`, () => {
        this.store.dispatch(deleteBlog({ id }));
        this.toastService.success({ detail: "SUCESSO", summary: "Blog Deletado", duration: 2000 });
      },
        () => {

        }
      )
    }

    catch (e) {

      console.log(e)

    }
  }

}
