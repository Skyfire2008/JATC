var util=require("./util.js");
var geom=require("./geom.js");

/**
 * Constructor for a tetris shape
 * @param pos					position of shape's center
 * @param points				coordinates of shape's blocks
 * @param colors				colors of shape's blocks
 * @constructor
 */
function Shape(pos, points, colors, squareSize){
	this.pos=pos;
	this.points=points;
	this.colors=colors;
	this.squareSize=squareSize;
}

Shape.prototype.turnCW=function(){
	for(let i=0; i<this.points.length; i++){
		this.points[i].turnCW();
		//this.points[i].
	}
};

Shape.prototype.turnCCW=function(){
	for(let i=0; i<this.points.length; i++){
		this.points[i].turnCCW();
	}
};

function ShapeList(colorList){
	this.colorList=colorList;

}

ShapeList.prototype.generate=function(){
	var newShapes=[];

	newShapes.push(new Shape(new geom.Point(0, 0), [new geom.Point(0, -1), new geom.Point(0, 0), new geom.Point(0, 1), new geom.Point(0, 2)], this.colorList.nextNColors(4)));
	newShapes.push(new Shape(new geom.Point(0, 0), [new geom.Point(0, -1), new geom.Point(0, 0), new geom.Point(0, 1), new geom.Point(0, 2)], this.colorList.nextNColors(4)));

}