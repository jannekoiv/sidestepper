/*
 */

describe('initAnimatedImage', function () {
    it('sets animated image callback functions and drawing context', function () {
        initAnimatedImage(
            function () {
            },
            function () {
            },
            new Object());
        expect(animatedImageGlobalData.loadCallback).toEqual(jasmine.any(Function));
        expect(animatedImageGlobalData.errorCallback).toEqual(jasmine.any(Function));
        expect(animatedImageGlobalData.context).toEqual(jasmine.any(Object));
    });
});

describe('createAnimatedImage', function () {
    var image = null;
    beforeEach(function (done) {
        initAnimatedImage(
            function () {
                done();
            },
            function () {
                done();
            },
            null);
        image = createAnimatedImage('base/sepi.png');
    });
    it('creates animated image from filename', function () {
        image.getFrameSize();
        expect(image.frameSize.x).toEqual(32);
        expect(image.frameSize.y).toEqual(32);
        expect(image.frameCount).toEqual(17);
    });
});

describe('create', function () {
    var image = null;
    beforeEach(function (done) {
        initAnimatedImage(
            function () {
                done();
            },
            function () {
                done();
            },
            null);
        image = createAnimatedImage('base/sepi.png');
    });
    it('constructs animated image from filename', function () {
        image.getFrameSize();
        expect(image.frameSize.x).toEqual(32);
        expect(image.frameSize.y).toEqual(32);
        expect(image.frameCount).toEqual(17);
    });
});

describe('create', function () {
    var image = null;
    beforeEach(function (done) {
        initAnimatedImage(
            function () {
                done();
            },
            function () {
                done();
            },
            null);
        image = createAnimatedImage('badfilename');
    });
    it('constructs empty, size 0 image from nonexisting filename', function () {
        expect(image.frameSize.x).toEqual(0);
        expect(image.frameSize.y).toEqual(0);
        expect(image.frameCount).toEqual(0);
    });
});

describe('getFrameSize', function () {
    it('returns size of single animation frame as vector', function () {
        var image = createAnimatedImage('');
        expect(image.getFrameSize().x).toEqual(0);
        expect(image.getFrameSize().y).toEqual(0);
    });
});

describe('getFrameCount', function () {
    it('return number of animation frames', function () {
        var image = createAnimatedImage('');
        expect(image.getFrameCount()).toEqual(0);
    });
});



