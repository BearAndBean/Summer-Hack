let cardArray = [
    "Biking",
    "Camping",
    "Learn-a-new-language",
    "Fishing",
    "Road-Trip",
    "Watching-the-Sunrise",
    "Grow-a-Garden",
    "Hiking",
    "Swimming",
    "Tour-around-your-city",
    "Running",
    "Paint",
    "Rugby",
    "Tennis",
    "Basketball",
    "Soccer",
    "Surfing",
    "Rockclimbing",
    "Beach-Volleyball",
    "Archery",
    "Golf",
    "Have-a-campfire",
    "Jump-Rope",
    "Canoeing",
    "Frisbee-Golf",
    "Enjoy-the-Beach",
    "Barbecue",
    "Create-a-Flower-patch",
    "Pick-up-an-interesting-book",
    "Go-berry-picking"
];

let cardExist = "";
let randomNumber = 0;
let popup = 0;
let generateCard = 0;
let tempArray = [];
let count = 0;

const todoButton = document.querySelector(".btn");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

function cardPopUp() {
    // Choose one at random from the array 
    // If one exist, remove it  
    // Display the chosen one 
    if (count >= 12) {
        document.location.reload(true);
    }
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


    count++;

}

// var todoCard = document.getElementById(generateCard).value;

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
    // todoCard.value = "";
}


function deleteCheck(e) {
    const delTodo = document.querySelector(".todo")
    delTodo.addEventListener("click", deleteCheck);


    const item = e.target;

    if (item.classList[0] === "todo-item") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        // removeLocalTodos(todo);
        todo.addEventListener("transitionend", function () {
            todo.remove();
            count--;
        });
        //todo.remove();
    }

    //Check mark
    // if (item.classList[0] === "complete-btn") {
    //     const todo = item.parentElement;
    //     todo.classList.toggle("completed");
    // }
}
// function myFunction() {
//     var x = document.getElementById("yourPopup");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }