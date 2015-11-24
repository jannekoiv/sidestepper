/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Game() {
    this.init = function () {
        this.canvas = document.getElementById("myCanvas");
        this.context = this.canvas.getContext("2d");
        this.image = new AnimatedImage("sepi.png", this.context);
        this.position = new Vector(100, 100);
    };

    this.run = function () {
        this.image.draw(this.position, 0);
        this.position.x += 10;
    };
}
