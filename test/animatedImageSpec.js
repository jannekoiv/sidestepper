/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

describe("setLoadCallback", function () {
    it("sets animated image initialization done callback function", function () {
        animatedImage.setLoadCallback(function () {
        });
        expect(animatedImage.loadCallback).toEqual(jasmine.any(Function));
    });
});

describe("setErrorCallback", function () {
    it("sets animated image initialization error callback function", function () {
        animatedImage.setErrorCallback(function () {
        });
        expect(animatedImage.errorCallback).toEqual(jasmine.any(Function));
    });
});

describe("setContext", function () {
    it("sets animated image drawing context", function () {
        animatedImage.setContext(new Object());
        expect(animatedImage.context).toEqual(jasmine.any(Object));
    });
});

describe("create", function () {
    var image = null;
    beforeEach(function (done) {
        animatedImage.setContext(null);
        animatedImage.setLoadCallback(function () {
            done();
        });
        animatedImage.setErrorCallback(function () {
            done();
        });
        image = animatedImage.create("base/sepi.png");
    });
    it("constructs animated image from filename", function () {
        image.getFrameSize();
        expect(image.frameSize.x).toEqual(32);
        expect(image.frameSize.y).toEqual(32);
        expect(image.frameCount).toEqual(17);
    });
});

describe("create", function () {
    var image = null;
    beforeEach(function (done) {
        animatedImage.setContext(null);
        animatedImage.setLoadCallback(function () {
            done();
        });
        animatedImage.setErrorCallback(function () {
            done();
        });
        image = animatedImage.create("badfilename");
    });
    it("constructs empty, size 0 image from nonexisting filename", function () {
        alert(image.frameCount);
        expect(image.frameSize.x).toEqual(0);
        expect(image.frameSize.y).toEqual(0);
        expect(image.frameCount).toEqual(0);
    });
});

describe("getFrameSize", function () {
    it("returns size of single animation frame as vector", function () {
        var image = animatedImage.create("");
        expect(image.getFrameSize().x).toEqual(0);
        expect(image.getFrameSize().y).toEqual(0);
    });
});

describe("getFrameCount", function () {
    it("return number of animation frames", function () {
        var image = animatedImage.create("");
        expect(image.getFrameCount()).toEqual(0);
    });
});



