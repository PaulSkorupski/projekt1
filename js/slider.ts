const imgs: NodeListOf<HTMLDivElement> =
    document.querySelectorAll('.wrapper-image')!;
const dots: NodeListOf<HTMLDivElement> =
    document.querySelectorAll('.control-dot')!;

let isControling = false;
let intervalIdx = 0;
let ticks = 0;

const setActive = (index: number) => {

    // Dots
    dots.forEach((dot) => {
        dot.classList.remove('dot-active');
    });
    dots[index].classList.add('dot-active');

    // Images
    imgs.forEach((img) => {
        img.classList.remove('image-active');
    });
    imgs[index].classList.add('image-active');
};

dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
        const idx: number = +(<HTMLDivElement>e.target).id;
        intervalIdx = idx;
        setActive(idx);
    });
});

// Autoplay listiners, if user mouses over a dot or img, stop autoplay
imgs.forEach((img) => {
    img.addEventListener('mouseenter', () => {
        isControling = true;
        ticks = 0;
    });
});

imgs.forEach((img) => {
    img.addEventListener('mouseleave', () => {
        isControling = false;
    });
});

dots.forEach((dot) => {
    dot.addEventListener('mouseenter', () => {
        isControling = true;
        ticks = 0;
    });
});

dots.forEach((dot) => {
    dot.addEventListener('mouseleave', () => {
        isControling = false;
    });
});

setInterval(() => {
    if (!isControling) {
        ticks++;

        // Prevent overflow
        if (ticks === 4) {
            if (intervalIdx === 3) {
                intervalIdx = 0;
            } else {
                intervalIdx++;
            }
            setActive(intervalIdx);
            ticks = 0;
        }
    }
}, 1000);
