import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book";
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  SelectedBook : any;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAll();
  }
  onSelect(book:Book):void{
    this.SelectedBook = book;
  }
  getAll() {
    this.bookService.getAll().subscribe(books => {
      this.books = books;
    });
  }
}
