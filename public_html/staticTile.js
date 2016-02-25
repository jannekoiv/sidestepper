/* 
 */

var TILE_SIZE_X = 32;
var TILE_SIZE_Y = 32;

var Tile = {
    create: function(position) {
        var newObject = Object.create(Tile);
        newObject.image = AnimatedImage.create('tile1.bmp');
        newObject.position = position.clone();
        newObject.velocity = Vector.create(0.0, 0.0);
        newObject.size = Vector.create(TILE_SIZE_X, TILE_SIZE_Y);
        return newObject;
    },
    update: function () {
        this.position = this.position.add(this.velocity);
    },
    draw: function () {
        this.image.draw(this.position, 1);
    },
    calculateCenterPosition: function () {
        return this.position.add(this.size.multiply(0.5));
    }
};

