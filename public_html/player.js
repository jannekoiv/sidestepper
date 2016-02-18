/*
 */

var PLAYER_SIZE_X = 20;
var PLAYER_SIZE_Y = 32;
var VELOCITY = 2;
var JUMP_VELOCITY = 14;
var FALL_VELOCITY = 14;

var createPlayer = function (position) {
    return {
        image: createAnimatedImage('sepi.bmp'),
        position: position.clone(),
        velocity: createVector(0.0, 0.0),
        platformVelocity: createVector(0.0, 0.0),
        platformVelocityX: 0.0,
        previousPosition: position.clone(),
        size: createVector(PLAYER_SIZE_X, PLAYER_SIZE_Y),
        animationFrame: 1,
        animationDirection: 1,
        animationFrameOffset: 0,
        animationTimer: 0,

        animateWalking: function (isWalking) {
            this.animationTimer += 1;
            if (this.animationTimer < 5) {
                return;
            } else {
                this.animationTimer = 0;
            }
            this.animationFrame += this.animationDirection;
            if (isWalking) {
                if (this.animationFrame > 3) {
                    this.animationDirection = -1;
                } else if (this.animationFrame <= 1) {
                    this.animationDirection = 1;
                }
            } else {
                this.animationFrame = 0;
            }
        },

        walk: function () {
            if (keys & LEFT) {
                if (!(prevKeys & LEFT)) {
                    this.animationFrame = 1;
                }
                this.velocity.x = -VELOCITY;
                this.animateWalking(true);
                this.animationFrameOffset = 5;
            } else if (keys & RIGHT) {
                if (!(prevKeys & RIGHT)) {
                    this.animationFrame = 1;
                }
                this.velocity.x = VELOCITY;
                this.animateWalking(true);
                this.animationFrameOffset = 0;
            } else {
                this.velocity.x = 0.0;
                this.animateWalking(false);
            }
        },

        jump: function (tiles) {
            if (keys & UP && !(prevKeys & UP)) {
                var isOnBlock = false;
                this.position.y += 2;
                for (i = 0; i < tiles.length; i += 1) {
                    if (this.testCollision(tiles[i])) {
                        isOnBlock = true;
                    }
                }
                this.position.y -= 2;
                if (isOnBlock) {
                    this.velocity.y = -JUMP_VELOCITY;
                }
            }
        },

        accelerateByGravity: function () {
            if (this.velocity.y < FALL_VELOCITY) {
                this.velocity.y += 1.1;
            }
        },

        update: function (tiles) {
            for (i = 0; i < tiles.length; i++) {
                if (this.testCollision(tiles[i])) {
                    this.restorePositionToTileSurface(tiles[i]);
                }
            }
            this.walk();
            this.jump(tiles);
            this.accelerateByGravity();
            this.storePosition();

            var colliding = false;

            this.position.x += this.velocity.x + this.platformVelocityX;
            this.platformVelocityX = 0.0;
            for (i = 0; i < tiles.length; i++) {
                if (this.testCollision(tiles[i])) {
                    this.velocity.x = 0.0;
                    this.restorePositionX(tiles[i]);
                    colliding = true;
                }
            }

            this.position.y += this.velocity.y;
            for (i = 0; i < tiles.length; i++) {
                if (this.testCollision(tiles[i])) {
                    this.velocity.y = 0.0;
                    this.restorePositionY(tiles[i]);
                    this.platformVelocityX = tiles[i].velocity.x
                    colliding = true;
                }
            }
            if (colliding) {
                context.fillText('colliding', 100, 100);
            } else {
                context.fillText('not colliding', 100, 100);
            }
        },


        draw: function () {
            this.image.draw(this.position, this.animationFrame + this.animationFrameOffset);
        },
        calculateCenterPosition: function () {
            return createVector(this.position.x + this.size.y / 2.0, this.position.y + this.size.y / 2.0);
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
        },
        restorePositionToTileSurface: function (tile) {
            var direction = this.position.clone().subtract(tile.position);
            direction.normalize();
            direction.x *= 0.1;
            direction.y *= 0.1;
            while (this.testCollision(tile)) {
                if (Math.abs(direction.x) > Math.abs(direction.y)) {
                    this.position.x += direction.x;
                } else {
                    this.position.y += direction.y;
                }
            }
        }
    };
};