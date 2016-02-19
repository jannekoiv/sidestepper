/*
 */

var createLevel = function () {
    return {
        tiles: [],
        nazis: [],
        updatePlayer: function () {
            try {
                this.player.update(this.tiles);
            } catch (e) {
            }
        },
        drawPlayer: function () {
            try {
                this.player.draw();
            } catch (e) {
            }
        },
        drawTiles: function () {
            this.tiles.forEach(function (tile) {
                tile.draw();
            });
        },
        update: function () {
            if (this.tiles.length > 0) {
                this.tiles[1].position.add(this.tiles[1].velocity);
                this.tiles[1].position = this.tiles[1].position.add(this.tiles[1].velocity);
                if (this.tiles[1].position.getX() > 500 || this.tiles[1].position.getX() < 50) {
                    this.tiles[1].velocity = createVector(
                        this.tiles[1].velocity.getX() * -1.0, this.tiles[1].velocity.getY());

                }
                this.tiles[4].position.add(this.tiles[4].velocity);
                this.tiles[4].position = this.tiles[4].position.add(this.tiles[4].velocity);
                if (this.tiles[4].position.getY() > 400 || this.tiles[4].position.getY() < 50) {
                    this.tiles[4].velocity = createVector(
                        this.tiles[4].velocity.getX(), this.tiles[4].velocity.getY() * -1.0);

                }
            }
            this.updatePlayer(this.tiles);
        },
        draw: function () {
            this.drawPlayer();
            this.drawTiles();
        },
        init: function() {
            var self = this;
            $.getJSON('leveldata.json', function (leveldata) {
                self.player = createPlayer(createVector(leveldata.player.position.x, leveldata.player.position.y));
                leveldata.tiles.forEach(function (tileData) {
                    self.tiles.push(createTile(createVector(tileData.position.x, tileData.position.y)));
                });
                self.tiles[1].velocity = createVector(-1.0, 0);
                self.tiles[4].velocity = createVector(0.0, -1.0);
            });
            return self;
        }
    }.init();
};






