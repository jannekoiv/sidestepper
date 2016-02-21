/*
 */

var SCALING_FACTOR = 2.0;

var AnimatedImage = {
    loadCallback: null,
    errorCallback: null,
    context: null,
    setLoadCallback: function (loadCallback) {
        this.loadCallback = loadCallback;
    },
    setErrorCallback: function (errorCallback) {
        this.errorCallback = errorCallback;
    },
    setContext: function (context) {
        this.context = context;
    },
    createSystemImage: function () {
        return new Image();
    },
    create: function (filename) {
        var newObject = Object.create(AnimatedImage);
        newObject.image = AnimatedImage.createSystemImage();
        newObject.frameSize = Vector.create(0, 0);
        newObject.frameCount = 0;
        newObject.image.onload = this.onLoad.bind(newObject);
        newObject.image.onerror = this.onError.bind(newObject);
        newObject.image.src = filename;
        return newObject;
    },
    getFrameSize: function () {
        return this.frameSize;
    },
    getFrameCount: function () {
        return this.frameCount;
    },
    onLoad: function () {
        this.frameSize = Vector.create(this.image.width, this.image.width);
        this.frameCount = Math.floor(this.image.height / this.image.width);
        if (typeof AnimatedImage.loadCallback === 'function') {
            AnimatedImage.loadCallback();
        }
    },
    onError: function () {
        this.frameSize = Vector.create(0, 0);
        this.frameCount = 0;
        if (typeof AnimatedImage.errorCallback === 'function') {
            AnimatedImage.errorCallback();
        }
    },
    draw: function (position, frameNumber) {
        var sourcePosition = Vector.create(0, frameNumber * this.frameSize.getY());
        var destinationSize = this.frameSize.multiply(SCALING_FACTOR);
        var scaledPosition = position.multiply(SCALING_FACTOR);
        AnimatedImage.context.drawImage(
            this.image,
            sourcePosition.getX(),
            sourcePosition.getY(),
            this.frameSize.getX(),
            this.frameSize.getY(),
            scaledPosition.getX(),
            scaledPosition.getY(),
            destinationSize.getX(),
            destinationSize.getY());
    }
};
