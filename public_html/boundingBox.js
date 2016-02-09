/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global vector2 */

var boundingBox = {
    create: function (position, size) {
        var newObject = Object.create(boundingBox);
        newObject.position = vector2.create(position.x, position.y);
        newObject.size = vector2.create(size.x, size.y);
        return newObject;
    },
    testCollision: function (boundingBox) {
        var halfSizeSum = vector2.create(this.size.x + boundingBox.size.x, this.size.y + boundingBox.size.y);
        halfSizeSum.divide(2.0);
        var distance = vector2.create(this.position.x, this.position.y);
        distance.subtract(boundingBox.position);
        if (Math.abs(distance.x) < halfSizeSum.x) {
            return true;
        } else {
            return false;
        }
    }
};