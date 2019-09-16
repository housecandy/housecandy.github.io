window.onload = function() {
	

    window.onscroll = function() {
    	var t = document.documentElement.scrollTop || document.body.scrollTop;
    	var fixTop = document.getElementById("fix_top");
    	if (t > 0) {
    		if(!fixTop.classList.contains("js_scroll")) {
    			fixTop.classList.add("js_scroll");
    		} 
    	}

    	if (t == 0) {
    		if(fixTop.classList.contains("js_scroll")) {
    			fixTop.classList.remove("js_scroll");
    		}
    	}
    }
  
}
