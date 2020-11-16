/*function sayhi()
{
		alert("Hello My Leader");
}
sayhi();
*/
function addNumbers() 
{
    var val1 = parseInt(document.getElementById("xx").value);
    var val2 = parseInt(document.getElementById("yy").value);
    var ansD = document.getElementById("answer");
    ansD.value = val1 + val2;
}
addNumbers();
/*function addImage()
{

	 var img1=(document.getElementById('1.jpg').value);
	var img2=(document.getElementById('2.jpg').value);
	var img3= (document.getElementById('3.jpg').value);
	var img4=(document.getElementById('4.jpg').value);
	var imges= document.getElementById("show");
	imges.value=img1,img2,img3,img4;
}
addImage();
*/
/*document.getElementById("pic").innerHTML='<img class="imgt" src="imge/an.jpg" />';
document.getElementById("show").innerHTML='<img class="imgt" src="imge/Gr.jpg" />';
document.getElementById("show").innerHTML='<img class="imgt" src="imge/com.jpg" />';
*/

function want2(){

    var an = document.getElementById("num").value ;
    if(an!=null){
        an= an.toUpperCase();
    }
    switch (an) {
        
        case '1':
            document.getElementById("pic").innerHTML = '<img src="imge/an.jpg" class="imgt">';
            break;

        case '2':
            document.getElementById("pic").innerHTML = '<img src="imge/Gr.jpg" class="imgt">';
            break;

        case '3':
            document.getElementById("pic").innerHTML = '<img src="imge/com.jpg"class="imgt>';
            break;

        case '4':
            document.getElementById("pic").innerHTML = '<img src="imge/pro.jpg "class="imgt">';
            break;

        default:
            document.getElementById("pic").innerText = "sorry not found";
            break;
    }
}
