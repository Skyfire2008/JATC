
var loadImage=function(path){
	return new Promise(function(resolve, reject){
		var img=new Image();
		img.onload=resolve.call(null, img);
		img.onerror=reject.call(null, img);
		img.src=path;
	});
};

module.exports={
	loadImage: loadImage
};