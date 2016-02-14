/* 
 */

describe('create', function () {
    it('constructs bounding box from center position and size.', function () {
        var box = createBoundingBox(createVector(1.0, 2.0), createVector(3.0, 4.0));
        expect(box.position.x).toEqual(1.0);
        expect(box.position.y).toEqual(2.0);
        expect(box.size.x).toEqual(3.0);
        expect(box.size.y).toEqual(4.0);
    });
});

describe('testCollision', function () {
    it('tests collision between two bounding boxes and returns result.', function () {
        var boundingBoxA = createBoundingBox(createVector(0.9, 0.9), createVector(1.0, 1.0));
        var boundingBoxB = createBoundingBox(createVector(2.0, 2.0), createVector(1.0, 1.0));
        expect(boundingBoxA.testCollision(boundingBoxB)).toEqual(false);
    });
});

describe('testCollision', function () {
    it('tests collision between two bounding boxes and returns result.', function () {
        var boundingBoxA = createBoundingBox(createVector(1.0, 1.0), createVector(1.0, 1.0));
        var boundingBoxB = createBoundingBox(createVector(2.0, 2.0), createVector(1.0, 1.0));
        expect(boundingBoxA.testCollision(boundingBoxB)).toEqual(false);
    });
});

describe('testCollision', function () {
    it('tests collision between two bounding boxes and returns result.', function () {
        var boundingBoxA = createBoundingBox(createVector(1.1, 1.1), createVector(1.0, 1.0));
        var boundingBoxB = createBoundingBox(createVector(2.0, 2.0), createVector(1.0, 1.0));
        expect(boundingBoxA.testCollision(boundingBoxB)).toEqual(true);
    });
});