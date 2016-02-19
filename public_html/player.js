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
                this.velocity = this.velocity.cloneAndSetX(-VELOCITY);
                this.animateWalking(true);
                this.animationFrameOffset = 5;
            } else if (keys & RIGHT) {
                if (!(prevKeys & RIGHT)) {
                    this.animationFrame = 1;
                }
                this.velocity = this.velocity.cloneAndSetX(VELOCITY);
                this.animateWalking(true);
                this.animationFrameOffset = 0;
            } else {
                this.velocity = this.velocity.cloneAndSetX(0.0);
                this.animateWalking(false);
            }
        },

        jump: function (tiles) {
            if (keys & UP && !(prevKeys & UP)) {
                var isOnBlock = false;
                this.position = this.position.addY(2.0);
                for (i = 0; i < tiles.length; i += 1) {
                    if (this.testCollision(tiles[i])) {
                        isOnBlock = true;
                    }
                }
                this.position = this.position.subtractY(2.0);
                if (isOnBlock) {
                    this.velocity = this.velocity.cloneAndSetY(-JUMP_VELOCITY);
                }
            }
            if (keys & FLY) {
                this.velocity = this.velocity.cloneAndSetY(-5);
            }
        },

        accelerateByGravity: function () {
            if (this.velocity.getY() < FALL_VELOCITY) {
                this.velocity = this.velocity.addY(1.1);
            }
        },

        update: function (tiles) {
            this.walk();
            this.jump(tiles);
            this.accelerateByGravity();

            tiles.forEach(function (tile) {
                if (this.testCollision(tile)) {
                    this.restorePositionToTileSurface(tile);
                }
            }, this);

            this.position = this.position.addX(this.velocity.getX() + this.platformVelocityX);
            this.platformVelocityX = 0.0;
            tiles.forEach(function (tile) {
                if (this.testCollision(tile)) {
                    this.velocity = this.velocity.cloneAndSetX(0.0);
                    this.restorePositionX(tile);
                }
            }, this);

            this.position = this.position.addY(this.velocity.getY());
            tiles.forEach(function (tile) {
                if (this.testCollision(tile)) {
                    this.velocity = this.velocity.cloneAndSetY(0.0);
                    this.restorePositionY(tile);
                    this.platformVelocityX = tile.velocity.getX();
                    colliding = true;
                }
            }, this);
        },


        draw: function () {
            this.image.draw(this.position, this.animationFrame + this.animationFrameOffset);
        },
        calculateCenterPosition: function () {
            return this.position.add(createVector(this.size.getY(), this.size.getY()).divide(2.0));
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
        restorePositionX: function (tile) {
            var direction = this.position.subtract(tile.position).normalize().multiply(0.1);
            while (this.testCollision(tile)) {
                this.position = this.position.addX(direction.getX());
            }
        },
        restorePositionY: function (tile) {
            var direction = this.position.subtract(tile.position).normalize().multiply(0.1);
            while (this.testCollision(tile)) {
                this.position = this.position.addY(direction.getY());
            }
        },
        restorePositionToTileSurface: function (tile) {
            var direction = this.position.subtract(tile.position).normalize().multiply(0.1);
            while (this.testCollision(tile)) {
                if (Math.abs(direction.getX()) > Math.abs(direction.getY())) {
                    this.position = this.position.addX(direction.getX());
                } else {
                    this.position = this.position.addY(direction.getY());
                }
            }
        }
    };
};