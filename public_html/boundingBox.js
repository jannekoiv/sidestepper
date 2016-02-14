/*
 */

var createBoundingBox = function(position, size) {
    return {
        position: createVector(position.x, position.y),
        size: createVector(size.x, size.y),
        calculateDistance: function (boundingBox) {
            return createVector(this.position.x, this.position.y).subtract(boundingBox.position);
        },
        calculateHalfSizeSum: function (boundingBox) {
            return createVector(this.size.x + boundingBox.size.y, this.size.y + boundingBox.size.y).divide(2.0);
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
};

