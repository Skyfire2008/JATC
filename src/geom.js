
function Point(x, y){
	this.x=x;
	this.y=y;
}

/**
 * Rotates the point clockwise
 */
Point.prototype.turnCW=function(){
	let temp=this.x;
	this.x=-this.y;
	this.y=temp;
};

/**
 * Rotates the point clockwise
 */
Point.prototype.turnCCW=function(){
	let temp=this.x;
	this.x=this.y;
	this.y=-temp;
};

/**
 * Adds another point to this one
 * @param other					point to add
 * @returns {Point}				returns resulting point
 */
Point.prototype.add=function(other){
	return new Point(this.x+other.x, this.y+other.y);
};

function Rect(x, y, width, height){
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
}

Rect.prototype.right=function(){
	return this.x+this.width;
};

Rect.prototype.down=function(){
	return this.y+this.height;
}

Rect.prototype.contains=function(point){
	return point.x>=this.x && point.x<this.right() && point.y>=this.y && point.y<this.down();
};

module.exports={
	Point: Point
};