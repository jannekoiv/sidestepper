/* 
 */

var StaticTile = $.extend(Object.create(BaseObject), {
    size: Vector.create(TILE_SIZE_X, TILE_SIZE_Y),
    create: function(position, tileNumber) {
        var newObject = Object.create(StaticTile);
        newObject.image = AnimatedImage.create('tile1.bmp');
        newObject.position = position.clone();
        newObject.tileNumber = tileNumber;
        newObject.calculateBoundingBox();
        return newObject;
    },
    draw: function () {
        this.image.draw(this.position, this.tileNumber);
    }
});

