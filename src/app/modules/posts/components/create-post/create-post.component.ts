import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  forms = this._fb.group({
    title: [''],
    content: ['']
  });

  constructor(private readonly _fb: FormBuilder) {
  }

  createPost() {
    console.log('Creating post...');
    const post = {
      title: this.forms.controls.title.value,
      content: this.forms.controls.content.value
    }
    console.log(JSON.stringify(post));
  }
}
