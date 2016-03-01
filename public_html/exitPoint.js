/*
 */

var ExitPoint = $.extend(Object.create(BaseObject), {
    size: Vector.create(0.0, 0.0),
    create: function(position) {
        var newObject = Object.create(ExitPoint);
        newObject.image = AnimatedImage.create('flag.bmp');
        newObject.position = position.clone();
        newObject.calculateBoundingBox();
        return newObject;
    }
});

