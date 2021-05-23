"use strict";
var btn = document.querySelector('.burger-btn');
var path1 = document.querySelector('.svg-p1');
var path2 = document.querySelector('.svg-p2');
var path3 = document.querySelector('.svg-p3');
var nav = document.querySelector('.burger-cont');
var chat = document.querySelector('.chat');
var isOpened = false;
btn.addEventListener('click', function () {
    if (!isOpened) {
        path1.classList.add('burger-active');
        path2.classList.add('burger-active');
        path3.classList.add('burger-active');
        nav.style.display = 'block';
        chat.style.display = 'none';
        isOpened = true;
    }
    else {
        path1.classList.remove('burger-active');
        path2.classList.remove('burger-active');
        path3.classList.remove('burger-active');
        nav.style.display = 'none';
        chat.style.display = 'flex';
        isOpened = false;
    }
});
