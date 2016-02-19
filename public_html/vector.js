/*
 */

var createVector = function (x, y) {
    return {
        x: x,
        y: y,
        getX: function() {
            return this.x;
        },
        getY: function() {
            return this.y;
        },
        clone: function() {
            return createVector(this.x, this.y);
        },
        cloneAndSetX: function(x) {
            return createVector(x, this.y);
        },
        cloneAndSetY: function(y) {
            return createVector(this.x, y);
        },
        add: function (vector) {
            return createVector(this.x + vector.x, this.y + vector.y);
        },
        addX: function(x) {
            return createVector(this.x + x, this.y);
        },
        addY: function(y) {
            return createVector(this.x, this.y + y);
        },
        subtract: function (vector) {
            return createVector(this.x - vector.x, this.y - vector.y);
        },
        subtractX: function (x) {
            return createVector(this.x - x, this.y);
        },
        subtractY: function (y) {
            return createVector(this.x, this.y - y);
        },
        multiply: function (scalar) {
            return createVector(this.x * scalar, this.y * scalar);
        },
        divide: function (scalar) {
            return createVector(this.x / scalar, this.y / scalar);
        },
        length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        normalize: function () {
            var length = this.length();
            return createVector(this.x / length, this.y / length);
        }
    };
};