/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

var IMAGE_SIZE_X = 32;
var IMAGE_SIZE_Y = 32;
var DESTINATION_SIZE_X = 64;
var DESTINATION_SIZE_Y = 64;

function AnimatedImage(imageFile, context) {
    this.image = new Image();
    this.image.src = imageFile;
    this.size = new Vector(IMAGE_SIZE_X, IMAGE_SIZE_Y);
    this.context = context;

    this.draw = function (position, frameNumber) {
        var sourcePosition = new Vector(0, frameNumber * this.size.y);
        var destinationSize = new Vector(DESTINATION_SIZE_X, DESTINATION_SIZE_Y);
        context.drawImage(this.image,
                sourcePosition.x,
                sourcePosition.y,
                this.size.x,
                this.size.y,
                position.x,
                position.y,
                destinationSize.x,
                destinationSize.y);
    };
}


