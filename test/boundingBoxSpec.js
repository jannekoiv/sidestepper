/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global boundingBox, vector2, ONE, TWO, THREE, FOUR */

describe("create", function () {
    it("constructs bounding box from center position and size.", function () {
        var box = boundingBox.create(vector2.create(ONE, ONE_AND_HALF), vector2.create(TWO, THREE)); 
        expect(box.position.x).toEqual(ONE);
        expect(box.position.y).toEqual(ONE_AND_HALF);
        expect(box.size.x).toEqual(TWO);
        expect(box.size.y).toEqual(THREE);
    });
});

describe("testCollision", function () {
    it("tests collision between two bounding boxes and returns result.", function () {
        var boundingBoxA = boundingBox.create(vector2.create(ONE, ONE), vector2.create(ONE, ONE)); 
        var boundingBoxB = boundingBox.create(vector2.create(THREE, ONE), vector2.create(ONE, ONE)); 
        expect(boundingBoxA.testCollision(boundingBoxB)).toEqual(false);
    });
});

describe("testCollision", function () {
    it("tests collision between two bounding boxes and returns result.", function () {
        var boundingBoxA = boundingBox.create(vector2.create(ONE, ONE), vector2.create(ONE, ONE)); 
        var boundingBoxB = boundingBox.create(vector2.create(TWO, ONE), vector2.create(ONE, ONE)); 
        expect(boundingBoxA.testCollision(boundingBoxB)).toEqual(false);
    });
});

describe("testCollision", function () {
    it("tests collision between two bounding boxes and returns result.", function () {
        var boundingBoxA = boundingBox.create(vector2.create(ONE, ONE), vector2.create(ONE, ONE)); 
        var boundingBoxB = boundingBox.create(vector2.create(ONE_AND_HALF, ONE), vector2.create(ONE, ONE)); 
        expect(boundingBoxA.testCollision(boundingBoxB)).toEqual(true);
    });
});