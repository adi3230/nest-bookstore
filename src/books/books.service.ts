import { Injectable, HttpException } from '@nestjs/common';
import { BOOKS } from "../mocks/books.mocks";

@Injectable()
export class BooksService {
    books = BOOKS;

    getBooks(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.books);
        });
    }

    getBook(bookId): Promise<any> {
        let id = Number(bookId);
        return new Promise<any>(resolve => {
            const book = this.books.find(book => book.id === id);
            if (!book) {
                throw new HttpException('Book does not exist', 404);
            }
            resolve(book);
        });
    }

    addBook(book): Promise<any> {
        return new Promise<any>(resolve => {
            this.books.push(book);
            resolve(this.books);
        });
    }

    deleteBook(bookID): Promise<any> {
        let id = Number(bookID);
        return new Promise<any>(resolve => {
            let index = this.books.findIndex(book => book.id === id);
            if (index === -1) {
                throw new HttpException('Book does nor exist', 404);
            }
            this.books.splice(1, index);
            resolve(this.books);
        });
    }
}
