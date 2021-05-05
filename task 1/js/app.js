function random(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}
var n =  random(7,15); 
var arr=[];

for(var i = 0; i<n;i++) {
	arr.push(random(1,10));
}
var sum=[];
var x=0;
var y=0;
for (var i = 0; i < arr.length; i++) {
	 x = arr[i];
	 y = arr[i+1];
	if(x<y){
		sum.push(x);
	}
	else(console.log('ytn'))
   
}
console.log( "Массив-" + arr);
console.log(sum);
console.log(x);
console.log(y);






