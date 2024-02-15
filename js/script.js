// Splash
document.addEventListener('DOMContentLoaded', function () { // Menunggu konten halaman dimuat
    setTimeout(() => {
        document.getElementById('splash').classList.toggle('fade');
    }, 800);
});

// Cursor
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');
window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = posX + 'px';
    cursorDot.style.top = posY + 'px';
    cursorDot.style.zIndex = '1000000';
    cursorOutline.style.zIndex = '1000000';

    cursorOutline.animate({
        left: posX + 'px',
        top: posY + 'px',
    }, { duration: 200, fill: "forwards" });


});

// 
let bg = document.getElementById("bg");
let dkm = document.getElementById("dkm");

let text = document.querySelector(".title");
let subtitle = document.querySelector(".subtitle");
let navbar_custom = document.querySelector(".navbar_custom");
let navLinks = document.querySelectorAll(".navLinks a");
let imgNav = document.querySelector(".img img");
let titleNav = document.querySelector(".imgBox span");
// Dep
let boxText = document.querySelectorAll(".text-box");
let boxTextH3 = document.querySelectorAll(".text-box h3");
let boxTextP = document.querySelectorAll(".text-box p");
let line = document.querySelector(".timeline");
let arrowLeft = document.querySelectorAll(".left-container-arrow");
let arrowRight = document.querySelectorAll(".right-container-arrow");

window.addEventListener('scroll', function () {
    var value = window.scrollY;

    bg.animate({
        top: value * 0.2 + 'px',
    }, { duration: 100, fill: "forwards" });
    dkm.animate({
        right: 80 + -value * 0.5 + 'px',
    }, { duration: 500, fill: "forwards" });
    text.animate({
        left: -value * 0.5 + 'px',
    }, { duration: 500, fill: "forwards" });
    subtitle.animate({
        left: -value * 0.5 + 'px',
    }, { duration: 500, fill: "forwards" });

    console.log(value);
    // 
    if (value > 250) {
        navbar_custom.style.backdropFilter = 'none';
        navbar_custom.style.background = '#fff';
        navbar_custom.style.height = '70px';
        navbar_custom.style.boxShadow = ' rgba(149, 157, 165, 0.2) 0px 8px 24px';
        navbar_custom.style.zIndex = '100';
        document.querySelector('.kegiatanBoxLink').style.border = '2px solid #219855';
        document.querySelector('.kegiatanBoxLink').style.background = 'white';
        navLinks.forEach(function (a) {
            a.style.color = '#34B96E';
        });
        imgNav.style.filter = 'brightness(100%)';
        titleNav.style.color = '#34B96E';
    } else {
        navbar_custom.style.boxShadow = 'none';
        navbar_custom.style.height = '80px';
        navbar_custom.style.backdropFilter = 'blur(2px)';
        navbar_custom.style.background = 'transparent';
        document.querySelector('.kegiatanBoxLink').style.border = '2px solid white';
        document.querySelector('.kegiatanBoxLink').style.background = '#ffae0c';
        navLinks.forEach(function (a) {
            a.style.color = '#fff';
        });
        imgNav.style.filter = 'brightness(0%) invert()';
        titleNav.style.color = '#fff';
    }

    // 
    if (value > 500) {
        line.classList.add('is-active');
    }

    // 
    if (value > 1000) {
        boxText.forEach(function (a) {
            a.style.background = '#219855';
        });
        boxTextH3.forEach(function (a) {
            a.style.color = '#fff';
        });
        boxTextP.forEach(function (a) {
            a.style.color = '#fff';
        });

        line.style.setProperty('--line-background-color', '#219855');

        arrowLeft.forEach(function (a) {
            a.style.borderLeft = '15px solid #219855';
        });
        arrowRight.forEach(function (a) {
            a.style.borderRight = '15px solid #219855';
        });
        document.body.style.background = 'white';
    }
    else {
        boxText.forEach(function (a) {
            a.style.background = '#fff';
        });
        boxTextH3.forEach(function (a) {
            a.style.color = '#333';
        });
        boxTextP.forEach(function (a) {
            a.style.color = '#333';
        });
        line.style.setProperty('--line-background-color', '#fff');

        arrowLeft.forEach(function (b) {
            b.style.borderLeft = '15px solid #fff';
        });
        arrowRight.forEach(function (c) {
            c.style.borderRight = '15px solid #fff';
        });
        document.body.style.background = '#219855';
    }

    // if (value > 2600) {
    //     document.querySelector('.parallax').querySelectorAll('use').forEach(function (wave, index) {
    //         let opacity = [0.7, 0.5, 0.3, 1];
    //         wave.setAttribute('fill', `rgba(255, 255, 255, ${opacity[index]})`);
    //     });
    //     document.querySelector('footer').style.background = 'white';
    //     document.querySelectorAll('.footLinks ul').forEach(function (c) {
    //         c.style.color = '#ffae0c';
    //     });
    //     document.querySelectorAll('.footLinks ul li a').forEach(function (c) {
    //         c.style.color = '#ffae0c';
    //     });
    // }
    // else {
    //     document.querySelector('.parallax').querySelectorAll('use').forEach(function (wave, index) {
    //         wave.setAttribute('fill', `rgba(33, 152, 85, ${index === 3 ? 1 : 0.7})`);
    //     });
    //     document.querySelector('footer').style.background = '#219855';
    //     document.querySelectorAll('.footLinks ul').forEach(function (c) {
    //         c.style.color = '#fff';
    //     });
    //     document.querySelectorAll('.footLinks ul li a').forEach(function (c) {
    //         c.style.color = '#fff';
    //     });
    // }
})



// Departemen
document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll(".container-body");

    function showContainers() {
        containers.forEach((container, index) => {
            const rect = container.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8 && rect.bottom >= 0) {
                setTimeout(() => {
                    container.style.opacity = "1";
                    container.style.transform = "translateY(0)";
                }, index * 200);
            }
        });
    }

    window.addEventListener("scroll", showContainers);
    showContainers();
});




// Carrosel
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(() => { next.click() }, 8000);
function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { next.click() }, 8000);
}
dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    })
})
window.onresize = function (event) {
    reloadSlider();
};


