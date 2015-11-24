/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Vector(x, y) {
    this.x = x;
    this.y = y;

    this.add = function(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    };

    this.subtract = function(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
    };

    this.multiply = function(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    };
    
    this.divide = function(scalar) {
        this.x /= scalar;
        this.y /= scalar;
        return this;
    };

    this.length = function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };

    this.normalize = function() {
        var length = Math.sqrt(this.x * this.x + this.y * this.y);
        this.x *= length;
        this.y *= length;
        return this;
    };

}







