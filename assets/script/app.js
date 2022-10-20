const iconFaqs = document.querySelectorAll(".faq-card")
const hide = document.querySelector(".hide")
console.log()
console.log(iconFaqs)
let isActive = false

for (i = 0; i < iconFaqs.length; i++) {
    const element = iconFaqs[i]
    let plus = element.children[0].children[1]
    let faqHide = element.children[1]
    console.log(element.children[1])
    // console.log(element.children[0].children[1])
    plus.addEventListener("click", showDropDown)~

    function showDropDown() {
        if (isActive == false) {
            isActive = true;
            faqHide.classList.replace("hide", "show")
            plus.children[0].classList.replace("fa-plus", "fa-minus")
        } else {
            isActive = false
            faqHide.classList.replace("show", "hide")
            plus.children[0].classList.replace("fa-minus", "fa-plus")
        }
    }
}

