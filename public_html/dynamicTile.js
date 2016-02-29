/*
 */

var DynamicTile = {
    create: function(position, velocity, tileNumber) {
        var newObject = Object.create(DynamicTile);
        newObject.image = AnimatedImage.create('tile1.bmp');
        newObject.position = position.clone();
        newObject.velocity = velocity.clone();
        newObject.tileNumber = tileNumber;
        newObject.size = Vector.create(TILE_SIZE_X, TILE_SIZE_Y);
        return newObject;
    },
    update: function () {
        this.position = this.position.add(this.velocity)
    },
    draw: function () {
        this.image.draw(this.position, this.tileNumber);
    },
    calculateCenterPosition: function () {
        return this.position.add(this.size.multiply(0.5));
    }
};

