// let date = new Date();
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());

var date = new Date();
document.write(date.toLocaleDateString());
document.write('<br>');
var b = prompt('Enter a Awake');
date.setHours(b);
if(date.getHours()>0 && date.getHours()<12){
    document.write("Good Morning To All");	
	document.write('<br>');
}
else if(date.getHours()>=12 && date.getHours()<=16){
	document.write("Good Afternoon To All");	
	document.write('<br>');
}
else if(date.getHours()>16 && date.getHours()<=18){
	document.write("Good Evening To All");
	document.write('<br>');
}
else if(date.getHours()>18 && date.getHours()<=24){
		document.write("Good Night To All");
	document.write('<br>');
}






