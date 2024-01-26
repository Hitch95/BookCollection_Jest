import { getAveragePrice } from "./BookPriceService";

type Book = {
    id: number;
    titleName: string;
    author: string;
};

interface IsAvailable extends Book {
    available: boolean;
};

export class BookCollection {
    private books: Book[] = [];

    addBook(book: Book): void {
        if (this.books.some((b) => b.titleName === book.titleName)) {
            throw new Error("This book already exists");
        }
        this.books.push(book);
    };

    removeBook(id: number): void {
        this.books = this.books.filter((book) => book.id !== id)
    };
    
    findBookById(id: number) {
        return this.books.find((book) => book.id === id);
    };

    findBookByName(name: string): Book[] {
        const foundBooks = this.books.filter((book) => book.titleName.includes(name));
        if (foundBooks.length === 0) {
            throw new Error ("Book not found");
        }
        return foundBooks;
    };

    findBookByAuthor(author: string): Book[] {
        return this.books.filter((book) => book.author.includes(author));
    };

    getAllBooks(): Book[] {
        return this.books;
    };
};
