/*
 */

var Level = {
    create: function () {
        var newObject = Object.create(Level);
        newObject.tiles = [];
        $.getJSON('leveldata.json', function (levelData) {
            newObject.player = Player.create(Vector.create(levelData.player.position.x, levelData.player.position.y));
            levelData.tiles.forEach(function (tileData) {
                newObject.tiles.push(Tile.create(Vector.create(tileData.position.x, tileData.position.y)));
            });
            newObject.tiles[1].velocity = Vector.create(-1.0, 0);
            newObject.tiles[4].velocity = Vector.create(0.0, -1.0);
        });
        return newObject;
    },
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
                this.tiles[1].velocity = Vector.create(
                    this.tiles[1].velocity.getX() * -1.0, this.tiles[1].velocity.getY());

            }
            this.tiles[4].position.add(this.tiles[4].velocity);
            this.tiles[4].position = this.tiles[4].position.add(this.tiles[4].velocity);
            if (this.tiles[4].position.getY() > 400 || this.tiles[4].position.getY() < 50) {
                this.tiles[4].velocity = Vector.create(
                    this.tiles[4].velocity.getX(), this.tiles[4].velocity.getY() * -1.0);

            }
        }
        this.updatePlayer(this.tiles);
    },
    draw: function () {
        this.drawPlayer();
        this.drawTiles();
    }
};






