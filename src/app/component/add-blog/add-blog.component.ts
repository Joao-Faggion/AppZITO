import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addBlog, updateBlog } from 'src/app/shared/store/BLOG/blog.actions';
import { BlogModel } from 'src/app/shared/store/BLOG/blog.model';
import { getblogbyid } from 'src/app/shared/store/BLOG/blog.selector';
import { AppStateModel } from 'src/app/shared/store/GLOBAL/appstate.model';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {

  pagetitle = '';
  editblogid = 0;
  editdata!: BlogModel;

  constructor(private dialogref: MatDialogRef<AddBlogComponent>, private builder: FormBuilder,
    private store: Store<AppStateModel>, @Inject(MAT_DIALOG_DATA) public data: any) {

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
      this.ClosePopUp();
    }
  }


}
