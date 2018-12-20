import Person from './Person.js';
import Soldier from './Soldier.js';
import Background from './Background.js';
$(document).ready(function () {

    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
    var background = new Background(canvas, context)
    var person = new Person(canvas, context, background);
    var soldier = new Soldier(canvas, context);
    canvas.width = 640;
    canvas.height = 480;

    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 32) {
            person.moveHand();
        }
        if (event.keyCode === 38) {
            person.stop()
        }
    })
    document.addEventListener('keyup', function (event) {
        if (event.keyCode === 32) {
            person.stopHand();
        }
        if (event.keyCode === 38) {
            person.move()
        }
    })
    function update() {
        background.draw();
        person.draw();
        soldier.draw()
    }
    setInterval(() => {
        update();
    }, 1000 / 60)

})

