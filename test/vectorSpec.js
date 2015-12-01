/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var SQUARE_ROOT_OF_TWO = Math.sqrt(2.0);
var HALF_SQUARE_ROOT_OF_TWO = 1.0 / Math.sqrt(2.0);
var ONE = 1.0;
var DECIMAL_COUNT = 4;

describe("Vector", function() {
    it("Constructs vector from x and y.", function() {
        var vector = vector2.create(SQUARE_ROOT_OF_TWO, HALF_SQUARE_ROOT_OF_TWO);
        expect(vector.x).toBeCloseTo(SQUARE_ROOT_OF_TWO, DECIMAL_COUNT);
        expect(vector.y).toBeCloseTo(HALF_SQUARE_ROOT_OF_TWO, DECIMAL_COUNT);
    });
});

describe("add", function() {
    it("Adds second vector to first vector and returns first vector.", function() {
        var vectorA = vector2.create(HALF_SQUARE_ROOT_OF_TWO, HALF_SQUARE_ROOT_OF_TWO);
        var vectorB = vector2.create(HALF_SQUARE_ROOT_OF_TWO, HALF_SQUARE_ROOT_OF_TWO);
        var result = vectorA.add(vectorB);
        expect(result.x).toBeCloseTo(SQUARE_ROOT_OF_TWO, DECIMAL_COUNT);
        expect(result.y).toBeCloseTo(SQUARE_ROOT_OF_TWO, DECIMAL_COUNT);
    });
});

describe("subtract", function() {
    it("Subtracts second vector from first vector and returns first vector.", function() {
        var vectorA = vector2.create(SQUARE_ROOT_OF_TWO, SQUARE_ROOT_OF_TWO);
        var vectorB = vector2.create(HALF_SQUARE_ROOT_OF_TWO, HALF_SQUARE_ROOT_OF_TWO);
        var result = vectorA.subtract(vectorB);
        expect(result.x).toBeCloseTo(HALF_SQUARE_ROOT_OF_TWO, DECIMAL_COUNT);
        expect(result.y).toBeCloseTo(HALF_SQUARE_ROOT_OF_TWO, DECIMAL_COUNT);
    });
});

describe("multiply", function() {
    it("Multiplies vector by scalar and returns it.", function() {
        var vector = vector2.create(SQUARE_ROOT_OF_TWO, SQUARE_ROOT_OF_TWO);
        var scalar = HALF_SQUARE_ROOT_OF_TWO;
        var result = vector.multiply(scalar);
        expect(result.x).toBeCloseTo(ONE, DECIMAL_COUNT);
        expect(result.y).toBeCloseTo(ONE, DECIMAL_COUNT);
    });
});

describe("divide", function() {
    it("Divides vector by scalar and returns it.", function() {
        var vector = vector2.create(ONE, ONE);
        var scalar = HALF_SQUARE_ROOT_OF_TWO;
        var result = vector.divide(scalar);
        expect(result.x).toBeCloseTo(SQUARE_ROOT_OF_TWO, DECIMAL_COUNT);
        expect(result.y).toBeCloseTo(SQUARE_ROOT_OF_TWO, DECIMAL_COUNT);
    });
});

describe("length", function() {
    it("Returns length of vector.", function() {
        var vector = vector2.create(ONE, ONE);
        var result = vector.length();
        expect(result).toBeCloseTo(SQUARE_ROOT_OF_TWO);
    });
});

describe("normalize", function() {
    it("Normalizes vector and returns it.", function() {
        var vector = vector2.create(ONE, ONE);
        var result = vector.normalize();
        expect(result.x).toBeCloseTo(SQUARE_ROOT_OF_TWO, DECIMAL_COUNT);
        expect(result.y).toBeCloseTo(SQUARE_ROOT_OF_TWO, DECIMAL_COUNT);
    });
});

