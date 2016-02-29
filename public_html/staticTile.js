/* 
 */

var StaticTile = {
    create: function(position, tileNumber) {
        var newObject = Object.create(StaticTile);
        newObject.image = AnimatedImage.create('tile1.bmp');
        newObject.position = position.clone();
        newObject.tileNumber = tileNumber;
        newObject.size = Vector.create(TILE_SIZE_X, TILE_SIZE_Y);
        return newObject;
    },
    update: function () {
    },
    draw: function () {
        this.image.draw(this.position, this.tileNumber);
    },
    calculateCenterPosition: function () {
        return this.position.add(this.size.multiply(0.5));
    }
};

