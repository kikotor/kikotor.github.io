			
var person=prompt("输入进校或出校","");
if (person!=null && person=="进校")
{
 	window.location.href='in.html';
} 
else if(person=='出校')
{
	window.location.href='out.html';
}
else{
	alert('输入错误，请重新输入');
}
