
function add(){
	var x1=parseInt(document.getElementById("x1").value);
	var x2=parseInt(document.getElementById("x2").value);
	var ans=document.getElementById("ans");
	if(isNaN(x1&&x2))
	{
		document.getElementById("ans").innerHTML="Sorry not a number";
		alert("Fouce on what you write");
		
		}
	else
	{
		ans.innerText= x1+x2;
	}
}
function Func(){
	 var test=prompt();
	document.getElementById("promptp").innerHTML=test;
	
}
function time(){
	var d1= new Date();
	document.getElementById("Date").innerHTML=d1;
}
function color(){
	var c1=document.getElementById("incolor").value;
	var c=document.getElementById("colr").style.backgroundColor=c1;
}
function number(){
	var x =document.getElementById("innum").value;
	for(i=1;i<=x.length;i++)
	{
	
		//document.getElementById("num").innerHTML=i;
	}
	document.getElementById("num").innerHTML=i;
}
var x;
function array(x){
	var s=new Array();
	for(let y=0; y<x;y++)
	{
		s[x] = prompt('type element number ' + (x + 1));
	}
	for (let y = 0; y < s.length; y++) {
        document.getElementById("darr").innerHTML += '<div> ' + ones[index + 1] + ' name is :' + s[y] + ' </div>';
    }
	
}

/*function array(x){
	var s= new Array();
	//var x=parseInt(document.getElementById("inarr").value);
	for(int y=0; y<x;y++)
	{
		s[x] = prompt('type element number ' + (x + 1));
	}
	for (int y = 0; y < s.length; y++) {
        document.getElementById("darr").innerHTML += '<div> ' + ones[index + 1] + ' name is :' + s[y] + ' </div>'
    }

	/*if(isNaN(x))
		{
			confirm("Type valid number");
			alert("not approv");
		}
		else
		{
				for(y=0;y<x;y++){
				}
		}
	for(y=0;y<x;y++)
	{
		document.getElementById("inarr").value;
		if(isNaN(x))
		{
			confirm("Type valid number");
			alert("not approv");
		}
		
		else
		{
				for(y=1;y<=x.length;y++){
			var p=prompt("Enter Thelmetns");
				document.getElementById("parr").innerHTML+="<br>"+"one user: "+p;
				document.getElementById("parr").innerHTML+="<br>"+"second user: "+p;
				document.getElementById("parr").innerHTML+="<br>"+"three user: "+p;
				}
		}
	
}
*/

