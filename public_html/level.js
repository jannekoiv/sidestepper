/*
 */

var Level = {
    create: function () {
        var newObject = Object.create(Level);
        newObject.backgroundTiles = [];
        newObject.foregroundTiles = [];
        newObject.dynamicTiles = [];
        newObject.items = [];
        var self = this;
        $.getJSON('leveldata.json', function (levelData) {
            self.loadBackgroundTiles(newObject.backgroundTiles, levelData);
            self.loadForegroundTiles(newObject.foregroundTiles, levelData);
            self.loadDynamicTiles(newObject, levelData);
            newObject.player = Player.create(newObject.startPosition);
        });
        return newObject;
    },
    loadBackgroundTiles: function (tiles, levelData) {
        var calculateTilePosition = function (x, y, levelData) {
            var tileSize = Vector.create(levelData.tilesets[0].tilewidth, levelData.tilesets[0].tileheight);
            return Vector.create(x * tileSize.x, y * tileSize.y);
        };
        var calculateTileNumber = function (x, y, levelData) {
            return levelData.layers[0].data[y * levelData.layers[0].width + x];
        };
        for (y = 0; y < levelData.height; y += 1) {
            for (x = 0; x < levelData.width; x += 1) {
                var tileNumber = calculateTileNumber(x, y, levelData);
                if (tileNumber > 0) {
                    tiles.push(StaticTile.create(calculateTilePosition(x, y, levelData), tileNumber - 1));
                }
            }
        }
    },
    loadForegroundTiles: function (tiles, levelData) {
        var calculateTilePosition = function (x, y, levelData) {
            var tileSize = Vector.create(levelData.tilesets[0].tilewidth, levelData.tilesets[0].tileheight);
            return Vector.create(x * tileSize.x, y * tileSize.y);
        };
        var calculateTileNumber = function (x, y, levelData) {
            return levelData.layers[1].data[y * levelData.layers[1].width + x];
        };
        for (y = 0; y < levelData.height; y += 1) {
            for (x = 0; x < levelData.width; x += 1) {
                var tileNumber = calculateTileNumber(x, y, levelData);
                if (tileNumber > 0) {
                    tiles.push(StaticTile.create(calculateTilePosition(x, y, levelData), tileNumber - 1));
                }
            }
        }
    },
    loadDynamicTiles: function (newObject, levelData) {
        var loadStartPosition = function (sourceTile) {
            newObject.startPosition = Vector.create(sourceTile.x, sourceTile.y);
        };
        var loadDynamicTile = function (sourceTile) {
            var imageNumber = sourceTile.gid - 1;
            var position = Vector.create(sourceTile.x, sourceTile.y - TILE_SIZE_Y);
            var velocity = Vector.create(
                parseFloat(sourceTile.properties.velocity_x),
                parseFloat(sourceTile.properties.velocity_y));
            newObject.dynamicTiles.push(DynamicTile.create(position, velocity, imageNumber));
        };
        levelData.layers[2].objects.forEach(function (sourceTile) {
            if (sourceTile.name === 'start') {
                loadStartPosition(sourceTile);
            } else {
                loadDynamicTile(sourceTile);
            }
        });
    },
    loadItems: function (items, levelData) {
        levelData.layers[2].objects.forEach(function (sourceItem) {
            var name = sourceItem.name;

        });

    },
    updatePlayer: function () {
        try {
            this.player.update(this.foregroundTiles.concat(this.dynamicTiles));
        } catch (e) {
        }
    },
    updateTiles: function () {
        this.dynamicTiles.forEach(function (tile) {
            tile.update();
        });
    },
    drawPlayer: function () {
        try {
            this.player.draw();
        } catch (e) {
        }
    },
    drawTiles: function () {
        this.backgroundTiles.forEach(function (tile) {
            //tile.draw();
        });
        this.foregroundTiles.forEach(function (tile) {
            tile.draw();
        });
        this.dynamicTiles.forEach(function (tile) {
            tile.draw();
        });
    },
    update: function () {
        try {
            this.updatePlayer(this.backgroundTiles);
        } catch (e) {

        }
        this.updateTiles();
    },
    draw: function () {
        this.drawTiles();
        this.drawPlayer();
    }
};






