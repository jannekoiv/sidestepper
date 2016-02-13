/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global boundingBox, vector2, expect */

describe("create", function () {
    it("constructs bounding box from center position and size.", function () {
        var box = boundingBox.create(Vector(1.0, 2.0), Vector(3.0, 4.0));
        expect(box.position.x).toEqual(1.0);
        expect(box.position.y).toEqual(2.0);
        expect(box.size.x).toEqual(3.0);
        expect(box.size.y).toEqual(4.0);
    });
});

describe("testCollision", function () {
    it("tests collision between two bounding boxes and returns result.", function () {
        var boundingBoxA = boundingBox.create(Vector(0.9, 0.9), Vector(1.0, 1.0));
        var boundingBoxB = boundingBox.create(Vector(2.0, 2.0), Vector(1.0, 1.0));
        expect(boundingBoxA.testCollision(boundingBoxB)).toEqual(false);
    });
});

describe("testCollision", function () {
    it("tests collision between two bounding boxes and returns result.", function () {
        var boundingBoxA = boundingBox.create(Vector(1.0, 1.0), Vector(1.0, 1.0));
        var boundingBoxB = boundingBox.create(Vector(2.0, 2.0), Vector(1.0, 1.0));
        expect(boundingBoxA.testCollision(boundingBoxB)).toEqual(false);
    });
});

describe("testCollision", function () {
    it("tests collision between two bounding boxes and returns result.", function () {
        var boundingBoxA = boundingBox.create(Vector(1.1, 1.1), Vector(1.0, 1.0));
        var boundingBoxB = boundingBox.create(Vector(2.0, 2.0), Vector(1.0, 1.0));
        expect(boundingBoxA.testCollision(boundingBoxB)).toEqual(true);
    });
});