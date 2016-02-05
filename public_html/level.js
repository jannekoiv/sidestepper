/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var level = {
    create: function() {
        var newObject = Object.create(level);
        newObject.tile = tile.create(vector2.create(300, 300));
        return newObject;
    },
    draw: function() {
        this.tile.draw();
    }
};
