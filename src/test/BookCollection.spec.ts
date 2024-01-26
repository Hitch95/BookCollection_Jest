import { BookCollection } from "../app/BookCollection";
import { getAveragePrice, BookCollectionAdvanced } from "../app/BookPriceService";

describe("BookCollection", () => {

    it("should get all books", () => {
        const collection = new BookCollection();
        const addedBook = {
            id: 1,
            titleName: "The Daily Stoic",
            author: "Ryan Holiday",
        };
        collection.addBook(addedBook);
        const allBooks = collection.getAllBooks();
        expect(allBooks).toContainEqual(addedBook);
    });

    it("should add a book", () => {
        const collection = new BookCollection();
        const newBook = {
            id: 1,
            titleName: "The Daily Stoic",
            author: "Ryan Holiday"
        };
        collection.addBook(newBook);
        const allBooks = collection.getAllBooks();
        expect(allBooks).toContainEqual(newBook);
    });

    it("should remove a book", () => {
        const collection = new BookCollection();
        const addedBook = {
            id: 1,
            titleName: "The Daily Stoic",
            author: "Ryan Holiday"
        };
        collection.addBook(addedBook);
        collection.removeBook(addedBook.id);
        const allBooks = collection.getAllBooks();
        expect(allBooks).toEqual([]);
    });

    it("should find a book by book's name", () => {
        const collection = new BookCollection();
        const addedBook = {
            id: 1,
            titleName: "The Daily Stoic",
            author: "Ryan Holiday"
        };
        collection.addBook(addedBook);
        const findBook = collection.findBookByName("The Daily Stoic");
        expect(findBook).toContainEqual(addedBook);
    });

    it("should find a book by author's name", () => {
        const collection = new BookCollection();
        const addedBook = {
            id: 1,
            titleName: "The Daily Stoic",
            author: "Ryan Holiday"
        }
        collection.addBook(addedBook);
        const findBook = collection.findBookByAuthor("Ryan Holiday");
        expect(findBook).toContainEqual(addedBook);
    });

    it("should find a book by book's id", () => {
        const collection = new BookCollection();
        const addedBook = {
            id: 1,
            titleName: "The Daily Stoic",
            author: "Ryan Holiday"
        }
        collection.addBook(addedBook);
        const findBook = collection.findBookById(1);
        expect(findBook).toEqual(addedBook);
    });
});

// Mock the entire BookPriceService module
jest.mock("../app/BookPriceService", () => ({
    getAveragePrice: jest.fn().mockReturnValueOnce(12)
}));

describe("BookCollection Advanced", () => {
    let bookCollection: BookCollectionAdvanced;
    let book1: { id: number; titleName: string; author: string; };

    beforeEach(() => {
        bookCollection = new BookCollectionAdvanced();
        book1 = {
            id: 1,
            titleName: "The Daily Stoic",
            author: "Ryan Holiday"
        };
        bookCollection.addBook(book1);
    });

    it("should use Price API to get book price", () => {
        const price = bookCollection.getBookPrice(book1.titleName, 'FR');

        expect(price).toBe(12);
        expect(getAveragePrice).toHaveBeenCalledWith(book1.titleName, 'FR');
    });
});
