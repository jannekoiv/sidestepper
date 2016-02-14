/*
 */

var createLevel = function () {
    var newObject = {
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
                if (this.tiles[1].position.x > 500 || this.tiles[1].position.x < 50) {
                    this.tiles[1].velocity.x *= -1.0;
                }
            }
            this.updatePlayer(this.tiles);
        },
        draw: function () {
            this.drawPlayer();
            this.drawTiles();
        }
    };
    $.getJSON('leveldata.json', function (leveldata) {
        newObject.player = createPlayer(leveldata.player.position);
        leveldata.tiles.forEach(function (tileData) {
            newObject.tiles.push(createTile(tileData.position));
        });
        newObject.tiles[1].velocity.x = 1;
        leveldata.nazis.forEach(function (enemyData) {
            newObject.nazis.push(nazi.create(enemyData.position));
        });
    });
    return newObject;
};






