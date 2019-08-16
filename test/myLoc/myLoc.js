var ourCoords = {
	latitude:47.624851,
	longitude:-122.52099
};

window.onload = getMyLocation;

function getMyLocation() {
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(displayLocation, displayError);
	} else {
		alert("oops");
	}
}

function displayLocation(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	
	var div = document.getElementById("location");
	div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;
	
	var km = computeDistance(position.coords, ourCoords);
	var distance = document.getElementById("distance");
	distance.innerHTML = "You are " + km + " km frome the WickedlySmart HQ";

	showMap(position.coords);
}

function displayError(error) {
	var errorTypes = {
		0: "Unknown error",
		1: "Permission denied",
		2: "Position is not available",
		3: "Request times out"
	};
	
	var errorMessage = errorTypes[error.code];
	if(error.code == 0 || error.code == 2) {
		errorMessage = errorMessage + ":" + error.message;
	}
	var div = document.getElementById("location");
	div.innerHTML = errorMessage;
}

function computeDistance(startCoords, destCoords) {
	var startLatRads = degreeToRadians(startCoords.latitude);
	var startLongRads = degreeToRadians(startCoords.longitude);
	var destLatRads = degreeToRadians(destCoords.latitude);
	var destLongRads = degreeToRadians(destCoords.longitude);
	
	var Radius = 6371;
	
	var distance = Radius * Math.acos(Math.sin(startLatRads)*Math.sin(destLatRads)+Math.cos(startLatRads)*Math.cos(destLatRads)*Math.cos(startLongRads-destLongRads));
	return distance;
	
}

function degreeToRadians(degrees) {
	var radians = (degrees * Math.PI)/180;
	return radians;
}

function showMap(coords) {
	var bdMap = new BMap.Map("map");
	var bdPoint = new BMap.Point(coords.latitude, coords.longitude);
	bdMap.centerAndZoom(bdPoint, 5);
	bdMap.addControl(new BMap.NavigationControl());
	var marker = new BMap.Marker(bdPoint);        // 创建标注    
	bdMap.addOverlay(marker); 
	var opts = {    
    	width : 250,     // 信息窗口宽度    
    	height: 100,     // 信息窗口高度    
    	title : "Hello"  // 信息窗口标题   
	}    
	var infoWindow = new BMap.InfoWindow("World", opts);  // 创建信息窗口对象    
	bdMap.openInfoWindow(infoWindow, bdMap.getCenter());      // 打开信息窗口  
}


