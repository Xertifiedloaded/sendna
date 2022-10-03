const iconPlus = document.querySelector(".fa-light")
const hide = document.querySelector(".hide")
const show = document.querySelector(".show")
let isActive = false
function showDropDown() {
    if (isActive == false) {
        isActive = true
        hide.classList.replace("hide", "show")
    } else {
        isActive = false
        hide.classList.replace("show", "hide")
    }


}
iconPlus.addEventListener("click", showDropDown)


let sliderNew = document.querySelector(".wallet")
let images = new Array(
    "assets/images/mobile-1.png",
    "assets/images/mobile-2.png",
    "assets/images/mobile-3.png",
    "assets/images/mobile-4.png",
)
length = images.length
let i = 0
function slide() {
    if (i > length - 1) {
        i = 0
    }
   
    sliderNew.src = images[i]
    i++
    setTimeout("slide()", 3000)
}
