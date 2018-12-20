export default class Person {
    constructor(canvas, context, background) {
        this.canvas = canvas;
        this.context = context;
        this.background = background;
        this.degree = 0;
        this.degreeLeg = 0;
        this.degreeLegLeft = 0;
        this.isMoving = true;
        this.handIndex = 0;
        this.returnLeg = false;
        this.returnLegLeft = false;
        this.steps = 0;
        this.isHandLocked = false;
        this.imgs = [];
        this.isWalking = true;
        this.isMoveHand = false;
        var base_image = new Image();
        base_image.src = 'imgs/hand1.png';
        var base_image1 = new Image();
        base_image1.src = 'imgs/half.png';
        var base_image2 = new Image();
        base_image2.src = 'imgs/full.png';
        this.imgs.push(base_image, base_image1, base_image2)

    }
    draw() {

        // this.context.fillStyle = "black";
        // this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = "#ffd30f";
        this.context.fillRect(42 + this.steps, this.canvas.height - 120, 16, 20);
        this.context.fillStyle = "#339933";
        this.context.fillRect(40 + this.steps, this.canvas.height - 120, 25, 5);
        this.context.save();// walkingRight
        this.context.translate(40 + this.steps, this.canvas.height - 60);
        if (this.isWalking) {
            if (this.returnLeg) {
                this.degreeLeg += 1;
                if (this.degreeLeg > 25) {
                    this.returnLeg = false;
                }
            } else {
                if (this.degreeLeg < -45) {
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
        this.context.fillRect(0, 35, 25, 8);

        this.context.restore();
        this.context.save();// walkingLeft
        this.context.translate(40 + this.steps, this.canvas.height - 60);
        if (this.isWalking) {
            if (this.returnLeg) {
                this.degreeLegLeft -= 1;
                if (this.degreeLegLeft < -45) {
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
        this.context.fillRect(0, 35, 25, 8);
        this.context.restore();
        this.context.save();
        this.context.translate(40 + this.steps, this.canvas.height - 80);
        this.context.fillStyle = "#339933";
        this.context.fillRect(0, -20, 20, 40);
        this.context.fillStyle = "black";
        this.context.fillRect(0, 10, 20, 5);
        if (this.isMoveHand) {
            this.degree = this.degree + 3;
            this.context.rotate(-this.degree * Math.PI / 180);
        } else {
            this.context.rotate(-this.degree * Math.PI / 180);
        }

        this.imgs[this.handIndex].height = 100;
        this.imgs[this.handIndex].widht = 100;

        this.context.drawImage(this.imgs[this.handIndex], 0, 0, 20, 40);
        this.context.translate(-this.steps, -this.canvas.height + 40);
        this.context.restore()


    }
    moveHand() {
        console.log(this.isHandLocked)
        if (this.isHandLocked) {
            this.returnHand();
        } else {
            this.isMoveHand = true;
        }

    }
    stopHand() {
        if (this.isMoveHand) {
            this.isHandLocked = true;
            this.isMoveHand = false;
        }

    }
    returnHand() {
        this.degree = 0;
        this.isMoveHand = false;
        this.isHandLocked = false;
    }
    stop() {
        this.background.stop();
    }
    move() {
        this.background.move();
    }
}