/* eslint-disable import/prefer-default-export */
import { getStoredBooks, setStoredBooks } from './storage.js';
import { createBookElement } from './book.js';

export class Library {
  constructor() {
    this.books = getStoredBooks();
    this.addBookForm = document.getElementById('add-book-form');
    this.booksList = document.getElementById('books-list');
    this.addBookForm.addEventListener('submit', this.addBook.bind(this));
    this.render();
  }

  render = () => {
    this.booksList.innerHTML = '';
    this.books.forEach((book) => {
      const bookElement = createBookElement(book, this.removeBook.bind(this));
      this.booksList.appendChild(bookElement);
    });
  }

  addBook = (event) => {
    event.preventDefault();
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const title = titleInput.value;
    const author = authorInput.value;
    const newBook = { title, author };
    this.books.push(newBook);
    setStoredBooks(this.books);
    const bookElement = createBookElement(newBook, this.removeBook.bind(this));
    this.booksList.appendChild(bookElement);
    this.addBookForm.reset();
  }

  removeBook = (bookToRemove) => {
    this.books = this.books.filter((book) => book !== bookToRemove);
    setStoredBooks(this.books);
    this.render();
  }
}
