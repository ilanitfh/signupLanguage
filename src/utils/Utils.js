export const scrollLeft = ((pageNum) => {
    let step = -450* pageNum;
    let stepPx = step + 'px';
    let container = document.getElementsByClassName("fgTileContainer")[0];

    container.style.transform = 'translateX(' +stepPx+ ')';
});

