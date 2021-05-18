const imgs: NodeListOf<HTMLDivElement> =
    document.querySelectorAll('.wrapper-image')!;
const dots: NodeListOf<HTMLDivElement> =
    document.querySelectorAll('.control-dot')!;

let isControling = false;
let intervalIdx = 0;

const setActive = (index: number) => {
    //dots
    dots.forEach((dot) => {
        dot.classList.remove('dot-active');
    });
    dots[index].classList.add('dot-active');
    //images
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

//autoplay listiners, if user mouses over a dot or img, stop autoplay
imgs.forEach((img) => {
    img.addEventListener('mouseenter', () => {
        isControling = true;
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
    });
});

dots.forEach((dot) => {
    dot.addEventListener('mouseleave', () => {
        isControling = false;
    });
});

setInterval(() => {
    if (!isControling) {
        //prevent overflow
        if (intervalIdx === 3) {
            intervalIdx = 0;
            console.log('test');
        } else {
            intervalIdx++;
        }
        setActive(intervalIdx);
    }
}, 5000);
