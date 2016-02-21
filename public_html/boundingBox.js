/*
 */

var BoundingBox = {
    create: function(position, size) {
        var newObject = Object.create(BoundingBox);
        newObject.position = position.clone();
        newObject.size = size.clone();
        return newObject;
    },
    calculateDistance: function (boundingBox) {
        return this.position.subtract(boundingBox.position);
    },
    calculateHalfSizeSum: function (boundingBox) {
        return this.size.add(boundingBox.size).multiply(0.5);
    },
    testCollision: function (boundingBox) {
        var distance = this.calculateDistance(boundingBox);
        var halfSizeSum = this.calculateHalfSizeSum(boundingBox);
        if (Math.abs(distance.getX()) < halfSizeSum.getX() && Math.abs(distance.getY()) < halfSizeSum.getY()) {
            return true;
        } else {
            return false;
        }
    }
};