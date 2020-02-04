//First Slide images
  	var slider_content = document.getElementById('box');

  
    var image = ['img/a','img/b', 'img/c', 'img/d','img/e'];

    var i = image.length;
    function nextImage(){
    	if (i<image.length) {
    		i= i+1;
    	}else{
    		i = 1;
    	}
    	  slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
    }
    function prewImage(){

    	if (i<image.length+1 && i>1) {
    		i= i-1;
    	}else{
    		i = image.length;
    	}
    	  slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";

    }
  setInterval(nextImage , 2000);
  


  //Validation javascript
  var x = document.getElementById("login");
            var y = document.getElementById("register");
            var z = document.getElementById("btn");

            function register(){
                x.style.left = "-400px";
                y.style.left = "50px";
                z.style.left = "110px";
            }
            function login(){
                x.style.left = "50px";
                y.style.left = "450px";
                z.style.left = "0";
            }
  