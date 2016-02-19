/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nazi = {
	create: function (position) {
		var newObject = Object.create(nazi);
		newObject.image = createAnimatedImage('natsi.bmp');
		newObject.position = position.clone();
		return newObject;
	},
    update: function() {

    },
	draw: function () {
		this.image.draw(this.position, 0);
	}
};