/*
 */

var Vector = {
    create: function (x, y) {
        var newObject = Object.create(Vector);
        newObject.x = x;
        newObject.y = y;
        return newObject;
    },
    getX: function () {
        return this.x;
    },
    getY: function () {
        return this.y;
    },
    clone: function () {
        return Vector.create(this.x, this.y);
    },
    cloneAndSetX: function (x) {
        return Vector.create(x, this.y);
    },
    cloneAndSetY: function (y) {
        return Vector.create(this.x, y);
    },
    add: function (vector) {
        return Vector.create(this.x + vector.x, this.y + vector.y);
    },
    addX: function (x) {
        return Vector.create(this.x + x, this.y);
    },
    addY: function (y) {
        return Vector.create(this.x, this.y + y);
    },
    subtract: function (vector) {
        return Vector.create(this.x - vector.x, this.y - vector.y);
    },
    subtractX: function (x) {
        return Vector.create(this.x - x, this.y);
    },
    subtractY: function (y) {
        return Vector.create(this.x, this.y - y);
    },
    multiply: function (scalar) {
        return Vector.create(this.x * scalar, this.y * scalar);
    },
    divide: function (scalar) {
        return Vector.create(this.x / scalar, this.y / scalar);
    },
    length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    normalize: function () {
        var length = this.length();
        return Vector.create(this.x / length, this.y / length);
    }
};