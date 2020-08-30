let cardArray = [
    "popUp1",
    "popUp2",
    "popUp3",
    "popUp4",
    "popUp5",
    "popUp6",
    "popUp7",
    "popUp8",
    "popUp9",
    "popUp10",
    "popUp11",
    "popUp12",
    "popUp13",
    "popUp14",
    "popUp15",
    "popUp16",
    "popUp17",
    "popUp18",
    "popUp19",
    "popUp20",
    "popUp21",
    "popUp22",
    "popUp23",
    "popUp23",
    "popUp24",
    "popUp25",
    "popUp26",
    "popUp27",
    "popUp28",
    "popUp29",
    "popUp31"
];

let cardExist = "";
let randomNumber = 0;
let popup = 0;
let generateCard = 0;

const todoButton = document.querySelector(".btn");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);

function cardPopUp() {
    // Choose one at random from the array 
    // If one exist, remove it  
    // Display the chosen one 

    //Generate a number and grab a card from it.
    randomNumber = Math.floor(Math.random() * (cardArray.length - 1));
    generateCard = cardArray[randomNumber];

    //If the card exists, find a new card
    while (cardExist == generateCard) {
        randomNumber = Math.floor(Math.random() * (cardArray.length - 1));
        console.log(randomNumber);
        generateCard = cardArray[randomNumber];
    }

    // If the card exists, toggle it off 
    if (cardExist !== "" && cardExist !== generateCard) {
        popup = document.getElementById(cardExist);
        popup.classList.remove("show");
    }

    //Display the card 
    popup = document.getElementById(generateCard);
    cardExist = generateCard;
    popup.classList.toggle("show");


}

const todoCard = document.getElementById(cardExist);

function addTodo(event) {
    event.preventDefault();
    //console.log("hello");
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = cardExist;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Add todo to storage
    // saveLocalTodos(todoCard.value);
    //complete button//del button
    const starredBtn = document.createElement("button");
    starredBtn.innerHTML = '<i class="fas fa-star" ></i>';
    starredBtn.classList.add("starred-btn");
    todoDiv.appendChild(starredBtn);
    //append to list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoCard.value = "";
}
// function myFunction() {
//     var x = document.getElementById("yourPopup");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }