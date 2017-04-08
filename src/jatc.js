var util=require("./util.js");
var color=require("./color.js");
var shape=require("./shape.js");

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
	
	/*this.shapeCollides=function(){
		var points=currentShape.getGlobalPoints();
		
		for(let i=0; i<points.length; i++){
			let currentPoint=points[i];
			
			if()
		}
	};*/

	this.moveLeft=function(){
		
	}
}

var sl=new shape.ShapeList(new color.ColorList(3));

var blocks=[];
for(let i=0; i<7; i++){
	let img=new Image(16, 16);
	img.src=("assets/block"+i+".png");
	console.log(img);
	blocks[i]=img;
}

var canvas;

var block=new shape.Block(10, 10, 5);
console.log(block);
console.log(block.add({x: 10, y: 15}));

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




