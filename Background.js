export default class Background {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.image = new Image();
        this.image.src = 'imgs/background22.png';
        this.image1 = new Image();
        this.image1.src = 'imgs/numbers.png';

        this.isMoving = true;
        this.steps = 0;

    }
    draw() {

        if (this.isMoving) {
            this.steps += 2
        }
        this.context.drawImage(this.image, 0 - this.steps, 0, this.canvas.width, this.canvas.height)
        this.context.drawImage(this.image, this.canvas.width - this.steps, 0, this.canvas.width, this.canvas.height);
        if (this.steps > this.canvas.width) {
            this.steps = 0;
        }
        var numberStep = 37;
        var numberWid = 45;
        for (var i = 0; i < 10; i++) {
            if (i === 0) {
                this.context.drawImage(this.image1, 10, 260, 44, 50, 0, 0, 20, 30);
            } else {
                this.context.drawImage(this.image1, 10 + numberWid * i, 260, 35, 50, 0 + numberStep * i, 0, 20, 30);
            }
        }
        var number = 40040;
        this.printNumber(number)

    }
    printNumber(number) {
        var numberStep = 25;
        var numberWid = 45;
        var s = number.toString()
        for (var i = 0; i < s.length; i++) {
            if (parseInt(s.charAt(i)) === 0) {
                this.context.drawImage(this.image1, 10, 260, 44, 50, 10 + (numberStep * i), 320, 20, 20);
            } else {
                this.context.drawImage(this.image1, 10 + numberWid * parseInt(s.charAt(i)), 260, 35, 50, 10 + (numberStep * i), 320, 20, 20);
            }

        }

    }
    stop() {
        this.isMoving = false;
    }
    move() {
        this.isMoving = true;
    }
}