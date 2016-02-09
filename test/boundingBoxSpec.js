/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global boundingBox, vector2, ONE, TWO, THREE, FOUR */

describe("create", function () {
    it("constructs bounding box from center position and size.", function () {
        var box = boundingBox.create(vector2.create(ONE, TWO), vector2.create(THREE, FOUR)); 
        expect(box.position.x).toEqual(ONE);
        expect(box.position.y).toEqual(TWO);
        expect(box.size.x).toEqual(THREE);
        expect(box.size.y).toEqual(FOUR);
    });
});