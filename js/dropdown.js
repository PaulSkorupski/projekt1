"use strict";
var anchor = document.querySelector('.dropdown-anchor');
var container = document.querySelector('.dropdown-content-cont');
var isHidden = true;
anchor.addEventListener('click', function () {
    if (isHidden) {
        container.style.display = 'flex';
        isHidden = !isHidden;
    }
    else {
        container.style.display = 'none';
        isHidden = !isHidden;
    }
});
