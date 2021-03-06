var util=require("./util.js");

function ColorList(colorNum){
	this.colorNum=colorNum;
	this.colors=this.generateColors();
}

/**
 * Generates a new random list of colors
 */
ColorList.prototype.generateColors=function(){
	let colors=[];
	for(let i=0; i<this.colorNum; i++){
		colors.push(i);
	}
	util.permute(colors);
	return colors;
};

ColorList.prototype.nextColor=function(){
	if(this.colors.length<=0){
		this.colors=this.generateColors();
	}

	return this.colors.shift();
};

/**
 * Gets a certain number of next colors as an array
 * @param num					number of colors to get
 */
ColorList.prototype.nextNColors=function(num){
	var result=[];
	for(let i=0; i<num; i++){
		result.push(this.nextColor());
	}
	return result;
};

module.exports={
	ColorList: ColorList
};