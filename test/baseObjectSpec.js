/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

describe("BaseObject", function () {
    it("Constructs empty base object", function () {
        var object = new BaseObject();
        expect(object.size.x).toEqual(0);
        expect(object.size.y).toEqual(0);
    });
});


