import Snake from './snake'
import Food from './food'
import {
    SnakeState,
    FoodState,
    GameTimer
} from './storage'

export default class Map {
    constructor() {
        this.canvas = document.getElementById('map');
        this.context = this.canvas.getContext('2d');
    }
    initMap() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = '#000';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        SnakeState = new Snake();
        SnakeState.draw();
        FoodState = new Food().getRandomFood();
        FoodState.draw();
    }
    startGame() {
        GameTimer = setInterval(function() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.context.fillStyle = '#000';
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
            FoodState.draw();
            SnakeState.move();
            SnakeState.draw();
        }, 300);
    }
    endGame() {
        clearInterval(GameTimer);
    }
}