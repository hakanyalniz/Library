// Constructor function for creating Book objects
function Book(name, author, page, status) {
  this.name = name;
  this.author = author;
  this.page = page;
  this.status = status;
}

// Function to add a new book to the library
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

  // Adding the new book to myLibrary
  myLibrary.push(newBook);

  // Displaying the book on the screen
  displayBookOnScreen(myLibrary);
  addDelete(); // Adding delete functionality
  addEdit(); // Adding edit functionality

  bookForm.style.display = "none"; // Hiding the add book form
}

// Function to display a book on the screen
// myLibrary was populated in the above function
function displayBookOnScreen(myLibrary) {
  let lastBook = myLibrary[myLibrary.length - 1];
    // Creating a new book card element
  let newBookCard = document.createElement("div");
  newBookCard.classList.add("book-card");

  for (let element in lastBook) {
    jsLibrary.push(lastBook[element]);
  }

  // Creating HTML structure for displaying the book on cards
  tempLibrary.push(
    `<div class="field-wrapper">
    <div class="data-field">Book Name</div> <span class="data">${jsLibrary[0]}</span>` +
      `<div class="data-field">Author</div> <span class="data">${jsLibrary[1]}</span>` +
      `<div class="data-field">Page</div> <span class="data">${jsLibrary[2]}</span>` +
      `<div class="data-field">Status</div> <span class="data">${jsLibrary[3]}</span>
      </div>` +
      `<div class="button-wrapper">
      <button type="button" class="delete-button">Delete</button>
      <button type="button" class="edit-button">Edit</button>
      </div>`
  );

  newBookCard.innerHTML = tempLibrary;

  bookShelf.appendChild(newBookCard);
  // Resetting temporary libraries
  jsLibrary = [];
  tempLibrary = [];

  // Clearing input fields after adding a book
  ClearFields();
}

// Function to show the book add form
function showForm() {
  bookForm.style.display = "flex";
}

// Function to clear input fields
function ClearFields() {
  document.getElementById("book-name").value = "";
  document.getElementById("book-author").value = "";
  document.getElementById("book-page").value = "";
  document.getElementById("book-status").value = "";
}

// Function to add delete functionality to delete buttons
// This and addEdit are run every time new books are added, so the new buttons get the functionality too
function addDelete() {
  let deleteButtons = document.querySelectorAll(".delete-button");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Two parentNode because the buttons are inside a div
      const card = button.parentNode.parentNode; // Get the parent card element
      card.remove(); // Remove the card
    });
  });
}

// Function to add edit functionality to edit buttons
function addEdit() {
  let editButtons = document.querySelectorAll(".edit-button");

  editButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      editCards(e);
    });
  });
}

// Function to handle editing book information
function editCards(e) {
  showForm();

  // Handling edit button within the form
  let formEditButton = document.querySelector(".form-edit-button");
  formEditButton.addEventListener("click", () => {
    finishEdit(dataContent);
  })

  // Retrieving the data to edit from the current card
  let currentCard = e.currentTarget.parentNode.parentNode;
  let fieldWrapper = currentCard.childNodes[0];
  let dataContent = fieldWrapper.querySelectorAll('.data');

  var dataArray = [];

  // Gets the values from the card
  dataContent.forEach(function(span) {
    dataArray.push(span.textContent)
  });

  // Sets the form to the old values
  document.getElementById("book-name").value = dataArray[0];
  document.getElementById("book-author").value = dataArray[1];
  document.getElementById("book-page").value = dataArray[2];
  document.getElementById("book-status").value = dataArray[3];

}

// Function to finish editing book information
function finishEdit(dataContent) {
  // Getting new values from the form fields
  let newBookNameValue = document.getElementById("book-name").value;
  let newBookAuthorValue = document.getElementById("book-author").value;
  let newBookPageValue = document.getElementById("book-page").value;
  let newBookStatusValue = document.getElementById("book-status").value;

  // Updating with the new values
  dataContent[0].textContent = newBookNameValue;
  dataContent[1].textContent = newBookAuthorValue;
  dataContent[2].textContent = newBookPageValue;
  dataContent[3].textContent = newBookStatusValue;

  // Hiding the form after editing
  bookForm.style.display = "none";
}

let bookShelf = document.querySelector(".book-shelf");
let bookForm = document.querySelector(".book-form");

let firstBook = new Book();

let tempLibrary = [];
let jsLibrary = [];
const myLibrary = [];
