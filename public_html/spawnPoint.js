/*
 */

var SpawnPoint = $.extend(Object.create(BaseObject), {
    size: Vector.create(0.0, 0.0),
    create: function(position) {
        var newObject = Object.create(SpawnPoint);
        newObject.image = AnimatedImage.create('sepihead.bmp');
        newObject.position = position.clone();
        newObject.calculateBoundingBox();
        return newObject;
    }
});
