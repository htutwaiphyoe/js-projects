import { DOMs } from "./base";
import { formatTitle } from "./searchView";
export const toggleLikeIcon = (isLiked) => {
    const iconType = isLiked ? `icon-heart-outlined` : `icon-heart`;
    document.querySelector(".header__likes use").setAttribute("href", `img/icons.svg#${iconType}`);
};

export const toggleLikeMenu = (num) => {
    if (num > 0) {
        DOMs.likesPanel.style.display = "block";
        DOMs.likeIcon.setAttribute("href", `img/icons.svg#icon-heart`);
    } else {
        DOMs.likeIcon.setAttribute("href", `img/icons.svg#icon-heart-outlined`);
        DOMs.likesPanel.style.display = "none";
    }
};
export const renderLikeItem = (likeItem) => {
    const markup = `
    <li>
    <a class="likes__link" href="#${likeItem.id}">
        <figure class="likes__fig">
            <img src="${likeItem.image}" alt="${likeItem.image}" />
        </figure>
        <div class="likes__data">
            <h4 class="likes__name">${formatTitle(likeItem.title)}</hh4>
            <p class="likes__author">${likeItem.publisher}</p>
        </div>
    </a>
</li>`;

    DOMs.likeList.insertAdjacentHTML("beforeend", markup);
};

export const deleteLikeItem = (id) => {
    const likeItem = document.querySelector(`.likes__link[href="#${id}"]`);
    if (likeItem) {
        likeItem.parentElement.removeChild(likeItem);
    }
};
