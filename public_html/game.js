/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Game() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    AnimatedImage.setContext(context);
    var image = new AnimatedImage("sepi.png");
    var position = new Vector(100, 100);
    var frame = 1;
    counter = 0;






    this.run = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        image.draw(position, frame);
        position.x += 1;
        counter += 1;

        if (counter > 2) {
            counter = 0;
            frame += 1;
            if (frame >= image.getFrameCount()) {
                frame = 0;
            }
        }

        requestAnimationFrame(this.run.bind(this));
    };
}
