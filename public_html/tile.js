/* 
 */

var TILE_SIZE_X = 32;
var TILE_SIZE_Y = 32;

var createTile = function (position) {
    return {
        image: createAnimatedImage('tile1.bmp'),
        position: position.clone(),
        velocity: createVector(0.0, 0.0),
        size: createVector(TILE_SIZE_X, TILE_SIZE_Y),
        update: function () {
            this.position.add(this.velocity);
        },
        draw: function () {
            this.image.draw(this.position, 1);
        },
        calculateCenterPosition: function () {
            return createVector(this.position.x + this.size.x / 2, this.position.y + this.size.y / 2);
        }
    };
};

