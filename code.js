let myLibrary = [];
let getCheck = document.querySelector(".readForm").checked;
let i = 0;

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function Book() {
  // the constructor...
  let getBookTxt = document.querySelector("#bookForm").value;
  let getAuthorTxt = document.querySelector("#authorForm").value;
  let getPagesTxt = document.querySelector("#pagesForm").value;
  console.log(getCheck);

  let requestBook = new addBookToLibrary(`${getBookTxt}`, `${getAuthorTxt}`, `${getPagesTxt}`, `${getCheck}`);
  myLibrary.push(requestBook);
  createCard(i);
  i++;
  deleteBtn();
}
console.log(myLibrary);

document.querySelector("form").addEventListener("submit", (e) => {Book(); e.preventDefault();})
document.querySelector(".readForm").addEventListener("click", (e) => {toggle()})
function deleteBtn() {
  document.querySelectorAll(".delete").forEach(button => {
    button.addEventListener("click", (e) => e.target.parentNode.parentNode.parentNode.style.display = "none")
  });
}

function toggle() {
  getCheck = getCheck == false ? true : false;
}

  function createCard(index) {
    document.querySelector(".grid").appendChild(document.createElement("div"))
                                              .classList.add("gridChildren");

    let childrenGrid = document.querySelectorAll(".gridChildren")[index];

      // first flexbox element for card
      childrenGrid.appendChild(document.createElement("container"))
                                  .classList.add("containCheckBox");
                                  
      document.querySelectorAll(".containCheckBox")[index].appendChild(document.createElement("div"))
                                                                    .classList.add("read");
      document.querySelectorAll(".read")[index].textContent = "read";

      let inputCheckBox = document.createElement("input");
          inputCheckBox.type = "checkbox";
          inputCheckBox.checked = (`${myLibrary[index].read}` === "true");
                                                              
      document.querySelectorAll(".containCheckBox")[index].appendChild(inputCheckBox);


      // second flexbox element for card
      childrenGrid.appendChild(document.createElement("container"))
                                          .classList.add("content");

    let secondContainer = document.querySelectorAll(".content")[index];

      let divBookTitle = document.createElement("div");
          divBookTitle.classList.add("book");
          divBookTitle.textContent = `${myLibrary[index].title}`;

      secondContainer.appendChild(divBookTitle);

      let divAuthor = document.createElement("div");
          divAuthor.classList.add("author");
          divAuthor.textContent = `${myLibrary[index].author}`;

      secondContainer.appendChild(divAuthor);

      secondContainer.appendChild(document.createElement("container"))
                                      .classList.add("deleteContent");

    // another flex container for delete button

    let containerInsideContainer = document.querySelectorAll(".deleteContent")[index];

      let divPages = document.createElement("div");
      divPages.classList.add("pages");
      divPages.textContent = `Pages: ${myLibrary[index].pages}`;

      containerInsideContainer.appendChild(divPages);

      containerInsideContainer.appendChild(document.createElement("img"))
                                                .classList.add("delete"); 

      document.querySelectorAll(".delete")[index].setAttribute("src", "./delete.png");
}