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