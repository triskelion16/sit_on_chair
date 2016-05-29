document.addEventListener("DOMContentLoaded", function(){
    
    /***** Slider *****/
    
    var nextPictureButton = document.querySelector(".click_right");
    var prevPictureButton = document.querySelector(".click_left");
    var allPictures = document.querySelectorAll(".chair");
    var index = 0;
    
    allPictures[index].classList.add("visible");
    
    nextPictureButton.addEventListener("click", nextPic);
    prevPictureButton.addEventListener("click", prevPic);
    
    function nextPic(event) {
        allPictures[index].classList.remove("visible");
        index++;
        
        if(index >= allPictures.length) index = 0;
        
        allPictures[index].classList.add("visible");
    }
    
    function prevPic(event) {
        allPictures[index].classList.remove("visible");
        index--;
        
        if(index < 0) index = allPictures.length-1;
        
        allPictures[index].classList.add("visible");
    }
    
    /***** Hidden block *****/
    
    var box1 = document.querySelector(".box1");
    var box2 = document.querySelector(".box2");
    var b1 = document.getElementById("b1");
    var b2 = document.getElementById("b2");
    
    box1.addEventListener("mouseover", function(event) {
        b1.classList.add("invisible");
    });
    box2.addEventListener("mouseover", function(event) {
        b2.classList.add("invisible");
    });
    
    box1.addEventListener("mouseout", function(event) {
        b1.classList.remove("invisible");
    });
    box2.addEventListener("mouseout", function(event) {
        b2.classList.remove("invisible");
    });
    
    /***** Drop-down menu *****/
    
    var menuLi = document.querySelectorAll(".header_nav > ul > li");
    
    for(var i=0; i<menuLi.length; i++) {
        menuLi[i].addEventListener("mouseover", mouseover);
        menuLi[i].addEventListener("mouseout", mouseout);
    }
    
    function mouseover(event) {
        var sublist = this.querySelector("ul");
        
        if(sublist !== null) {
            sublist.classList.add("visible");
            console.log("visible");
        }
    }
    
    function mouseout(event) {
        var sublist = this.querySelector("ul");
        
        if(sublist !== null) {
            sublist.classList.remove("visible");
            console.log("invisible");
        }
    }
    
});