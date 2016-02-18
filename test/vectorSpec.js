/*
 */

var SQUARE_ROOT_OF_TWO = Math.sqrt(2.0);

describe('createVector', function () {
    it('creates new vector from x and y', function () {
        var vector = createVector(1.0, 2.0);
        expect(vector.x).toBeCloseTo(1.0);
        expect(vector.y).toBeCloseTo(2.0);
    });
});

describe('clone', function () {
    it('creates new vector by cloning existing vector', function () {
        var vector = createVector(1.0, 2.0);
        var result = vector.clone();
        expect(result.x).toBeCloseTo(1.0);
        expect(result.y).toBeCloseTo(2.0);
    });
});

describe('add', function () {
    it('adds second vector to first vector and returns first vector', function () {
        var vectorA = createVector(1.0, 2.0);
        var vectorB = createVector(0.1, 0.2);
        var result = vectorA.add(vectorB);
        expect(result.x).toBeCloseTo(1.1);
        expect(result.y).toBeCloseTo(2.2);
        var hoo = createVector(1, 1);
    });
});

describe('subtract', function () {
    it('subtracts second vector from first vector and returns first vector', function () {
        var vectorA = createVector(1.0, 2.0);
        var vectorB = createVector(0.1, 0.2);
        var result = vectorA.subtract(vectorB);
        expect(result.x).toBeCloseTo(0.9);
        expect(result.y).toBeCloseTo(1.8);
        expect(result.y).tobe
    });
});

describe('multiply', function () {
    it('multiplies vector by scalar and returns it', function () {
        var vector = createVector(1.0, 2.0);
        var scalar = 10.0;
        var result = vector.multiply(scalar);
        expect(result.x).toBeCloseTo(10);
        expect(result.y).toBeCloseTo(20);
    });
});

describe('divide', function () {
    it('divides vector by scalar and returns it', function () {
        var vector = createVector(10.0, 20.0);
        var scalar = 10.0;
        var result = vector.divide(scalar);
        expect(result.x).toBeCloseTo(1.0);
        expect(result.y).toBeCloseTo(2.0);
    });
});

describe('length', function () {
    it('returns length of vector', function () {
        var vector = createVector(1.0, 1.0);
        var result = vector.length();
        expect(result).toBeCloseTo(SQUARE_ROOT_OF_TWO);
    });
});

describe('normalize', function () {
    it('normalizes vector and returns it', function () {
        var vector = createVector(1.0, 1.0);
        var result = vector.normalize();
        expect(result.x).toBeCloseTo(1.0 / SQUARE_ROOT_OF_TWO);
        expect(result.y).toBeCloseTo(1.0 / SQUARE_ROOT_OF_TWO);
    });
});