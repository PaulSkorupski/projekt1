"use strict";
var imgs = document.querySelectorAll('.wrapper-image');
var dots = document.querySelectorAll('.control-dot');
var isControling = false;
var intervalIdx = 0;
var setActive = function (index) {
    //dots
    dots.forEach(function (dot) {
        dot.classList.remove('dot-active');
    });
    dots[index].classList.add('dot-active');
    //images
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
//autoplay listiners, if user mouses over a dot or img, stop autoplay
imgs.forEach(function (img) {
    img.addEventListener('mouseenter', function () {
        isControling = true;
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
    });
});
dots.forEach(function (dot) {
    dot.addEventListener('mouseleave', function () {
        isControling = false;
    });
});
setInterval(function () {
    if (!isControling) {
        //prevent overflow
        if (intervalIdx === 3) {
            intervalIdx = 0;
            console.log('test');
        }
        else {
            intervalIdx++;
        }
        setActive(intervalIdx);
    }
}, 5000);
