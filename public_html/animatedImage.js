/*
 */

var SCALING_FACTOR = 1.0;

var animatedImageGlobalData = {
    loadCallback: null,
    errorCallback: null,
    context: null
};

var initAnimatedImage = function (loadCallback, errorCallback, context) {
    animatedImageGlobalData.loadCallback = loadCallback;
    animatedImageGlobalData.errorCallback = errorCallback;
    animatedImageGlobalData.context = context;
};

var createAnimatedImage = function (filename) {
    var newObject = {
        image: new Image(),
        frameSize: createVector(0, 0),
        frameCount: 0,
        getFrameSize: function () {
            return this.frameSize;
        },
        getFrameCount: function () {
            return this.frameCount;
        },
        onLoad: function () {
            this.frameSize = createVector(this.image.width, this.image.width);
            this.frameCount = Math.floor(this.image.height / this.image.width);
            if (typeof animatedImageGlobalData.loadCallback === 'function') {
                animatedImageGlobalData.loadCallback();
            }
        },
        onError: function () {
            this.frameSize = createVector(0, 0);
            this.frameCount = 0;
            if (typeof animatedImageGlobalData.errorCallback === 'function') {
                animatedImageGlobalData.errorCallback();
            }
        },
        draw: function (position, frameNumber) {
            var sourcePosition = createVector(0, frameNumber * this.frameSize.y);
            var destinationSize = createVector(this.frameSize.x, this.frameSize.y);
            destinationSize.multiply(SCALING_FACTOR);
            var scaledPosition = createVector(position.x, position.y);
            scaledPosition.multiply(SCALING_FACTOR);
            animatedImageGlobalData.context.drawImage(this.image,
                sourcePosition.x,
                sourcePosition.y,
                this.frameSize.x,
                this.frameSize.y,
                scaledPosition.x,
                scaledPosition.y,
                destinationSize.x,
                destinationSize.y);
        }
    };
    newObject.image.onload = newObject.onLoad.bind(newObject);
    newObject.image.onerror = newObject.onError.bind(newObject);
    newObject.image.src = filename;
    return newObject;
};
