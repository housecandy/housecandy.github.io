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

function upgrateTweets(tweets) {
	var tweetsSelection = document.getElementById("tweets");

	for (var i = 0; i < tweets.length; i++) {
		tweet = tweets[i];
		var option = document.createElement("option");
		option.text = tweet.text;
		option.value = tweet.text.replace("\"", "'");

		tweetsSelection.options.add(option);
	}

	tweetsSelection.selectedIndex = 0;
}