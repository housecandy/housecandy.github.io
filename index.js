window.onload = function() {
	var clearLoading = document.getElementById("page_loading");
	clearLoading.classList.add("js_hidden");
	
	var navList = document.getElementById("nav_list");
  	if(navList.classList.contains("js_open")) {
		navList.classList.remove("js_open");
	}
    
    
    window.onresize = function() {
    	if (window.innerWidth > 736) {
    		if(navList.classList.contains("js_open")) {
				navList.classList.remove("js_open");
			}
    	}
    };

    window.onscroll = function() {
    	var t = document.documentElement.scrollTop || document.body.scrollTop;
    	var topBack = document.getElementById("top");
    	if (t > 0) {
    		if(!topBack.classList.contains("js_scroll")) {
    			topBack.classList.add("js_scroll")
    		} 
    	}
    	if (t == 0) {
    		if(topBack.classList.contains("js_scroll")) {
    			topBack.classList.remove("js_scroll");
    		}
    	}
    }
  
    
	var navButton = document.getElementById("nav_btn");
	navButton.onclick = showNav;
}

function showNav() {
	var navList = document.getElementById("nav_list");
	if(navList.classList.contains("js_open")) {
		navList.classList.remove("js_open");
	} else {
		navList.classList.add("js_open");
	}
}