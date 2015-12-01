/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var vector2 = {
    create: function (x, y) {
        var newVector = Object.create(vector2);
        newVector.x = x;
        newVector.y = y;
        return newVector;
    },
    add: function(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    },
    subtract: function(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
    },
    multiply: function(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    },
    divide: function(scalar) {
        this.x /= scalar;
        this.y /= scalar;
        return this;
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    normalize: function() {
        var length = Math.sqrt(this.x * this.x + this.y * this.y);
        this.x *= length;
        this.y *= length;
        return this;
    }
};