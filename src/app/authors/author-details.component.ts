import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Author } from "../authors";

@Component({
  selector: "app-author-detail",
  template: `
    <div *ngIf="author">
      {{ author.firstName }} {{ author.lastName }} {{ author.id }}
      <button (click)="handleSelete()">select</button>
      <button (click)="handleDelete()">delete</button>
    </div>
  `,
  styles: [``]
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: Author;
  @Output() deleteAuthor = new EventEmitter<Author>();
  constructor() {}

  ngOnInit() {}

  handleDelete() {
    this.deleteAuthor.emit(this.author);
  }

  handleSelete() {
    this.deleteAuthor.emit(this.author);
  }
}
