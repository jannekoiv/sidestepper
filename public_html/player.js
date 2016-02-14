/*
 */

var PLAYER_SIZE_X = 32;
var PLAYER_SIZE_Y = 32;
var VELOCITY = 1;
var JUMP_VELOCITY = 4;

var xlaskuri = 0;
var ylaskuri = 0;

var createPlayer = function(position) {
    return {
        image: createAnimatedImage('sepi.bmp'),
        position: position.clone(),
        velocity: createVector(0.0, 0.0),
        baseVelocity: createVector(0.0, 0.0),
        previousPosition: position.clone(),
        size: createVector(PLAYER_SIZE_X, PLAYER_SIZE_Y),
        walk: function () {
            if (keys & LEFT) {
                this.velocity.x = -VELOCITY;
            } else if (keys & RIGHT) {
                this.velocity.x = VELOCITY;
            } else {
                this.velocity.x = 0.0;
            }
        },
        jump: function (tiles) {
            if (keys & UP) {
                var isOnBlock = false;
                this.position.y += 1;
                for (i = 0; i < tiles.length; i += 1) {
                    if (this.testCollision(tiles[i])) {
                        isOnBlock = true;
                    }
                }
                this.position.y -= 1;
                if (isOnBlock) {
                    this.velocity.y = -JUMP_VELOCITY;
                }
            }
        },
        accelerateByGravity: function () {
            this.velocity.y += 0.1;
        },

        update: function (tiles) {
            this.walk();
            this.jump(tiles);
            this.accelerateByGravity();

            this.storePosition();

            this.baseVelocity.x = 0.0;
            this.baseVelocity.y = 0.0;


            this.position.y += this.velocity.y;
            for (i = 0; i < tiles.length; i++) {
                if (this.testCollision(tiles[i])) {
                    this.velocity.y = 0.0;
                    this.restorePositionY(tiles[i]);
//                if(tiles[i].velocity.length() > 0.0) {
//                    this.baseVelocity.x = tiles[i].velocity.x;
//                }
                }
            }

//        this.position.x += this.velocity.x + this.baseVelocity.x;
//        for (i = 0; i < tiles.length; i++) {
//            if (this.testCollision(tiles[i])) {
//                this.restorePositionX(tiles[i]);
//                this.velocity.x = 0.0;
//            }
//        }


        },


        draw: function () {
            this.image.draw(this.position, 2);
        },
        calculateCenterPosition: function () {
            return createVector(this.position.x + this.size.x / 2.0, this.position.y + this.size.y / 2.0);
        },
        testCollision: function (object) {
            var boundingBoxA = createBoundingBox(this.calculateCenterPosition(), this.size);
            var boundingBoxB = createBoundingBox(object.calculateCenterPosition(), object.size);
            if (boundingBoxA.testCollision(boundingBoxB)) {
                return true;
            } else {
                return false;
            }
        },
        testCollisionRight: function (object) {
            this.position.x += 1.0;
            var result = testCollision(object);
            this.position.x -= 1.0;
            return result;
        },
        storePosition: function () {
            this.previousPosition.x = this.position.x;
            this.previousPosition.y = this.position.y;
        },
        restorePositionX: function (tile) {
            var direction = this.position.clone().subtract(tile.position);
            direction.normalize();
            direction.x *= 0.1;
            while (this.testCollision(tile)) {
                this.position.x += direction.x;
            }
        },
        restorePositionY: function (tile) {
            var direction = this.position.clone().subtract(tile.position);
            direction.normalize();
            direction.y *= 0.1;
            while (this.testCollision(tile)) {
                this.position.y += direction.y;
            }
        }
    };
};