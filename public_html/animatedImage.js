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
        this.frameSize = new Vector(this.image.width, this.image.width);
        this.frameCount = Math.floor(this.image.height / this.image.width);
        if (typeof animatedImage.loadCallback === 'function') {
            animatedImage.loadCallback();
        }
    },
    onError: function () {
        this.frameSize = new Vector(0, 0);
        this.frameCount = 0;
        if (typeof animatedImage.errorCallback === 'function') {
            animatedImage.errorCallback();
        }
    },
    create: function (filename) {
        var newImage = Object.create(animatedImage);
        newImage.image = new Image();
        newImage.frameSize = new Vector(0, 0);
        newImage.frameCount = 0;
        newImage.image.onload = this.onLoad.bind(newImage);
        newImage.image.onerror = this.onError.bind(newImage);
        newImage.image.src = filename;
        return newImage;
    },
    draw: function (position, frameNumber) {
        var sourcePosition = new Vector(0, frameNumber * this.frameSize.y);
        var destinationSize = new Vector(DESTINATION_SIZE_X, DESTINATION_SIZE_Y);
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


