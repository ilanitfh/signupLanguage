export const scrollLeft = ((pageNum) => {
    let step = -450* pageNum;
    let stepPx = step + 'px';
    let container = document.getElementsByClassName("fgTileContainer")[0];

    container.style.transform = 'translateX(' +stepPx+ ')';
});

export const themeMap = {
    "1": "flavor-0",
    "2": "flavor-1",
    "3": "flavor-2",
    "4": "flavor-3",
    "5": "flavor-4",
    "6": "flavor-5",
    "7": "flavor-6",
    "8": "flavor-7",
    "9": "flavor-8",
    "10": "flavor-9",
    "11": "flavor-10",
    "12": "flavor-11",
    "13": "flavor-12",
    "14": "flavor-13",
    "15": "flavor-14",
    "16": "flavor-15",
    "17": "flavor-16",
    "18": "flavor-17",
    "19": "flavor-18",
    "20": "flavor-19",
    "21": "flavor-20",
    "22": "flavor-21",
    "23": "flavor-22",
    "24": "flavor-23"
};

