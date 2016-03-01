/*
 */

var BaseObject = {
    update: function () {
        this.calculateBoundingBox();
    },
    draw: function () {
        this.image.draw(this.position, 0);
    },
    calculateCenterPosition: function () {
        return this.position.add(this.size.multiply(0.5));
    },
    calculateBoundingBox: function () {
        this.boundingBox = BoundingBox.create(this.calculateCenterPosition(), this.size);
    },
    testCollision: function (object) {
        var boundingBox = BoundingBox.create(this.calculateCenterPosition(), this.size);
        if (boundingBox.testCollision(object.boundingBox)) {
            return true;
        } else {
            return false;
        }
    }
};
