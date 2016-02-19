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
        var clonedVector = vector.clone();
        expect(clonedVector.x).toBeCloseTo(1.0);
        expect(clonedVector.y).toBeCloseTo(2.0);
    });
});

describe('cloneAndSetX', function (x) {
    it('creates new vector by cloning existing vector and sets x-component', function () {
        var vector = createVector(0.0, 2.0);
        var clonedVector = vector.cloneAndSetX(1.0);
        expect(clonedVector.x).toBeCloseTo(1.0);
        expect(clonedVector.y).toBeCloseTo(2.0);
    });
});

describe('cloneAndSetY', function (x) {
    it('creates new vector by cloning existing vector and sets y-component', function () {
        var vector = createVector(1.0, 0.0);
        var clonedVector = vector.cloneAndSetX(1.0);
        expect(clonedVector.x).toBeCloseTo(1.0);
        expect(clonedVector.y).toBeCloseTo(2.0);
    });
});

describe('add', function () {
    it('creates new vector representing sum of two vectors, original vectors are not modified', function () {
        var vectorA = createVector(1.0, 2.0);
        var vectorB = createVector(0.1, 0.2);
        var sum = vectorA.add(vectorB);
        expect(vectorA.x).toBeCloseTo(1.0);
        expect(vectorA.y).toBeCloseTo(2.0);
        expect(vectorB.x).toBeCloseTo(0.1);
        expect(vectorB.y).toBeCloseTo(0.2);
        expect(sum.x).toBeCloseTo(1.1);
        expect(sum.y).toBeCloseTo(2.2);
    });
});

describe('addX', function () {
    it('creates new vector representing sum of original vector and x-component, original vector is not modified', function () {
        var vector = createVector(1.0, 2.0);
        var sum = vector.addX(0.1);
        expect(vector.x).toBeCloseTo(1.0);
        expect(vector.y).toBeCloseTo(2.0);
        expect(sum.x).toBeCloseTo(1.1);
        expect(sum.y).toBeCloseTo(2.0);
    });
});

describe('addY', function () {
    it('creates new vector representing sum of original vector and y-component, original vector is not modified', function () {
        var vector = createVector(1.0, 2.0);
        var sum = vector.addY(0.2);
        expect(vector.x).toBeCloseTo(1.0);
        expect(vector.y).toBeCloseTo(2.0);
        expect(sum.x).toBeCloseTo(1.0);
        expect(sum.y).toBeCloseTo(2.2);
    });
});

describe('subtract', function () {
    it('creates new vector representing difference of two vectors, original vectors are not modified', function () {
        var vectorA = createVector(1.0, 2.0);
        var vectorB = createVector(0.1, 0.2);
        var difference = vectorA.subtract(vectorB);
        expect(vectorA.x).toBeCloseTo(1.0);
        expect(vectorA.y).toBeCloseTo(2.0);
        expect(vectorB.x).toBeCloseTo(0.1);
        expect(vectorB.y).toBeCloseTo(0.2);
        expect(difference.x).toBeCloseTo(0.9);
        expect(difference.y).toBeCloseTo(1.8);
    });
});

describe('subtractX', function () {
    it('creates new vector representing difference of original vector and x-component, original vector is not modified', function () {
        var vector = createVector(1.0, 2.0);
        var difference = vector.subtractX(0.1);
        expect(vector.x).toBeCloseTo(1.0);
        expect(vector.y).toBeCloseTo(2.0);
        expect(difference.x).toBeCloseTo(0.9);
        expect(difference.y).toBeCloseTo(2.0);
    });
});

describe('subtractY', function () {
    it('creates new vector representing difference of original vector and y-component, original vector is not modified', function () {
        var vector = createVector(1.0, 2.0);
        var difference = vector.subtractY(0.2);
        expect(vector.x).toBeCloseTo(1.0);
        expect(vector.y).toBeCloseTo(2.0);
        expect(difference.x).toBeCloseTo(1.0);
        expect(difference.y).toBeCloseTo(1.8);
    });
});

describe('multiply', function () {
    it('creates new vector representing product of original vector and scalar, original vector is not modified', function () {
        var vector = createVector(1.0, 2.0);
        var scalar = 10.0;
        var product = vector.multiply(scalar);
        expect(vector.x).toBeCloseTo(1.0);
        expect(vector.y).toBeCloseTo(2.0);
        expect(product.x).toBeCloseTo(10.0);
        expect(product.y).toBeCloseTo(20.0);
    });
});

describe('divide', function () {
    it('creates new vector representing quotient of original vector and scalar, original vector is not modified', function () {
        var vector = createVector(10.0, 20.0);
        var scalar = 10.0;
        var quotient = vector.divide(scalar);
        expect(vector.x).toBeCloseTo(10.0);
        expect(vector.y).toBeCloseTo(20.0);
        expect(quotient.x).toBeCloseTo(1.0);
        expect(quotient.y).toBeCloseTo(2.0);
    });
});

describe('length', function () {
    it('returns length of vector', function () {
        var vector = createVector(1.0, 1.0);
        var length = vector.length();
        expect(vector.x).toBeCloseTo(1.0);
        expect(vector.y).toBeCloseTo(1.0);
        expect(length).toBeCloseTo(SQUARE_ROOT_OF_TWO);
    });
});

describe('normalize', function () {
    it('creates new vector representing normalized original vector, original vector is not modified', function () {
        var vector = createVector(1.0, 1.0);
        var normalizedVector = vector.normalize();
        expect(vector.x).toBeCloseTo(1.0);
        expect(vector.y).toBeCloseTo(1.0);
        expect(normalizedVector.x).toBeCloseTo(1.0 / SQUARE_ROOT_OF_TWO);
        expect(normalizedVector.y).toBeCloseTo(1.0 / SQUARE_ROOT_OF_TWO);
    });
});

describe('getX', function () {
    it('returns x-component of vector', function() {
        var vector = createVector(1.0, 2.0);
        var x = vector.getX();
        expect(vector.x).toBeCloseTo(1.0);
        expect(vector.y).toBeCloseTo(2.0);
        expect(x).toBeCloseTo(1.0);
    });
});

describe('getY', function () {
    it('returns y-component of vector', function() {
        var vector = createVector(1.0, 2.0);
        var y = vector.getY();
        expect(vector.x).toBeCloseTo(1.0);
        expect(vector.y).toBeCloseTo(2.0);
        expect(y).toBeCloseTo(2.0);
    });
});
