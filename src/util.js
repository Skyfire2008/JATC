

var permute=function(array){
	for(var i=0; i<array.length; i++){
		var pos=i+Math.floor(Math.random()*(array.length-i));
		var temp=array[pos];
		array[pos]=array[i];
		array[i]=temp;
	}
};

module.exports={
	permute: permute
};