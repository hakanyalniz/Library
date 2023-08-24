function Book(name, author, page, status) {
  this.name = name;
  this.author = author;
  this.page = page;
  this.status = status;
}

function addBookToLibrary() {
  // Getting values from the book add form
  let bookNameValue = document.getElementById("book-name").value;
  let bookAuthorValue = document.getElementById("book-author").value;
  let bookPageValue = document.getElementById("book-page").value;
  let bookStatusValue = document.getElementById("book-status").value;

  // Using the values to create a book object
  let newBook = new Book(
    bookNameValue,
    bookAuthorValue,
    bookPageValue,
    bookStatusValue
  );

  // Which is then added to myLibrary
  myLibrary.push(newBook);

  // Then we call displayBookOnScreen to show these on the screen
  displayBookOnScreen(myLibrary);

  bookForm.style.display = "none";
}

function displayBookOnScreen(myLibrary) {
  let lastBook = myLibrary[myLibrary.length - 1];
  let newBookCard = document.createElement("div");
  newBookCard.classList.add("book-card");
  //   {name: 'asdasd', author: 'asd', page: 's', status: '22'}

  for (let element in lastBook) {
    jsLibrary.push(lastBook[element]);
  }

  tempLibrary.push(
    `Book Name: ${jsLibrary[0]}</br>` +
      `Author: ${jsLibrary[1]}</br>` +
      `Page: ${jsLibrary[2]}</br>` +
      `Status: ${jsLibrary[3]}</br>`
  );
  //   The jsLibrary is only needed to provide the books to tempLibrary,
  //       // afterwards it is reset so it can be ready for the next book
  newBookCard.innerHTML = tempLibrary;
  bookShelf.appendChild(newBookCard);
  jsLibrary = [];
  tempLibrary = [];

  ClearFields();
}

function showForm() {
  bookForm.style.display = "flex";
}

function ClearFields() {
  document.getElementById("book-name").value = "";
  document.getElementById("book-author").value = "";
  document.getElementById("book-page").value = "";
  document.getElementById("book-status").value = "";
}

let bookShelf = document.querySelector(".book-shelf");
let bookForm = document.querySelector(".book-form");

let firstBook = new Book();

let tempLibrary = [];
let jsLibrary = [];
const myLibrary = [];
