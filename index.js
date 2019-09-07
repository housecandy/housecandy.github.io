window.onload = function() {
	setTimeout("jsHidden()", 1000);
}

function jsHidden() {
	var clearLoading = document.getElementById("page_loading");
	clearLoading.classList.add("js_hidden");
}