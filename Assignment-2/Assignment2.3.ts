class Book{
    bookId:number;
    bookName:String;
    title:String;
    author:String;
    price:number;
    quantity:number;

    constructor(bookId:number, bookName:String, title:String, author:String, price:number, quantity:number){
        this.author = author;
        this.bookId = bookId;
        this.bookName = bookName;
        this.price = price;
        this.quantity = quantity;
        this.title = title;
    }
}

class BookStore{
    books: Book[] = [];

    displayBooks():void{
        console.log("----------Book details--------")
        for (let book of this.books){
            console.log("BookId: "+book.bookId);
            console.log("BookName: "+book.bookName);
            console.log("Book title: "+book.title);
            console.log("Book author: "+book.author);
            console.log("Book price: "+book.price);
            console.log("Book quantity: "+book.quantity);
        }
    }
    addBook(book:Book){
        this.books.push(book);
    }
    calculateTotalBillAmount():number{
        var totalBillAmount = 0;
        for( let book of this.books){
            totalBillAmount = totalBillAmount + book.price * book.quantity;
        }
        return totalBillAmount;
    }
}

let book1 = new Book(1, "Comic book", "The sun rises in the west", "Pavan", 200, 2);
let book2 = new Book(2, "critic", "Moonlight", "james", 200, 20);
let bookStore = new BookStore();
bookStore.addBook(book1);
bookStore.addBook(book2);
bookStore.displayBooks();
var totalBillAmount = bookStore.calculateTotalBillAmount();
console.log("Total bill amount is: "+totalBillAmount);