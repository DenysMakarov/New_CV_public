let navHeaderBtn = Array.from(document.getElementsByClassName("nav_head"));
let navNumbersBtn = Array.from(document.getElementsByClassName("head_p"));
let countSlide = navHeaderBtn.length;


for (let i = 0; i < navHeaderBtn.length; i++) {
    navHeaderBtn[i].setAttribute("data-number_btn", i);
    navHeaderBtn[i].style.animationDelay = i/15+"s";

    navNumbersBtn[i].style.animationDelay = i/10+0.5+"s"
}


// setTimeout(function () {
//     navHeaderBtn[0].classList.add("activeEl");
// },500);

navHeaderBtn.map((el) => {
    el.addEventListener("mouseover", function () {
        for (let i = 0; i < navHeaderBtn.length; i++) {
            navHeaderBtn[i].classList.remove("activeEl")
        }
        el.classList.add("activeEl");
    });
});

document.onwheel = function (e) {
    let speed = e.deltaY;
    (speed > 0) ? countSlide = countSlide + 1 : countSlide = countSlide;
    (speed < 0) ? countSlide = countSlide - 1 : countSlide = countSlide;
    (countSlide == navHeaderBtn.length + 1) ? countSlide = 0 : countSlide = countSlide;
    (countSlide == -1) ? countSlide = navHeaderBtn.length : countSlide = countSlide;
    navHeaderBtn.map((el)=>{
        // el.classList.remove("activeEl");
        (el.dataset.number_btn == countSlide) ? el.classList.add("activeEl") : el.classList.remove("activeEl")
    })
};