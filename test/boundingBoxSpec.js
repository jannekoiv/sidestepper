/* 
 */

describe('create', function () {
    it('constructs bounding box from center position and size.', function () {
        var box = BoundingBox.create(Vector.create(1.0, 2.0), Vector.create(3.0, 4.0));
        expect(box.position.x).toEqual(1.0);
        expect(box.position.y).toEqual(2.0);
        expect(box.size.x).toEqual(3.0);
        expect(box.size.y).toEqual(4.0);
    });
});

describe('testCollision', function () {
    it('tests collision between two bounding boxes and returns result.', function () {
        var boundingBoxA = BoundingBox.create(Vector.create(0.9, 0.9), Vector.create(1.0, 1.0));
        var boundingBoxB = BoundingBox.create(Vector.create(2.0, 2.0), Vector.create(1.0, 1.0));
        expect(boundingBoxA.testCollision(boundingBoxB)).toEqual(false);
    });
});

describe('testCollision', function () {
    it('tests collision between two bounding boxes and returns result.', function () {
        var boundingBoxA = BoundingBox.create(Vector.create(1.0, 1.0), Vector.create(1.0, 1.0));
        var boundingBoxB = BoundingBox.create(Vector.create(2.0, 2.0), Vector.create(1.0, 1.0));
        expect(boundingBoxA.testCollision(boundingBoxB)).toEqual(false);
    });
});

describe('testCollision', function () {
    it('tests collision between two bounding boxes and returns result.', function () {
        var boundingBoxA = BoundingBox.create(Vector.create(1.1, 1.1), Vector.create(1.0, 1.0));
        var boundingBoxB = BoundingBox.create(Vector.create(2.0, 2.0), Vector.create(1.0, 1.0));
        expect(boundingBoxA.testCollision(boundingBoxB)).toEqual(true);
    });
});