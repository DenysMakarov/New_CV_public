let navHeaderBtn = Array.from(document.getElementsByClassName("nav_head"));
let navNumbersBtn = Array.from(document.getElementsByClassName("head_p"));
let sectionBoxes = Array.from(document.getElementsByClassName("section_box"));
let navHeaderBoxes = document.getElementById("header_nav_box");

let countSlide = 0;

for (let i = 0; i < navHeaderBtn.length; i++) {
    navHeaderBtn[i].setAttribute("data-number_btn", i);
    sectionBoxes[i].setAttribute("data-number_section", i);
    navHeaderBtn[i].style.animationDelay = i / 15 + "s";
    navNumbersBtn[i].style.animationDelay = i / 10 + 0.5 + "s"
}


setTimeout(function () {
    sectionBoxes[0].classList.add("section_active");
}, 300);
setTimeout(function () {
    navHeaderBtn[0].classList.add("activeEl");
}, 1000);


////  game cards  ////
function cards_item_first(countSlide) {
    let cards = Array.from(document.getElementsByClassName("card"));
    let countDelay = 1.1;

    if (countSlide == 0) {
        cards.map((el) => {
            el.style.transitionDelay = countDelay + "s";
            countDelay = countDelay - 0.1;
            el.classList.add("activeCards");
            el.style.bottom = -15 + "px";
            el.addEventListener("mouseover", function () {
                el.style.transitionDelay = 0 + "s";
                el.style.bottom = 15 + "px"
            });
            el.addEventListener("mouseout", function () {
                el.style.transitionDelay = 0 + "s";
                el.style.bottom = -15 + "px"
            })
        })
    } else if (countSlide != 0) {
        cards.map((el) => {
            el.style.transitionDelay = 0 + "s";
            el.classList.remove("activeCards");
            el.classList.add("deactiveCards");
            el.style.bottom = 170 + "px"
        })
    }
}

function snikers_gadgets_apear() {
    let ipad = document.getElementById("box_third_ipad");
    let iphone = document.getElementById("box_third_iphone");
    ipad.addEventListener("mouseover", function () {
        ipad.style.transitionDelay = 0 + "s";
        ipad.style.bottom = -1 + "%";
    });
    ipad.addEventListener("mouseout", function () {
        ipad.style.transitionDelay = 0 + "s";
        ipad.style.bottom = -7 + "%";
    });
    iphone.addEventListener("mouseover", function () {
        iphone.style.transitionDelay = 0 + "s";
        iphone.style.bottom = -1 + "%";
    });
    iphone.addEventListener("mouseout", function () {
        iphone.style.transitionDelay = 0 + "s";
        iphone.style.bottom = -7 + "%";
    });


    if (countSlide == 2) {
        ipad.classList.add("box_third_ipad_active");
        iphone.classList.add("box_third_iphone_active")
    } else {
        ipad.classList.remove("box_third_ipad_active");
        iphone.classList.remove("box_third_iphone_active")
    }
}

function restaurant_gadgets_apear() {
    let ipadr = document.getElementById("box_fourth_ipad");
    let iphoner = document.getElementById("box_fourth_iphone");

    ipadr.addEventListener("mouseover", function () {
        ipadr.style.transitionDelay = 0 + "s";
        ipadr.style.bottom = -1 + "%";
    });
    ipadr.addEventListener("mouseout", function () {
        ipadr.style.transitionDelay = 0 + "s";
        ipadr.style.bottom = -7 + "%";
    });
    iphoner.addEventListener("mouseover", function () {
        iphoner.style.transitionDelay = 0 + "s";
        iphoner.style.bottom = -1 + "%";
    });
    iphoner.addEventListener("mouseout", function () {
        iphoner.style.transitionDelay = 0 + "s";
        iphoner.style.bottom = -7 + "%";
    });

    if (countSlide == 3) {
        ipadr.classList.add("box_fourth_ipad_active");
        iphoner.classList.add("box_fourth_iphone_active")
    } else {
        ipadr.classList.remove("box_fourth_ipad_active");
        iphoner.classList.remove("box_fourth_iphone_active")
    }
}

