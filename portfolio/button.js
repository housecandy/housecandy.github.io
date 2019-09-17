window.onload = function() {
	var timer = false;

    function onScroll() {
        if(!timer) {
            requestAnimationFrame(realScroll);
            timer = true;
        }
    }

    function realScroll() {
    // 你想执行的onscroll事件
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
        timer = false;
    }

    window.addEventListener("scroll", onScroll,false);
  
}
