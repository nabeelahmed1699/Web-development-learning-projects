// Book class:Instantiate every book with it
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// UI Class: handle UI tasks
class UI {
    static displayBooks() {
        const books = Store.getBooks();
        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list ');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = "#" class = "btn btn-danger btn-sm delete">X</a></td>`;
        list.appendChild(row);
    }
    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }
    static showAlerts(msg, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(msg));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        // vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
    static clearFields() {
        document.querySelector("#title").value = '';
        document.querySelector("#author").value = '';
        document.querySelector("#isbn").value = '';
    }
}

//storage class :which handle storage
class Store {
    static getBooks() {
        let books = [];
        if (localStorage.getItem('books') === null) {

        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static addBook(book) {
        let books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));

    }
}
// Event: display Book
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event : add a Book
document.querySelector('#book-form').addEventListener('submit', e => {
    // prevent default
    e.preventDefault();
    // get form data
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    if (title === '' || author === '' || isbn === '') {
        UI.showAlerts('Please Fill all the fields!', 'danger');
    } else {
        // instantiate book
        const book = new Book(title, author, isbn);

        UI.addBookToList(book);
        // add book to local storage
        Store.addBook(book);
        //success alert
        UI.showAlerts('Book Added!', 'success');
        // clear fields
        UI.clearFields();
    }
});
// Event : remove a Book
document.querySelector('#book-list').addEventListener('click', e => {
    // remove book from UI
    UI.deleteBook(e.target);
    //remove from store
    Store.removeBook(e.target.parentElement.previousElementSibling.innerText);
    //show info
    const msg = `Book: '${e.target.parentElement.parentElement.firstElementChild.innerText}' is removed`;
    UI.showAlerts(msg, 'info');
});