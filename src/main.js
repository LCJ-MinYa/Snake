window.onload = function() {
    let canvas = document.getElementById('map');
    let context = canvas.getContext('2d');
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);


    //基本矩形类
    class Rect {
        constructor(x, y, width, height, color) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.color = color;
        }
        draw() {
            context.beginPath();
            context.fillStyle = this.color;
            context.rect(this.x, this.y, this.width, this.height);
            context.fill();
            context.stroke();
        }
    }

    //Snake类
    class Snake {
        constructor() {
            let snakeArray = [];

            for (let i = 0; i < 5; i++) {
                let rect = new Rect(i * 20 + 200, 290, 20, 20, "#fff");
                snakeArray.splice(0, 0, rect);
            }

            this.snakeArray = snakeArray;
        }
        draw() {
            for (let i = 0; i < this.snakeArray.length; i++) {
                this.snakeArray[i].draw();
            }
        }
    }

    let snake = new Snake();
    snake.draw();
}