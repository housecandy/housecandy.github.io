window.onload = function(){

	var botton = document.getElementById("previewButton");

	botton.onclick = previewHandler;

};



function previewHandler() {

	var canvas = document.getElementById("tshirtCanvas");

	var context = canvas.getContext("2d");

	fillBackgroundColor(canvas, context);



	var selectObj = document.getElementById("shape");

	var index = selectObj.selectedIndex;

	var shape = selectObj.options[index].value;



	if(shape == "squares") {

		for(var squares = 0; squares <20; squares++) {

			drawSquare(canvas, context);

		}

	}



	if(shape == "circles") {

		for(var circles = 0; circles <20; circles++) {

			drawCircle(canvas, context);

		}

	}

	drawText(canvas, context);

}



function fillBackgroundColor(canvas, context) {

	var selectObj = document.getElementById("backgroundColor");

	var index = selectObj.selectedIndex;

	var bgColor = selectObj.options[index].value;

	context.fillStyle = bgColor;

	context.fillRect(0,0,600,200);

}



function drawSquare(canvas, context) {

	var w = Math.floor(Math.random() * 40);



	var x = Math.floor(Math.random() * canvas.width);

	var y = Math.floor(Math.random() * canvas.height);



	context.fillStyle = "lightblue";

	context.fillRect(x, y, w, w);

}



function drawCircle(canvas, context) {

	var r = Math.floor(Math.random() * 40);



	var x = Math.floor(Math.random() * canvas.width);

	var y = Math.floor(Math.random() * canvas.height);



	context.beginPath();

	context.arc(x,y,r,0,2 * Math.PI, true);

	context.fillStyle = "lightblue";

	context.fill();

}

function drawText(canvas, context) {
	var selectObj = document.getElementById("foregroundColor");
	var index = selectObj.selectedIndex;
	var fgColor = selectObj[index].value;

	context.fillStyle = fgColor;
	context.font = "bold 1em sans-serif";
	context.textAlign = "left";
	context.fillText("I saw this tweet", 20, 40);

	var inputText = document.getElementById("tshirtText");
	context.textAlign = "middle";
	context.fillText(inputText.value, 200, 90);


	context.fillStyle = fgColor;
	context.font = "bold 1em sans-serif";
	context.textAlign = "right";
	context.fillText("and all I got was this shirt", canvas.width-20, canvas.height-30);
}

