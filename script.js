var ClassVar = document.querySelector(".mini-nav-ul")
var ButtonVar = document.querySelector(".toggle-js")
var miniNAv = document.querySelector(".mini-nav")

function show() {
    if (ClassVar.style.transform == "translateY(-600px)") {
        ClassVar.style.transition = "all 1s";   
        ClassVar.style.transform = "translateY(0px)";
        ClassVar.style.zIndex = "111111111111111111";
        ButtonVar.innerHTML = "✖"
        miniNAv.style.height = "500px"
    }

    else {
        ClassVar.style.transform = "translateY(-600px)"
        ButtonVar.innerHTML = "&#9776"
        miniNAv.style.height = "80px"
    }
}


var SliderVar = document.querySelector(".slide-card")
var SliderVar_2 = document.querySelector(".slide-card-2")

function slider_1(){
    SliderVar.style.justifyContent = "flex-start"
    SliderVar_2.style.justifyContent = "flex-start"
    SliderVar.style.transition = "all 1s linearē";
}

function slider_2(){
    SliderVar.style.justifyContent = "center"
    SliderVar_2.style.justifyContent = "center"
    SliderVar.style.transition = "all 1s";   
}

function slide_3(){
    SliderVar.style.justifyContent = "end"
    SliderVar_2.style.justifyContent = "end"
    SliderVar.style.transition = "all 1s";   
}