/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global vector2 */

var boundingBox = {
    create: function (position, size) {
        var newObject = Object.create(boundingBox);
        newObject.position = vector2.create(position.x, position.y);
        newObject.size = vector2.create(size.x, size.y);
        return newObject;
    }
};