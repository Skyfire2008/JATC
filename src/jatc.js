var util=require("./util.js");
var color=require("./color.js");

var input=[1, 2, 3, 4, 5, 6, 7, 8];
util.permute(input)
console.log(input);

var cl=new color.ColorList(3);
console.log(cl.nextNColors(8));