/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


describe("setLoadCallback", function () {
    it("sets animated image initialization done callback function", function () {
        AnimatedImage.setLoadCallback(function () {
        });
        expect(AnimatedImage.loadCallback).toEqual(jasmine.any(Function));
    });
});

describe("setErrorCallback", function () {
    it("sets animated image initialization error callback function", function () {
        AnimatedImage.setErrorCallback(function () {
        });
        expect(AnimatedImage.errorCallback).toEqual(jasmine.any(Function));
    });
});

describe("setContext", function () {
    it("sets animated image drawing context", function () {
        AnimatedImage.setContext(new Object());
        expect(AnimatedImage.context).toEqual(jasmine.any(Object));
    });
});

describe("AnimatedImage", function () {
    var image = null;
    beforeEach(function (done) {
        AnimatedImage.setContext(null);
        AnimatedImage.setLoadCallback(function () {
            done();
        });
        AnimatedImage.setErrorCallback(function () {
            done();
        });
        image = new AnimatedImage("base/sepi.png");
    });
    it("constructs animated image from filename", function () {
        expect(image.frameSize.x).toEqual(32);
        expect(image.frameSize.y).toEqual(32);
        expect(image.frameCount).toEqual(17);
    });
});

describe("AnimatedImage", function () {
    var image = null;
    beforeEach(function (done) {
        AnimatedImage.setContext(null);
        AnimatedImage.setLoadCallback(function () {
            done();
        });
        AnimatedImage.setErrorCallback(function () {
            done();
        });
        image = new AnimatedImage("badfilename");
    });
    it("constructs empty, size 0 image from nonexisting filename", function () {
        expect(image.frameSize.x).toEqual(0);
        expect(image.frameSize.y).toEqual(0);
        expect(image.frameCount).toEqual(0);
    });
});

describe("getFrameSize", function () {
    it("returns size of single image frame as vector", function () {
        var image = new AnimatedImage("");
        expect(image.getFrameSize().x).toEqual(0);
        expect(image.getFrameSize().y).toEqual(0);
    });
});


describe("getFrameCount", function () {
    it("return number of animation frames in animated image", function () {
        var image = new AnimatedImage("");
        expect(image.getFrameCount()).toEqual(0);
    });
});



