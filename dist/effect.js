let cardArray = [
    "popUp1",
    "popUp2",
    "popUp3"
];

let cardExist = ""; 
let randomNumber = 0;
let popup = 0;
let generateCard = 0;




function cardPopUp() {
    // Choose one at random from the array 
    // If one exist, remove it  
    // Display the chosen one 

    //Generate a number and grab a card from it.
    randomNumber = Math.round(Math.random() * (cardArray.length - 1)); 
    generateCard = cardArray[randomNumber];

    //If the card exists, find a new card
    while(cardExist == generateCard){
        randomNumber = Math.round(Math.random() * (cardArray.length - 1)); 
        console.log(randomNumber);
        generateCard = cardArray[randomNumber];
    }    

    // If the card exists, toggle it off 
    if(cardExist !== "" && cardExist !== generateCard){
        popup = document.getElementById(cardExist);
        popup.classList.toggle("show");
    } 

    //Display the card 
    popup = document.getElementById(generateCard);
    cardExist = generateCard; 
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