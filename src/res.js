
var loadImage=function(path){
	return new Promise(function(resolve, reject){
		var img=new Image();
		img.onload=resolve.bind(null, img);
		img.onerror=reject.bind(null, img);
		img.src=path;
	});
};

module.exports={
	loadImage: loadImage
};