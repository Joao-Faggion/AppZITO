//ANGULAR
import { Component, Inject, OnInit } from '@angular/core';

//FORM
import { FormBuilder, Validators } from '@angular/forms';

//NGRX
import { Store } from '@ngrx/store';

//MATERIAL
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

//INTERFACES
import { BlogModel } from 'src/app/shared/store/BLOG/blog.model';
import { AppStateModel } from 'src/app/shared/store/GLOBAL/appstate.model';

//BLOG SHARED
import { addBlog, updateBlog } from 'src/app/shared/store/BLOG/blog.actions';
import { getblogbyid } from 'src/app/shared/store/BLOG/blog.selector';

//API´s
import { NgToastService } from 'ng-angular-popup';
import { NgConfirmService } from 'ng-confirm-box';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {

  pagetitle = '';
  editblogid = 0;
  editdata!: BlogModel;

  constructor(    private dialogref: MatDialogRef<AddBlogComponent>, 
                  private builder: FormBuilder,
                  private store: Store<AppStateModel>, 
                  @Inject(MAT_DIALOG_DATA) public data: {
                  id: number,
                  title: string,
                  isedit: true  }, 
                  private toastService: NgToastService, 
                  private confirm: NgConfirmService     ) {

  }

  ngOnInit(): void {
    this.pagetitle = this.data.title;
    if (this.data.isedit) {
      this.editblogid = this.data.id;
      this.store.select(getblogbyid(this.editblogid)).subscribe(_data => {        
        this.editdata = _data;
        this.blogForm.setValue({id:this.editdata.id,title:this.editdata.title,description:this.editdata.description});
      });
    }
  }

  ClosePopUp() {
    this.dialogref.close();
  }

  blogForm = this.builder.group({
    id: this.builder.control(0),
    title: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required)
  })

  SaveBlogs() {
    if (this.blogForm.valid) {
      const _bloginput: BlogModel = {
        id: 0,
        title: this.blogForm.value.title as string,
        description: this.blogForm.value.description as string
      }
      if(this.data.isedit){
        _bloginput.id=this.blogForm.value.id as number;
        this.store.dispatch(updateBlog({ bloginput: _bloginput }))
      }else{
      this.store.dispatch(addBlog({ bloginput: _bloginput }))
      }
      // window.location.reload();
      this.ClosePopUp();
    }
  }


}
