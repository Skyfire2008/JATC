var util=require("./util.js");
var geom=require("./geom.js");

/**
 * Constructor for a tetris shape
 * @param pos					position of shape's center
 * @param points				coordinates of shape's blocks
 * @param colors				colors of shape's blocks
 * @constructor
 */
function Shape(pos, points, colors){
	this.pos=pos;
	this.points=points;
	this.colors=colors;
}

Shape.prototype.turnCW=function(){
	for(let i=0; i<this.points.length; i++){
		this.points[i].turnCW();
	}
};

Shape.prototype.turnCCW=function(){
	for(let i=0; i<this.points.length; i++){
		this.points[i].turnCCW();
	}
};