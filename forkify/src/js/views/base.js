export const DOMs = {
    searchInput: document.querySelector(".search__field"),
    searchButton: document.querySelector(".search__btn"),
    searchForm: document.querySelector(".search"),
    searchResultList: document.querySelector(".results__list"),
    searchResult: document.querySelector(".results"),
    resultPages: document.querySelector(".results__pages"),
    recipe: document.querySelector(".recipe"),
    shoppingList: document.querySelector(".shopping__list"),
    likeList: document.querySelector(".likes__list"),
    likeIcon: document.querySelector(".likes__icon use"),
    likesPanel: document.querySelector(".likes__panel"),
};

export const renderLoader = (parent) => {
    const loader = `
        <div class="loader">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML("afterbegin", loader);
};
export const clearLoader = (parent) => {
    document.querySelector(".loader").parentElement.removeChild(document.querySelector(".loader"));
};
