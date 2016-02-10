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
    calculateDistance: function (boundingBox) {
        return vector2.create(this.position.x, this.position.y).subtract(boundingBox.position);
    },
    calculateHalfSizeSum: function (boundingBox) {
          return vector2.create(this.size.x + boundingBox.size.y, this.size.y + boundingBox.size.y).divide(2.0);
    },
    testCollision: function (boundingBox) {
        var distance = this.calculateDistance(boundingBox);
        var halfSizeSum = this.calculateHalfSizeSum(boundingBox);
        if (Math.abs(distance.x) < halfSizeSum.x && Math.abs(distance.y) < halfSizeSum.y) {
            return true;
        } else {
            return false;
        }
    }
};