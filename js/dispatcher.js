"use strict";
var head = document.querySelector('head');
var gridBg = document.querySelector('.about-content-grid');
// Button nodes
var addBtn = document.querySelectorAll('.font-inc');
var subBtn = document.querySelectorAll('.font-dec');
var contrastBtn = document.querySelectorAll('.opt-theme');
// Control vars
var modifier = 1;
var useHighContrast = false;
// Dispatch
function update() {
    var oldSheet = document.querySelector('style');
    var sheet = document.createElement('style');
    sheet.innerHTML = "\n        :root {\n            /* fonts */\n            --fs-100: " + 0.85 * modifier + "rem;\n            --fs-200: " + 0.9 * modifier + "rem;\n            --fs-300: " + 1 * modifier + "rem;\n            --fs-400: " + 1.05 * modifier + "rem;\n            --fs-500: " + 1.15 * modifier + "rem;\n            --fs-600: " + 1.2 * modifier + "rem;\n            --fs-700: " + 1.25 * modifier + "rem;\n            --fs-800: " + 1.3 * modifier + "rem;\n            --fs-900: " + 1.35 * modifier + "rem;\n            --fs-1000: " + 1.75 * modifier + "rem;\n            --fs-1100: " + 2 * modifier + "rem;\n            --fs-dynamic-1: calc((" + 12 * modifier + "px + 1vw) / 2);\n            --fs-dynamic-2: calc((" + 14 * modifier + "px + 1vw) / 2);\n            --fs-dynamic-3: calc((" + 16 * modifier + "px + 1vw) / 2);\n            --fs-dynamic-4: calc((" + 17 * modifier + "px + 1vw) / 2);\n            /* colors */\n            --bg-100: " + (useHighContrast ? '#000000' : '#ffffff') + ";\n            --bg-200: " + (useHighContrast ? '#151515' : '#f4f5f8') + ";\n            --bg-300: " + (useHighContrast ? '#1f1f1f' : '#eef0f5') + ";\n            --bg-400: " + (useHighContrast ? '#2b2b2b' : '#e3e6ee') + ";\n            --bg-accent: " + (useHighContrast ? '#f4a024' : '#e6488b') + ";\n            /* typography */\n            --clr-100: " + (useHighContrast ? '#33506b' : '#ffffff') + ";\n            --clr-200: #6c799a;\n            --clr-300: " + (useHighContrast ? '#0080ff' : '#33506b') + ";\n            --clr-accent: " + (useHighContrast ? '#f4a024' : '#e6488b') + ";\n            --clr-input: " + (useHighContrast ? '#ffe000' : '#192734') + ";\n            --clr-link: " + (useHighContrast ? '#19f311' : '#7a11f3') + ";\n        }\n        ";
    oldSheet && head.removeChild(oldSheet);
    head.appendChild(sheet);
}
// Listeners
addBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        modifier += 0.25;
        if (modifier >= 2) {
            modifier = 2;
        }
        update();
    });
});
subBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        modifier -= 0.25;
        if (modifier <= 0.5) {
            modifier = 0.5;
        }
        update();
    });
});
contrastBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        useHighContrast = !useHighContrast;
        gridBg.style.background = "" + (useHighContrast
            ? 'url(./images/ninja-bg--dark.png) center no-repeat'
            : 'url(./images/ninja-bg.png) center no-repeat');
        update();
    });
});
// Invoke update on load
update();
