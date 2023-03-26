// Creating a variable for the error id
let errorParagraph = document.getElementById("error");
console.log(errorParagraph);

// Function that is ran when the button is clicked to display message
function purchase() {
    console.log("button clicked");
    errorParagraph.textContent = "Something went wrong, please try again.";
}

