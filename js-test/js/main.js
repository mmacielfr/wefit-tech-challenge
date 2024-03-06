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
