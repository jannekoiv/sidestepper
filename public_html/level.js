/*
 */

var Level = {
    create: function () {
        var newObject = Object.create(Level);
        newObject.backgroundTiles = [];
        newObject.foregroundTiles = [];
        newObject.objects = [];
        var self = this;
        $.getJSON('leveldata.json', function (levelData) {
            self.loadBackgroundTiles(newObject, levelData);
            self.loadForegroundTiles(newObject, levelData);
            self.loadObjects(newObject, levelData);
            self.spawnPlayer(newObject);
        });
        return newObject;
    },
    spawnPlayer: function(newLevel) {
        var spawnPoint = newLevel.objects.find(function(object) {
            return SpawnPoint.isPrototypeOf(object);
        });
        newLevel.player = Player.create(spawnPoint.position);
    },
    loadBackgroundTiles: function (newLevel, levelData) {
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
                    newLevel.backgroundTiles.push(StaticTile.create(calculateTilePosition(x, y, levelData), tileNumber - 1));
                }
            }
        }
    },
    loadForegroundTiles: function (newLevel, levelData) {
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
                    newLevel.foregroundTiles.push(StaticTile.create(calculateTilePosition(x, y, levelData), tileNumber - 1));
                }
            }
        }
    },
    loadObjects: function (newLevel, levelData) {
        var createObject = function (sourceTile) {
            if (sourceTile.name === 'spawn') {
                return SpawnPoint.create(Vector.create(sourceTile.x, sourceTile.y - TILE_SIZE_Y));
            } else if (sourceTile.name === 'exit') {
                return ExitPoint.create(Vector.create(sourceTile.x, sourceTile.y - TILE_SIZE_Y));
            } else {
                return DynamicTile.create(
                    Vector.create(sourceTile.x, sourceTile.y - TILE_SIZE_Y),
                    Vector.create(
                        parseFloat(sourceTile.properties.velocity_x),
                        parseFloat(sourceTile.properties.velocity_y)),
                    sourceTile.gid - 1);
            }
        };
        levelData.layers[2].objects.forEach(function (sourceTile) {
            newLevel.objects.push(createObject(sourceTile));
        });
    },
    updatePlayer: function () {
        try {
            this.player.update(this.foregroundTiles.concat(this.objects));
        } catch (e) {
        }
    },
    updateTiles: function () {
        this.objects.forEach(function (tile) {
            tile.update(this.foregroundTiles);
        }, this);
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
        this.objects.forEach(function (tile) {
            tile.draw();
        });
    },
    update: function () {
        this.updateTiles();
        try {
            this.updatePlayer(this.backgroundTiles);
        } catch (e) {

        }
    },
    draw: function () {
        this.drawTiles();
        this.drawPlayer();
    }
};






