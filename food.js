import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";
const scoreBar = document.querySelector(".score1");
let score = 0;

let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;

export function update() {
  if (onSnake(food)) {
    musicAddScore.play();
    score++;
    scoreBar.textContent = score;
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
const musicAddScore = new Audio("score.wav");
