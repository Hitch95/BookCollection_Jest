import { BookCollection } from "../app/BookCollection";

describe("BookCollection", () => {
    it("should add a book", () => {
        const collection = new BookCollection();
        const newBook = {
            id: 1,
            titleName: "Book 1",
            author: "Author 1"
        };
        collection.addBook(newBook);
        const allBooks = collection.getAllBooks();
        expect(allBooks).toContainEqual(newBook);
    });

    it ("should remove a book", () => {
        const collection = new BookCollection();
        const addedBook = {
            id: 1,
            titleName: "Book 1",
            author: "Author 1"
        };
        collection.addBook(addedBook);
        collection.removeBook(addedBook.id);
        const allBooks = collection.getAllBooks();
        expect(allBooks).toEqual([]);
    });

    it ("should find a book by name", () => {
        const collection = new BookCollection();
        const addedBook = {
            id: 1,
            titleName: "Book 1",
            author: "Author 1"
        };
        collection.addBook(addedBook);
        const findBook = collection.findBookByName("Book 1");
        expect(findBook).toContainEqual(addedBook);
    });

    it ("should find a book by author name", () => {
        const collection = new BookCollection();
        const addedBook = {
            id: 1,
            titleName: "Book 1",
            author: "Author 1"
        }
        collection.addBook(addedBook);
        const findBook = collection.findBookByAuthor("Author 1");
        expect(findBook).toContainEqual(addedBook);
    });
})