

var createVector = function (x, y) {
    return {
        x: x,
        y: y,
        add: function (vector) {
            this.x += vector.x;
            this.y += vector.y;
            return this;
        },
        subtract: function (vector) {
            this.x -= vector.x;
            this.y -= vector.y;
            return this;
        },
        multiply: function (scalar) {
            this.x *= scalar;
            this.y *= scalar;
            return this;
        },
        divide: function (scalar) {
            this.x /= scalar;
            this.y /= scalar;
            return this;
        },
        length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        normalize: function () {
            var length = Math.sqrt(this.x * this.x + this.y * this.y);
            this.x *= length;
            this.y *= length;
            return this;
        }
    };
}