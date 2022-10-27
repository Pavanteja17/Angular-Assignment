import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  books:Book[]=[];
  book:Book;
  constructor() {
    this.book=new Book();
    //initiate students array
    this.books=[
      {bookId:1,bookName:'The black tea',price:100,language:'English',year:2001, author:'Joe Harris'},
      {bookId:2,bookName:'The Grapes of Wrath',price:100,language:'English',year:2002, author:'John Steinbeck'},
      {bookId:3,bookName:'Alice in Wondeland',price:100,language:'English',year:2001, author:'William Faulkner'},
      {bookId:4,bookName:'Animal Farm',price:100,language:'English',year:2001, author:'George Orwell'},
    ]
   }
  ngOnInit(): void {
  }
  Save() //add new student details to array
  {
    this.books.push(this.book);
    this.book=new Book();
  }

}
