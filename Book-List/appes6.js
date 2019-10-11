class Book{
    constructor(title, author, isbn){
        this.author = author;
        this.isbn = isbn;
        this.title = title;
    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');
       const row = document.createElement('tr');
       row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td><a href="#" class="delete">X</a></td>
       `; 
       list.appendChild(row);
    }
    deleteBookFromList(target){
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();   
       }
    }
    showAlert(message, className){
        const div = document.createElement('div');
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');

        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));    
        container.insertBefore(div, form);

        setTimeout(function(){
                document.querySelector('.alert').remove();
        }, 3000);
    }
    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

document.getElementById('book-form').addEventListener('submit', function(e){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);
    const ui = new UI();

    if(title === '' || author === '' || isbn === '') {
            ui.showAlert('Please fill in all fields', 'error');
    } else {
            ui.addBookToList(book);
            ui.showAlert('Book Added!', 'success');
            ui.clearFields(); 
    }
    e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteBookFromList(e.target);
    ui.showAlert('Book Removed!', 'success');

    e.preventDefault();
});