export default class Person {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.degree = 0;
        this.degreeLeg = 0;
        this.returnLeg = 0;
        this.degreeLegLeft = 0;
        this.returnLegLeft = false;
        this.isMoving = true;
        this.isWalking = true;
        this.handIndex = 0;
        this.steps = 0;
        this.imgs = [];
        this.isMoveHand = false;
        var base_image = new Image();
        base_image.src = 'imgs/hand1.png';
        var base_image1 = new Image();
        base_image1.src = 'imgs/bascavus.jpg';
        this.imgs.push(base_image, base_image1)

    }
    draw() {

        this.context.fillStyle = "#ffd30f";
        this.context.fillRect(this.canvas.width - this.steps + 2, this.canvas.height - 120, 16, 20);
        this.context.fillStyle = "#339933";
        this.context.fillRect(this.canvas.width - this.steps - 5, this.canvas.height - 120, 25, 5);
        this.context.save();// walkingRight
        this.context.translate(this.canvas.width - this.steps, this.canvas.height - 60);
        if (this.isWalking) {//bozuk
            if (this.returnLeg) {
                this.degreeLeg += 1;
                if (this.degreeLeg > 25) {
                    this.returnLeg = false;
                }
            } else {
                if (this.degreeLeg < -25) {
                    this.returnLeg = true;
                } else {

                    this.degreeLeg -= 1;
                }
            }
            this.context.rotate(this.degreeLeg * Math.PI / 180);
        }

        this.context.fillStyle = "#339933";
        this.context.fillRect(0, 0, 20, 40);
        this.context.fillStyle = "black";
        this.context.fillRect(-5, 35, 25, 8);

        this.context.restore();
        this.context.save();// walkingLeft
        this.context.translate(this.canvas.width - this.steps, this.canvas.height - 60);
        if (this.isWalking) {
            if (this.returnLeg) {
                this.degreeLegLeft -= 1;
                if (this.degreeLegLeft < 25) {
                    this.returnLegLeft = false;
                }
            } else {
                if (this.degreeLegLeft > 25) {
                    this.returnLegLeft = true;
                } else {

                    this.degreeLegLeft += 1;
                }
            }
            this.context.rotate(this.degreeLegLeft * Math.PI / 180);
        }
        this.context.fillStyle = "#339933";
        this.context.fillRect(0, 0, 20, 40);
        this.context.fillStyle = "black";
        this.context.fillRect(-5, 35, 25, 8);
        this.context.restore();
        this.context.save();
        this.context.translate(this.canvas.width - this.steps, this.canvas.height - 40);
        if (this.isMoveHand) {
            this.degree = this.degree + 1;
            this.context.rotate(-this.degree * Math.PI / 180);
        }
        if (this.isMoving) {
            this.steps = this.steps + 1;
        }
        if (this.steps > this.canvas.width) {
            this.steps = 0;
        }



        this.imgs[this.handIndex].height = 100;
        this.imgs[this.handIndex].widht = 100;

        this.context.drawImage(this.imgs[this.handIndex], 0, -40, 20, 40);
        this.context.drawImage(this.imgs[1], 0, -60, 20, 30);
        this.context.translate(-this.canvas.width + this.steps, -this.canvas.height + 40);
        this.context.restore()


    }
    moveHand() {
        this.isMoveHand = true;
    }
    stopHand() {
        this.degree = 0;
        this.isMoveHand = false;
    }
    stop() {
        this.isMoving = false;
    }
    move() {
        this.isMoving = true;
    }
}