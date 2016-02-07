/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var player = {
    create: function(position) {
        var newObject = Object.create(player);
        newObject.image = animatedImage.create('sepi.png');
        newObject.position = vector2.create(position.x, position.y);
        return newObject;
    },
    draw: function() {
        this.image.draw(this.position, 0);
    }
};