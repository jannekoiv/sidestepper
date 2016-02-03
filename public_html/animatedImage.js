/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

var DESTINATION_SIZE_X = 64;
var DESTINATION_SIZE_Y = 64;

var animatedImage = {
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
    getFrameSize: function () {
        return this.frameSize;
    },
    getFrameCount: function () {
        return this.frameCount;
    },
    onLoad: function () {
        this.frameSize = vector2.create(this.image.width, this.image.width);
        this.frameCount = Math.floor(this.image.height / this.image.width);
        if (typeof animatedImage.loadCallback === 'function') {
            animatedImage.loadCallback();
        }
    },
    onError: function () {
        this.frameSize = vector2.create(0, 0);
        this.frameCount = 0;
        if (typeof animatedImage.errorCallback === 'function') {
            animatedImage.errorCallback();
        }
    },
    create: function (filename) {
        var newObject = Object.create(animatedImage);
        newObject.image = animatedImage.createSystemImage();
        newObject.frameSize = vector2.create(0, 0);
        newObject.frameCount = 0;
        newObject.image.onload = this.onLoad.bind(newObject);
        newObject.image.onerror = this.onError.bind(newObject);
        newObject.image.src = filename;
        return newObject;
    },
    createSystemImage: function () {
        return new Image();
    },
    draw: function (position, frameNumber) {
        var sourcePosition = vector2.create(0, frameNumber * this.frameSize.y);
        var destinationSize = vector2.create(DESTINATION_SIZE_X, DESTINATION_SIZE_Y);
        animatedImage.context.drawImage(this.image,
                sourcePosition.x,
                sourcePosition.y,
                this.frameSize.x,
                this.frameSize.y,
                position.x,
                position.y,
                destinationSize.x,
                destinationSize.y);
    }
};


