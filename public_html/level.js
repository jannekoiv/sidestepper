/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global tile, vector2, player, enemy */

var level = {
    create: function () {
        var newObject = Object.create(level);
        newObject.tiles = [];
        newObject.enemies = [];
        $.getJSON('leveldata.json', function (leveldata) {
            newObject.player = player.create(leveldata.player.position);
            leveldata.tiles.forEach(function (tileData) {
                newObject.tiles.push(tile.create(tileData.position));
            });
            leveldata.enemies.forEach(function (enemyData) {
                newObject.enemies.push(enemy.create(enemyData.position));
            });
        });
        return newObject;
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
    drawEnemies: function () {
        this.enemies.forEach(function (enemy) {
            enemy.draw();
        });
    },
    draw: function () {
        this.drawPlayer();
        this.drawTiles();
        this.drawEnemies();
    }
};






