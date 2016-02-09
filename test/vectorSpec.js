/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global vector2, expect */

var SQUARE_ROOT_OF_TWO = Math.sqrt(2.0);

describe("Vector", function() {
    it("Constructs vector from x and y.", function() {
        var vector = vector2.create(1.0, 2.0);
        expect(vector.x).toBeCloseTo(1.0);
        expect(vector.y).toBeCloseTo(2.0);
    });
});

describe("add", function() {
    it("Adds second vector to first vector and returns first vector.", function() {
        var vectorA = vector2.create(1.0, 2.0);
        var vectorB = vector2.create(0.1, 0.2);
        var result = vectorA.add(vectorB);
        expect(result.x).toBeCloseTo(1.1);
        expect(result.y).toBeCloseTo(2.2);
    });
});

describe("subtract", function() {
    it("Subtracts second vector from first vector and returns first vector.", function() {
        var vectorA = vector2.create(1.0, 2.0);
        var vectorB = vector2.create(0.1, 0.2);
        var result = vectorA.subtract(vectorB);
        expect(result.x).toBeCloseTo(0.9);
        expect(result.y).toBeCloseTo(1.8);
    });
});

describe("multiply", function() {
    it("Multiplies vector by scalar and returns it.", function() {
        var vector = vector2.create(1.0, 2.0);
        var scalar = 10.0;
        var result = vector.multiply(scalar);
        expect(result.x).toBeCloseTo(10);
        expect(result.y).toBeCloseTo(20);
    });
});

describe("divide", function() {
    it("Divides vector by scalar and returns it.", function() {
        var vector = vector2.create(10.0, 20.0);
        var scalar = 10.0;
        var result = vector.divide(scalar);
        expect(result.x).toBeCloseTo(1.0);
        expect(result.y).toBeCloseTo(2.0);
    });
});

describe("length", function() {
    it("Returns length of vector.", function() {
        var vector = vector2.create(1.0, 1.0);
        var result = vector.length();
        expect(result).toBeCloseTo(SQUARE_ROOT_OF_TWO);
    });
});

describe("normalize", function() {
    it("Normalizes vector and returns it.", function() {
        var vector = vector2.create(1.0, 1.0);
        var result = vector.normalize();
        expect(result.x).toBeCloseTo(SQUARE_ROOT_OF_TWO);
        expect(result.y).toBeCloseTo(SQUARE_ROOT_OF_TWO);
    });
});