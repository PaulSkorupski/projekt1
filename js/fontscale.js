"use strict";
var head = document.querySelector('head');
var addBtn = document.querySelectorAll('.font-inc');
var subBtn = document.querySelectorAll('.font-dec');
var modifier = 1;
function update() {
    var oldSheet = document.querySelector('style');
    var sheet = document.createElement('style');
    sheet.innerHTML = "\n        :root {\n            --fs-100: " + 0.85 * modifier + "rem;\n            --fs-200: " + 0.9 * modifier + "rem;\n            --fs-300: " + 1 * modifier + "rem;\n            --fs-400: " + 1.05 * modifier + "rem;\n            --fs-500: " + 1.15 * modifier + "rem;\n            --fs-600: " + 1.2 * modifier + "rem;\n            --fs-700: " + 1.25 * modifier + "rem;\n            --fs-800: " + 1.3 * modifier + "rem;\n            --fs-900: " + 1.35 * modifier + "rem;\n            --fs-1000: " + 1.75 * modifier + "rem;\n            --fs-1100: " + 2 * modifier + "rem;\n            --fs-dynamic-1: calc((" + 12 * modifier + "px + 1vw) / 2);\n            --fs-dynamic-2: calc((" + 14 * modifier + "px + 1vw) / 2);\n            --fs-dynamic-3: calc((" + 16 * modifier + "px + 1vw) / 2);\n            --fs-dynamic-4: calc((" + 17 * modifier + "px + 1vw) / 2);\n        }";
    oldSheet && head.removeChild(oldSheet);
    head.appendChild(sheet);
}
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
update();
