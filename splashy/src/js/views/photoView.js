import { DOMs } from "./base";

export const renderPhoto = (photo) => {
    const markup = `
    <div class="details__box">
        <div class="details__header">
            <a href="${photo.user.links.html}">
                <div class="details__user">
                    <div class="details__user-photo">
                        <img
                            src="${photo.user.profile_image.small}"
                        />
                    </div>
                    
                    <div class="details__user-about">
                        <p class="details__user-name">${photo.user.name}</p>
                        <p class="details__user-bio">@${photo.user.username}</p>
                    </div>
                </div>
            </a>
            <div class="details__statistics">
            <div class="details__statistics-likes">
                <svg>
                    <use href="assets/icons/symbol-defs.svg#icon-heart"></use>
                </svg>
                <span>${photo.likes}</span>
            </div>
            <div class="details__statistics-views">
                <svg>
                    <use href="assets/icons/symbol-defs.svg#icon-eye"></use>
                </svg>
                <span>${photo.views}</span>
            </div>
            <div class="details__statistics-downloads">
                <svg>
                    <use href="assets/icons/symbol-defs.svg#icon-download"></use>
                </svg>
                <span>${photo.downloads}</span>
            </div>
        </div>
            <div class="details__download">
                <a href="${
                    photo.links.download
                }" class="details__download-btn" target="_blank">Download</a>
            </div>
        </div>
        <div class="details__photo">
            <div class="details__photo-box-${photo.width > photo.height ? "sm" : "big"}">
                <img
                    src="${photo.urls.full}"
                    alt="${photo.alt_description}"
                />
            </div>
        </div>
        
    </div>

    
    `;

    DOMs.details.insertAdjacentHTML("beforeend", markup);
};
