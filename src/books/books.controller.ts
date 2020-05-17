import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { BooksService } from "./books.service";
import { CreateBookDTO } from "./dto/create-book.dto";

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {}

    @Get()
    async getBooks() {
        const books = await this.booksService.getBooks();
        return books;
    }

    @Get(':bookId')
    async getBook(@Param('bookId') bookID) {
        const book = await this.booksService.getBook(bookID);
        return book;
    }

    @Post()
    async addBook(@Body() createBookDTO: CreateBookDTO) {
        const book = await this.booksService.addBook(createBookDTO);
        return book;
    }

    @Delete()
    async deletebook(@Query() query) {
        const books = await this.booksService.deleteBook(query.bookID);
        return books;
    }
}
