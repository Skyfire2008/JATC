
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