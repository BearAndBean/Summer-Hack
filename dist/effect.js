let cardArray = [
    "popUp1",
    "popUp2",
];

let cardArrayExist = 0; 
let randomCard = 0;
let popup = 0;




function cardPopUp() {


    // Choose one at random from the array 
    // If one exist, remove it  
    // Display the chosen one 
    
    randomCard = Math.round(Math.random() * (cardArray.length - 1)); 
    popup = document.getElementById(cardArray[randomCard]);
    if(cardArrayExist == 0){
        cardArrayExist.classList.toggle("show");
    }
    cardArrayExist = cardArray[randomCard];
    popup.classList.toggle("show");
    
}

// function myFunction() {
//     var x = document.getElementById("yourPopup");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }