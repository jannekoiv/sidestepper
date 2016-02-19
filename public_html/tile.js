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
            this.position = this.position.add(this.velocity);
        },
        draw: function () {
            this.image.draw(this.position, 1);
        },
        calculateCenterPosition: function () {
            return this.position.add(this.size.divide(2.0));
        }
    };
};