function gitApear() {
    let gitArr = Array.from(document.getElementsByClassName("git"));
    let countMarginTop = 0

    gitArr.map((el) => {
        el.style.marginTop = countMarginTop + "px";
        countMarginTop = countMarginTop + 85
    })
}

cards_item_first(countSlide);
snikers_gadgets_apear();
restaurant_gadgets_apear();
gitApear()

function activeElements() {
    for (let i = 0; i < navHeaderBtn.length; i++) {
        navHeaderBtn[i].classList.remove("activeEl");
        sectionBoxes[i].classList.remove("section_active");
        navHeaderBtn[countSlide].classList.add("activeEl");
        sectionBoxes[countSlide].classList.add("section_active");
    }
}


function changeSlideOnClick() {
    navHeaderBtn.map((el) => {
        el.addEventListener("mouseover", function () {
            countSlide = +el.dataset.number_btn;
            activeElements();
            cards_item_first(countSlide);
            snikers_gadgets_apear();
            restaurant_gadgets_apear();
            gitApear()
        });
    });
}


function chahgeOnWheel() {

    navHeaderBoxes.onwheel = function (e) {
        let speed = e.deltaY;
        (speed > 0) ? countSlide = countSlide + 1 : countSlide = countSlide;
        (speed < 0) ? countSlide = countSlide - 1 : countSlide = countSlide;
        (countSlide >= navHeaderBtn.length) ? countSlide = 0 : countSlide = countSlide;
        (countSlide == -1) ? countSlide = navHeaderBtn.length - 1 : countSlide = countSlide;
        activeElements();
        cards_item_first(countSlide);
        snikers_gadgets_apear();
        restaurant_gadgets_apear();
        gitApear()
    };
}

changeSlideOnClick();
chahgeOnWheel();


function links() {
    let gameLink = document.getElementById("linkOfGame");
    let sliderLink = document.getElementById("linkOfSlider");
    let sneakersLink = document.getElementById("linkOfSnikers");
    let restaurantLink = document.getElementById("linkOfRestaurant");

    let gitGame = document.getElementById("gitGame");
    let gitSlider = document.getElementById("gitSlider");
    let gitSneakers = document.getElementById("gitSneakers");
    let gitRestaurant = document.getElementById("gitRestaurant");


    let arrOfLinks = [gameLink, sliderLink, sneakersLink, restaurantLink, gitGame, gitSlider, gitSneakers, gitRestaurant];
    arrOfLinks.map((el) => {
        el.addEventListener("click", function () {
            switch (el.id) {
                case 'linkOfGame':
                    document.location = "https://1985makarovdenis1985.github.io/New_CV_Game/dist/index.html";
                    break;
                case 'linkOfSlider':
                    alert("This is library of MagicSlider which had been developed by me for 'Codester' market. This link from www.codester.com where library is selling now. This slider works as a library. You can connect it in your personal code where you want. Instructions included into folder 'LIBRARY' of Git link");
                    document.location = "http://www.codester.com/index.php?url=items/preview/20183/magicslider-javascript-css-html";
                    break;
                case 'linkOfSnikers':
                    document.location = "https://1985makarovdenis1985.github.io/New_CV_SneakersShop/dist/index.html";
                    break;
                case 'linkOfRestaurant':
                    document.location = "https://1985makarovdenis1985.github.io/New_CV_restaurant/dist/";
                    break;

                case 'gitGame':
                    document.location = "https://github.com/1985MakarovDenis1985/New_CV_Game";
                    break;
                case 'gitSlider':
                    alert("This slider works as a library. You can connect it in your personal code where you want. Instructions included into folder 'LIBRARY' of Git link");
                    document.location = "https://github.com/1985MakarovDenis1985/New_CV_slider";
                    break;
                case 'gitSneakers':
                    document.location = "https://github.com/1985MakarovDenis1985/New_CV_SneakersShop";
                    break;
                case 'gitRestaurant':
                    document.location = "https://github.com/1985MakarovDenis1985/New_CV_restaurant";
                    break;
            }
        })
    })
}

links();

// http://www.codester.com/index.php?url=items/preview/20183/magicslider-javascript-css-html
// https://1985makarovdenis1985.github.io/CV/game/index.html


