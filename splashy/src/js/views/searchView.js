import { DOMs } from "./base";

let photoSmalls = [];
let photoBigs = [];

const arrangePhotos = (type, s, b) => {
    const smallDOMString = s.map(
        (small, index) =>
            `
                    <div class="photos__box-sm photos__box${type}-sm--${index}" data-id="${small.id}">
                        <img
                            src="${small.urls.regular}" alt="${small.alt_description}"
                        />
                    </div>
    `
    );
    const bigDOMString = b.map(
        (small, index) =>
            `
                    <div class="photos__box-big photos__box${type}-big--${index}" data-id="${small.id}">
                        <img
                            src="${small.urls.regular}" alt="${small.alt_description}"
                        />
                    </div>
    `
    );

    return [...smallDOMString, ...bigDOMString].join("");
};
const generatePhotos = (photos) => {
    photos.forEach((photo) => {
        photo.width >= photo.height ? photoSmalls.push(photo) : photoBigs.push(photo);
    });
    let smalls = [];
    let bigs = [];
    if (photoSmalls.length - photoBigs.length > 10) {
        smalls = photoSmalls.splice(0, 4);
        bigs = photoBigs.splice(0, 1);
        return `<div class="photos__box-0">${arrangePhotos("-0", smalls, bigs)}</div>`;
    } else if (photoSmalls.length - photoBigs.length < 10) {
        smalls = photoSmalls.splice(0, 2);
        bigs = photoBigs.splice(0, 2);
        return `<div class="photos__box-1">${arrangePhotos("-1", smalls, bigs)}</div>`;
    } else {
        smalls = photoSmalls.splice(0, 3);
        bigs = photoBigs.splice(0, 6);
        return `<div class="photos__box">${arrangePhotos("", smalls, bigs)}</div>`;
    }
};
export const renderSearch = (photos, total, newSearch) => {
    if (total > 0) {
        if (!newSearch) {
            photoSmalls = [];
            photoBigs = [];
        }
        let markup = generatePhotos(photos);
        DOMs.photos.insertAdjacentHTML("beforeend", markup);
    } else {
        let markup = `<div class="error">
       
        Nothing Found!
        </div>`;
        DOMs.photos.insertAdjacentHTML("beforeend", markup);
    }
};
