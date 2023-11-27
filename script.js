var swiper = new Swiper (".myswiper-1",{
    slidesPerview:1,
    spaceBetween: 10,
    loop:true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
});

var swiper = new Swiper (".myswiper-2",{
    slidesPerview:3,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWhitBlank:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerview:1,
        },
        520:{
            slidesPerview:2,
        },
        950:{
            slidesPerview:3,
        }
    }
    
});

const tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input){

    input.addEventListener("change", function() {
        const id = input.ariaValueMax;
        const thiswiper = document.getElementById("swiper"+ id);
        thiswiper.swiper.update();
    })
});

