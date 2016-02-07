/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Game() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    animatedImage.setContext(context);
    var level1 = level.create();


    this.run = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        level1.draw();
        requestAnimationFrame(this.run.bind(this));
    };
}
