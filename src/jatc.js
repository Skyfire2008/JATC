var util=require("./util.js");
var color=require("./color.js");
var shape=require("./shape.js");
var res=require("./res.js");

function Jatc(width, height, shapeList){
	this.width=width;
	this.height=heigt;
	this.field=[];

	for(let i=0; i<width; i++){
		field[i]=[];
		for(let j=0; j<height; j++){
			field[i][j]=0;
		}
	}

	this.shapeList=shapeList;
	this.currentShape=shapeList.nextShape();

	this.running=false;

	this.score=0;
	this.reqMillis=500;
	this.leftMillis=this.reqMillis;
	
	this.shapeCollides=function(){
		var points=currentShape.getGlobalPoints();
		
		for(let i=0; i<points.length; i++){
			let currentPoint=points[i];
			
			if(currentPoint.x<0 || currentPoint.x>=this.width){
				return true;
			}else if(currentPoint.y<0 || currentPoint.y>this.height){
				return true;
			}else if(this.field[currentPoint.x][currentPoint.y]!=0){
				return true;
			}

		}
		
		return false;
	};

	this.pause=function(){
		this.running=!this.running;
	};

	this.update=function(millis){
		if(running){
			this.leftMillis-=millis;
			if(leftMillis<0){
				this.currentShape.y+=1;
				if(this.shapeCollides()){
					this.currentShape.y-=1;

					//TODO: add shape to field, check for combinations, etc
				}
			}
		}
	};

	this.moveLeft=function(){
		if(running){
			currentShape.x-=1;
			if(this.shapeCollides()){
				currentShape.x+=1;
			}else{
				//TODO: dispatch event here
			}
		}
	}
}

var sl=new shape.ShapeList(new color.ColorList(3));
var s=sl.nextShape();
s.pos.x+=10;
console.log(s.x);

var blocks=[];
/*for(let i=0; i<7; i++){
	let img=new Image(16, 16);
	img.src=("assets/block"+i+".png");
	console.log(img);
	blocks[i]=img;
}*/

var canvas;

var block=new shape.Block(10, 10, 5);
console.log(block);
console.log(block.add({x: 10, y: 15}));
block.turnCW();
console.log(block);
block.turnCCW();
console.log(block);

document.addEventListener("DOMContentLoaded", function(){
	canvas=document.getElementById("canvas");

	var blockNames=[0, 1, 2, 3, 4, 5, 6].map(function(e){
		return "assets/block"+e+".png";
	});

	/*var img=new Image();
	img.src="assets/block2.png";
	img.onload=function(){
		canvas.getContext("2d").drawImage(img, 20, 20);
	};*/

	Promise.all(blockNames.map(function(e){
		return res.loadImage(e);
	})).then(function(result){
		result.map(function(e){
			console.log(e);
			var context=canvas.getContext("2d");
			context.drawImage(e, 20, 20);
		});
	}).catch(function(err){
		console.log("error: "+err);
	});
});

/**
 * Key press listener
 */
document.addEventListener("keypress", function(e){

	if(e.key=="a"){ //move left

	}else if(e.key=="s"){ //move down

	}else if(e.key=="d"){ //move right

	}else if(e.key=="q"){ //rotate CCW

	}else if(e.key=="r"){ //rotate CW

	}else if(e.key==" "){ //pause/unpause

	}
});




