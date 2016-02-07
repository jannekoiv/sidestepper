/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var nazi = {
	create: function (position) {
		var newObject = Object.create(nazi);
		newObject.image = animatedImage.create('natsi.bmp');
		newObject.position = vector2.create(position.x, position.y);
		return newObject;
	},
	draw: function () {
		this.image.draw(this.position, 0);
	}
};