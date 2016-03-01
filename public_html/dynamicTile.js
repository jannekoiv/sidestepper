/*
 */

var DynamicTile = $.extend(Object.create(BaseObject), {
    size: Vector.create(TILE_SIZE_X, TILE_SIZE_Y),
    create: function (position, velocity, tileNumber) {
        var newObject = Object.create(DynamicTile);
        newObject.image = AnimatedImage.create('tile1.bmp');
        newObject.position = position.clone();
        newObject.velocity = velocity.clone();
        newObject.tileNumber = tileNumber;
        newObject.calculateBoundingBox();
        return newObject;
    },
    update: function (tiles) {
        this.position = this.position.add(this.velocity)
        this.calculateBoundingBox();
        tiles.forEach(function (tile) {
            if (this.testCollision(tile)) {
                this.velocity = this.velocity.multiply(-1.0);
            }
        }, this);
    },
    draw: function () {
        this.image.draw(this.position, this.tileNumber);
    }
});


