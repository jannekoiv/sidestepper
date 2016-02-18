/*
 */

var LEFT = 1;
var RIGHT = 2;
var UP = 4;
var DOWN = 8;
var keys = 0;
var prevKeys = 0;

function onKeyDown(event) {
    if (event.keyCode === 37) {
        keys |= LEFT;
    }
    if (event.keyCode === 39) {
        keys |= RIGHT;
    }
    if (event.keyCode === 38) {
        keys |= UP;
    }
    if (event.keyCode === 40) {
        keys |= DOWN;
    }
}

function onClick(event) {
    keys |= LEFT;
}

function onKeyUp(event) {
    if (event.keyCode === 37) {
        keys &= (RIGHT | UP | DOWN);
    }
    if (event.keyCode === 39) {
        keys &= (LEFT | UP | DOWN);
    }
    if (event.keyCode === 38) {
        keys &= (LEFT | RIGHT | DOWN);
    }
    if (event.keyCode === 40) {
        keys &= (LEFT | RIGHT | UP);
    }
}

var context = null;

function Game() {
    var canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');
    initAnimatedImage(null, null, context);
    var level = createLevel();
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    this.run = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        level.up
        level.update();
        level.draw();
        prevKeys = keys;
        requestAnimationFrame(this.run.bind(this));
    };
}
