const slider = document.getElementById("slider")
const sliderChild = slider.querySelectorAll("div")
const arrowRightBtn = document.getElementById("arrowRightBtn")
const arrowLeftBtn = document.getElementById("arrowLeftBtn")
arrowRightBtn.addEventListener("click", rightBtn)
arrowLeftBtn.addEventListener("click", leftBtn)

let displaySlide = 0

function changeSlide(value) {
    stringValue = value.toString() + "px"
    slider.style.translate = stringValue
    displaySlide = value
    console.log(value);
}


// translate: 0px;
function rightBtn() {

    if (slider.style.translate == "0px") {
        changeSlide(-600)
    }
    else if (slider.style.translate == "-600px") {
        changeSlide(-1200)
    }
    else if (slider.style.translate == "-1200px") {
        changeSlide(-1800)
    }
    else {
        changeSlide(0)
    }

}

function leftBtn() {

    if (slider.style.translate == "0px") {
        changeSlide(-1800)
    }
    else if (slider.style.translate == "-1800px") {
        changeSlide(-1200)
    }
    else if (slider.style.translate == "-1200px") {
        changeSlide(-600)
    }
    else if (slider.style.translate == "-600px") {
        changeSlide(0)
    }

}

/* function ceckActiveDiv() {
    if (displaySlide == 0) {
        sliderChild[0].style.display = "block"
        sliderChild[1].style.display = "none"
        sliderChild[2].style.display = "none"
        sliderChild[3].style.display = "none"
    }
    else if (displaySlide == -600) {
        sliderChild[0].style.display = "none"
        sliderChild[1].style.display = "block"
        sliderChild[2].style.display = "none"
        sliderChild[3].style.display = "none"
    }
    else if (displaySlide == -1200) {
        sliderChild[0].style.display = "none"
        sliderChild[1].style.display = "none"
        sliderChild[2].style.display = "block"
        sliderChild[3].style.display = "none"
    }
    else if (displaySlide == -1800) {
        sliderChild[0].style.display = "none"
        sliderChild[1].style.display = "none"
        sliderChild[2].style.display = "none"
        sliderChild[3].style.display = "block"
    }
}
 */