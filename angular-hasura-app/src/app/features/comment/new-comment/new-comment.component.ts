import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Comments } from './../../../../generated/graphql';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {

  @Output()
  readonly added = new EventEmitter<Pick<Comments, 'id' | 'comment'>>();

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      comment: new FormControl('', Validators.required)
    });
  }

  onAdd(): void {
    this.added.emit({
      ...this.form.value,
      id: Date.now().toString()
    })
  }

}
