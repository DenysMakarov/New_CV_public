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



function contactPanel(){
    const arrContacts = Array.from(document.getElementsByClassName("icon_item"))
    const footerTextInfo = document.getElementById("footer_text_inform")

    arrContacts.map((el)=>{
        el.addEventListener("mouseover", (e)=>{
            console.log(e.target.dataset.info)
            footerTextInfo.innerText = e.target.dataset.info;
            footerTextInfo.style.opacity = "0";
            footerTextInfo.style.animationName = "none";
            setTimeout(()=>{
                footerTextInfo.style.animationName = "footer_block_mouseover_animation"
            },0)
        })

    })
}
contactPanel()

////  game cards  ////
function cards_item_first(countSlide) {
    let cards = Array.from(document.getElementsByClassName("card"));
    let countDelay = 1.1;

    if (countSlide === 0) {
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
    } else if (countSlide !== 0) {
        cards.map((el) => {
            el.style.transitionDelay = 0 + "s";
            el.classList.remove("activeCards");
            el.classList.add("deactiveCards");
            el.style.bottom = 170 + "px"
        })
    }
}

function sneakers_gadgets_appear() {
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

function restaurant_gadgets_appear() {
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

function gitAppear() {
    let gitArr = Array.from(document.getElementsByClassName("git"));
    let countMarginTop = 0

    gitArr.map((el) => {
        el.style.marginTop = countMarginTop + "px";
        countMarginTop = countMarginTop + 85
    })
}
cards_item_first(countSlide);
sneakers_gadgets_appear();
restaurant_gadgets_appear();
gitAppear()


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
            sneakers_gadgets_appear();
            restaurant_gadgets_appear();
        });
    });
}


function changeOnWheel() {
    navHeaderBoxes.onwheel = function (e) {
        let speed = e.deltaY;
        (speed > 0) ? countSlide = countSlide + 1 : countSlide = countSlide;
        (speed < 0) ? countSlide = countSlide - 1 : countSlide = countSlide;
        (countSlide >= navHeaderBtn.length) ? countSlide = 0 : countSlide = countSlide;
        (countSlide == -1) ? countSlide = navHeaderBtn.length - 1 : countSlide = countSlide;
        activeElements();
        cards_item_first(countSlide);
        sneakers_gadgets_appear();
        restaurant_gadgets_appear();
    };
}

changeSlideOnClick();
changeOnWheel();


function links() {
    const gameLink = document.getElementById("linkOfGame");
    const sliderLink = document.getElementById("linkOfSlider");
    const sneakersLink = document.getElementById("linkOfSneakers");
    const restaurantLink = document.getElementById("linkOfRestaurant");
    const reactLink = document.getElementById("linkOfReact");
    // const galleryLink = document.getElementById("linkOfGallery");


    const gameLinkTitle = document.getElementById("link_title_game");
    const sliderLinkTitle = document.getElementById("link_title_slider");
    const sneakersLinkTitle = document.getElementById("link_title_store");
    const restaurantLinkTitle = document.getElementById("link_title_restaurant");
    const reactLinkTitle = document.getElementById("link_title_react");
    // const galleryLinkTitle = document.getElementById("link_title_gallery");

    const gitGame = document.getElementById("gitGame");
    const gitSlider = document.getElementById("gitSlider");
    const gitSneakers = document.getElementById("gitSneakers");
    const gitRestaurant = document.getElementById("gitRestaurant");
    const gitReact = document.getElementById("gitReact");
    // const gitGallery = document.getElementById("gitGallery");



    const arrOfLinks = [gameLink, sliderLink, sneakersLink, restaurantLink, reactLink, gitGame, gitSlider, gitSneakers, gitRestaurant, gitReact, gameLinkTitle, reactLinkTitle, restaurantLinkTitle, sneakersLinkTitle, sliderLinkTitle];
    arrOfLinks.map((el) => {
        el.addEventListener("click", function () {
            switch (el.id) {
                case 'linkOfGame':
                case 'link_title_game':
                    document.location = "https://DenysMakarov.github.io/New_CV_Game/dist/index.html";
                    break;
                case 'linkOfSlider':
                case 'link_title_slider':
                    // alert("This is library of MagicSlider which had been developed by me for 'Codester' market. This link from www.codester.com where library is selling now. This slider works as a library. You can connect it in your personal code where you want. Instructions included into folder 'LIBRARY' of Git link");
                    // document.location = "http://www.codester.com/index.php?url=items/preview/20183/magicslider-javascript-css-html";
                    document.location = "https://DenysMakarov.github.io/New_CV_slider/dist/index.html"
                    break;
                case 'linkOfSneakers':
                case 'link_title_store':
                    document.location = "https://DenysMakarov.github.io/New_CV_SneakersShop/dist/index.html";
                    break;
                case 'linkOfRestaurant':
                case 'link_title_restaurant':
                    document.location = "https://DenysMakarov.github.io/New_CV_restaurant/dist/";
                    break;
                case 'linkOfReact':
                case 'link_title_react':
                    document.location = "https://DenysMakarov.github.io/New_CV_React/dist/#/";
                    break;

                // case 'linkOfGallery':
                // case 'link_title_gallery':
                //     document.location = "https://DenysMakarov.github.io/DevIT_img_gallary/dist/";
                //     break;

                case 'gitGame':
                    document.location = "https://github.com/1985MakarovDenis1985/New_CV_Game";
                    break;
                case 'gitSlider':
                    // alert("This slider works as a library. You can connect it in your personal code where you want. Instructions included into folder 'LIBRARY' of Git link");
                    document.location = "https://github.com/DenysMakarov/New_CV_slider";
                    // document.location = "https://DenysMakarov.github.io/New_CV_slider/dist/index.html"
                    break;
                case 'gitSneakers':
                    document.location = "https://github.com/DenysMakarov/New_CV_SneakersShop";
                    break;
                case 'gitRestaurant':
                    document.location = "https://github.com/DenysMakarov/New_CV_restaurant";
                    break;
                case 'gitReact':
                    document.location = "https://github.com/DenysMakarov/CV_FrontEnd_WRC";
                    break;
                // case 'gitGallery':
                //     document.location = "https://github.com/DenysMakarov/DevIT_img_gallary";
                //     break;
            }
        })
    })
}

links();

// http://www.codester.com/index.php?url=items/preview/20183/magicslider-javascript-css-html



