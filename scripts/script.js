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

  // Using the values to create a book instance
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
  addDelete();

  bookForm.style.display = "none";
}

function displayBookOnScreen(myLibrary) {
  let lastBook = myLibrary[myLibrary.length - 1];
  let newBookCard = document.createElement("div");
  newBookCard.classList.add("book-card");

  for (let element in lastBook) {
    jsLibrary.push(lastBook[element]);
  }

  tempLibrary.push(
    `<div class="data-field">Book Name</div> ${jsLibrary[0]}</br>` +
      `<div class="data-field">Author</div> ${jsLibrary[1]}</br>` +
      `<div class="data-field">Page</div> ${jsLibrary[2]}</br>` +
      `<div class="data-field">Status</div> ${jsLibrary[3]}</br>` +
      `<button type="button" class="delete-button">Delete</button>`
  );

  newBookCard.innerHTML = tempLibrary;
  bookShelf.appendChild(newBookCard);

  //   The jsLibrary is only needed to provide the books to tempLibrary,
  //    afterwards it is reset so it can be ready for the next book
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

function addDelete() {
  let deleteButtons = document.querySelectorAll(".delete-button");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.parentNode; // Get the parent card element
      card.remove(); // Remove the card
    });
  });
}

let bookShelf = document.querySelector(".book-shelf");
let bookForm = document.querySelector(".book-form");

let firstBook = new Book();

let tempLibrary = [];
let jsLibrary = [];
const myLibrary = [];
