var util=require("./util.js");
var geom=require("./geom.js");

function Block(x, y, color){
	this.x=x;
	this.y=y;
	this.color=color;

	this.add=function(other){
		var temp=Block.prototype.add.call(this, other);
		return new Block(temp.x, temp.y, this.color);
	}
}

Block.prototype=new geom.Point();

/**
 * Constructor for a tetris shape
 * @param pos					position of shape's center
 * @param points				coordinates of shape's blocks
 * @param colors				colors of shape's blocks
 * @constructor
 */
function Shape(pos, points, colors, squareSize){
	this.pos=pos;
	this.blocks=[];
	for(let i=0; i<points.length; i++){
		this.blocks.push(new Block(points[i].x, points[i].y, colors[i]));
	}
	this.squareSize=squareSize;
}

Shape.prototype.turnCW=function(){
	for(let i=0; i<this.points.length; i++){
		this.blocks[i].turnCW();
		this.blocks[i].x-=this.squareSize-1;
	}
};

Shape.prototype.turnCCW=function(){
	for(let i=0; i<this.points.length; i++){
		this.blocks[i].turnCCW();
		this.blocks[i].y-=this.squareSize-1;
	}
};

Shape.prototype.getGlobalBlocks=function(){
	var result=[];
	for(let i=0; i<this.blocks.length; i++){
		result.push(this.blocks[i].add(this.pos));
	}
	return result;
};

function ShapeList(colorList){
	this.colorList=colorList;
	this.shapes=this.generateShapes();
}

ShapeList.prototype.generateShapes=function(){
	var newShapes=[];

	//ISHAPE
	newShapes.push(new Shape(new geom.Point(0, 0), [
			new geom.Point(2, 0),
			new geom.Point(2, 1),
			new geom.Point(2, 2),
			new geom.Point(2, 3)
		],
		this.colorList.nextNColors(4),
		4));
	//JSHAPE
	newShapes.push(new Shape(new geom.Point(0, 0), [
			new geom.Point(1, 0),
			new geom.Point(1, 1),
			new geom.Point(1, 2),
			new geom.Point(0, 2)
		],
		this.colorList.nextNColors(4),
		3));
	//LSHAPE
	newShapes.push(new Shape(new geom.Point(0, 0), [
			new geom.Point(1, 0),
			new geom.Point(1, 1),
			new geom.Point(1, 2),
			new geom.Point(2, 2)
		],
		this.colorList.nextNColors(4),
		3));
	//OSHAPE
	newShapes.push(new Shape(new geom.Point(0, 0), [
			new geom.Point(0, 0),
			new geom.Point(0, 1),
			new geom.Point(1, 0),
			new geom.Point(1, 1)
		],
		this.colorList.nextNColors(4),
		2));
	//SSHAPE
	newShapes.push(new Shape(new geom.Point(0, 0), [
			new geom.Point(1, 0),
			new geom.Point(1, 1),
			new geom.Point(2, 1),
			new geom.Point(2, 2)
		],
		this.colorList.nextNColors(4),
		3));
	//TSHAPE
	newShapes.push(new Shape(new geom.Point(0, 0), [
			new geom.Point(1, 0),
			new geom.Point(1, 1),
			new geom.Point(1, 2),
			new geom.Point(0, 1)
		],
		this.colorList.nextNColors(4),
		3));
	//ZSHAPE
	newShapes.push(new Shape(new geom.Point(0, 0), [
			new geom.Point(1, 0),
			new geom.Point(1, 1),
			new geom.Point(0, 1),
			new geom.Point(0, 2)
		],
		this.colorList.nextNColors(4),
		3));
	
	util.permute(newShapes);
	return newShapes;
};

ShapeList.prototype.nextShape=function(){
	if(this.shapes.length==0){
		this.shapes=this.generateShapes();
	}
	
	return this.shapes.shift();
}

module.exports={
	Block: Block,
	Shape: Shape,
	ShapeList: ShapeList
};