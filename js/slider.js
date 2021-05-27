"use strict";
var imgs = document.querySelectorAll('.wrapper-image');
var dots = document.querySelectorAll('.control-dot');
var isControling = false;
var intervalIdx = 0;
var ticks = 0;
var setActive = function (index) {
    // Dots
    dots.forEach(function (dot) {
        dot.classList.remove('dot-active');
    });
    dots[index].classList.add('dot-active');
    // Images
    imgs.forEach(function (img) {
        img.classList.remove('image-active');
    });
    imgs[index].classList.add('image-active');
};
dots.forEach(function (dot) {
    dot.addEventListener('click', function (e) {
        var idx = +e.target.id;
        intervalIdx = idx;
        setActive(idx);
    });
});
// Autoplay listiners, if user mouses over a dot or img, stop autoplay
imgs.forEach(function (img) {
    img.addEventListener('mouseenter', function () {
        isControling = true;
        ticks = 0;
    });
});
imgs.forEach(function (img) {
    img.addEventListener('mouseleave', function () {
        isControling = false;
    });
});
dots.forEach(function (dot) {
    dot.addEventListener('mouseenter', function () {
        isControling = true;
        ticks = 0;
    });
});
dots.forEach(function (dot) {
    dot.addEventListener('mouseleave', function () {
        isControling = false;
    });
});
setInterval(function () {
    if (!isControling) {
        ticks++;
        // Prevent overflow
        if (ticks === 4) {
            if (intervalIdx === 3) {
                intervalIdx = 0;
            }
            else {
                intervalIdx++;
            }
            setActive(intervalIdx);
            ticks = 0;
        }
    }
}, 1000);
