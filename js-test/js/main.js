// Menu
// Elements selected for the menu
const btn = document.getElementsByClassName("btn-group-vertical");
const btnBorderRadius = document.getElementsByClassName("btn-secondary");
const singleBtn = document.querySelectorAll(".btn-group-vertical .btn");

// Adds space between the buttons
for(let i=0; i < singleBtn.length; i++) {
    singleBtn[i].style.marginRight = "0.25em";
}

// Aligns the content inside the button to be in one line
for(let i=0; i < singleBtn.length; i++) {
    singleBtn[i].style.width = "auto";
}

// Sets the same border-radius rule for all buttons
for(let i=0; i < btnBorderRadius.length; i++) {
    btnBorderRadius[i].style.borderRadius = "0.25rem"
}

// Aligns the buttons to be in one line
btn[0].style.flexDirection = "row";


// Header
// Selectors for the elments inside the header
const headerContainer = document.querySelector(".jumbotron");
const headerParagraphs = document.querySelectorAll(".jumbotron p");
const headerHr = document.querySelector(".jumbotron hr");
const headerAnchor = document.querySelector(".jumbotron a");

// Changes the elements alignment from left to right
headerContainer.style.display = "flex";
headerContainer.style.flexDirection = "column";
headerContainer.style.alignItems = "flex-end";

// Changes the color of the text and the hr to white
headerContainer.style.color = "#fff";

// Changes the background-color
headerContainer.style.backgroundColor = "#6b757e";

// Moves the paragraphs to the left alignment
for(let i=0; i < headerParagraphs.length; i++) {
    headerParagraphs[i].style.textAlign = "right";
}

// Makes the hr not disappear
headerHr.style.width = "100%";

// Changes the anchor tag color 
headerAnchor.style.backgroundColor = "#27a844";
headerAnchor.style.borderColor = "#27a844";


// Cards
// Selects the cards elements needed
const cards = document.querySelectorAll(".card .card-body .card-title");
const cardsContainer = document.querySelectorAll(".row .col-lg-3");
const cardsLink = document.querySelectorAll(".card .card-body a");

// Loops through every card and changes its oreder
for(let i=0; i < cards.length; i++) {
    if (cards[i].innerHTML == "Animais") {

        // Changes the color of the link/button
        cardsLink[i].style.backgroundColor = "#27a844";
        cardsLink[i].style.borderColor = "#27a844";
        cardsContainer[i].style.order = "6";

    } else if (cards[i].innerHTML == "Tecnologia") {

        cardsContainer[i].style.order = "10";

    } else if (cards[i].innerHTML == "Pessoas") {

        cardsContainer[i].style.order = "8";

    } else if (cards[i].innerHTML == "Natureza") {

        cardsContainer[i].style.order = "4";

    }
}


// List
// Grabs the lists elements
const list = document.querySelector(".row .col-lg-4 ul");
const listItem = document.querySelector(".row .col-lg-4 ul .active");

// Fabricates list elements
function createElement(text) {
    let element = document.createElement('li');
    element.innerText = text;
    list.appendChild(element);
    element.classList.add("list-group-item");
}

// Using the factory, makes two list items
createElement("Quarto item");
createElement("Quinto item");

// Takes the active state out of an element
listItem.classList.remove("active");

// Adds an active state to the one before the last element
document.querySelector(".row .col-lg-4 ul li:nth-last-child(2)").classList.add("active");
