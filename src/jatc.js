var util=require("./util.js");
var color=require("./color.js");
var shape=require("./shape.js");
var res=require("./res.js");

function Jatc(width, height, shapeList, renderCallback){
	this.width=width;
	this.height=height;
	this.field=[];

	for(let i=0; i<width; i++){
		this.field[i]=[];
		for(let j=0; j<height; j++){
			this.field[i][j]=-1;
		}
	}

	this.shapeList=shapeList;
	this.currentShape=shapeList.nextShape();

	this.running=false;

	this.score=0;
	this.reqMillis=100;

	this.renderCallback=renderCallback;
	
	this.shapeCollides=function(){
		var points=this.currentShape.getGlobalBlocks();
		
		for(let i=0; i<points.length; i++){
			let currentPoint=points[i];
			
			if(currentPoint.x<0 || currentPoint.x>=this.width){
				return true;
			}else if(currentPoint.y<0 || currentPoint.y>this.height){
				return true;
			}else if(this.field[currentPoint.x][currentPoint.y]!=-1){
				return true;
			}

		}
		
		return false;
	};

	this.update=function(){

		this.currentShape.y+=1;

		if(this.shapeCollides()){
			this.currentShape.y-=1;
			var blocks=this.currentShape.getGlobalBlocks();
			for(let i=0; i<blocks.length; i++){
				let b=blocks[i];
				this.field[b.x][b.y]=b.color;
			}

			this.currentShape=this.shapeList.nextShape();
		}

		this.renderCallback();
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

var blocks=[];

var canvas;
var jatc;

document.addEventListener("DOMContentLoaded", function(){
	canvas=document.getElementById("canvas");

	//load the assets
	var blockNames=[0, 1, 2, 3, 4, 5, 6].map(function(e){
		return "assets/block"+e+".png";
	});

	Promise.all(blockNames.map(function(e){
		return res.loadImage(e);
	})).then(function(result){
		blocks=result;
		jatc=new Jatc(10, 25, new shape.ShapeList(new color.ColorList(3)), render);
	})/*.catch(function(err){
		console.log("error: "+err);
	})*/;
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
		jatc.running=!jatc.running;

		console.log(jatc.running);

		if(jatc.running){
			setTimeout(update, jatc.reqMillis);
		}
	}
});

var render=function(){
	canvas.getContext("2d").clearRect(0, 0, 16*jatc.width, 16*jatc.height);

	for(let x=0; x<jatc.width; x++){
		for(let y=0; y<jatc.height; y++){
			var color=jatc.field[x][y];
			if(color!=-1){
				canvas.getContext("2d").drawImage(blocks[color], 16*x, 16*y);
			}
		}
	}

	jatc.currentShape.getGlobalBlocks().forEach(function(b){
		canvas.getContext("2d").drawImage(blocks[b.color], 16*b.x, 16*b.y);
	});
};

var update=function(){
	jatc.update();
	if(jatc.running){
		setTimeout(update, jatc.reqMillis);
	}
};


