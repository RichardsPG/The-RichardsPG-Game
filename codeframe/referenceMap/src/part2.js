var _board = document.getElementById("board");

var str = "";

for(var i=0;i<17;i++){
	str += "<div>"
	for(var j=0;j<22;j++){
		if(i>=2&&j>=1&&j<=20)
			str+="<div class=\"a\" id=\"t"+((i-2)*20+(j-1))+"\" onclick=\"lick("+((i-2)*20+(j-1))+")\"></div>";
		else
			str+="<div class=\"c\"></div>";
	}
	str += "<div class=\"b\"></div></div>";
}

_board.innerHTML = str;

function lick(n){
	if(document.getElementById("t"+n).style.background == "red")
		document.getElementById("t"+n).style.background = "#66ccff";
	else
		document.getElementById("t"+n).style.background = "red";
	document.getElementById("X1").innerHTML = (n%20)+" "+Math.floor(n/20);
	document.getElementById("X2").innerHTML = n;
	//document.getElementById("X3").innerHTML = Math.floor(n/20)+" "+(n%20);
}