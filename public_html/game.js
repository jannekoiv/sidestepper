/*
 */

var LEFT = 1;
var RIGHT = 2;
var UP = 4;
var FLY = 16;
var keys = 0;
var prevKeys = 0;
var context = null;

var Game = {
    canvas: document.getElementById('myCanvas'),
    context: document.getElementById('myCanvas').getContext('2d'),
    level: Level.create(),
    run: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.level.update();
        this.level.draw();
        prevKeys = keys;
        requestAnimationFrame(this.run.bind(this));
    },
    init: function () {
        context = this.context;
        AnimatedImage.setContext(this.context);
        AnimatedImage.setErrorCallback(null);
        AnimatedImage.setLoadCallback(null);
        window.addEventListener(
            'keydown',
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
                if (event.keyCode === 87) {
                    keys |= FLY;
                }
            });
        window.addEventListener(
            'keyup',
            function onKeyUp(event) {
                if (event.keyCode === 37) {
                    keys &= (RIGHT | UP | FLY);
                }
                if (event.keyCode === 39) {
                    keys &= (LEFT | UP | FLY);
                }
                if (event.keyCode === 38) {
                    keys &= (LEFT | RIGHT | FLY);
                }
                if (event.keyCode === 87) {
                    keys &= (LEFT | RIGHT | UP);
                }
            });
        return this;
    }
};
