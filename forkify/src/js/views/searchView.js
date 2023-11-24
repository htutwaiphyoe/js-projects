import { DOMs } from "./base";

export const getInput = () => DOMs.searchInput.value;

export const setFocus = () => DOMs.searchInput.focus();
export const clearResults = () => {
    DOMs.searchResultList.innerHTML = "";
    DOMs.resultPages.innerHTML = "";
};
export const clearInput = () => {
    DOMs.searchInput.value = "";
};
export const active = (id) => {
    const resultLinkArr = Array.from(document.querySelectorAll(".results__link"));
    resultLinkArr.forEach((link) => link.classList.remove("results__link--active"));
    const activeItem = document.querySelector(`.results__link[href="#${id}"]`);
    if (activeItem) activeItem.classList.add("results__link--active");
};
export const formatTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(" ").reduce((initial, current) => {
            if (initial + current.length <= limit) {
                newTitle.push(current);
            }
            return initial + current.length;
        }, 0);
        return `${newTitle.join(" ")} ...`;
    }

    return title;
};
const renderRecipe = (recipe) => {
    const recipeDOM = `
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${formatTitle(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
`;

    DOMs.searchResultList.insertAdjacentHTML("beforeend", recipeDOM);
};
export const renderRecipes = (recipes, page = 1, limit = 10) => {
    const start = (page - 1) * limit;
    const end = page * limit;

    recipes.slice(start, end).forEach(renderRecipe);
    renderNavigation(Math.ceil(recipes.length / limit), page);
};

const createNavigationButton = (type, page) =>
    `<button class="btn-inline results__btn--${type}" data-page=${
        type === "next" ? page + 1 : page - 1
    }>
        <span>Page ${type === "next" ? page + 1 : page - 1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === "next" ? "right" : "left"}"></use>
        </svg>
    </button>`;

const renderNavigation = (amount, page) => {
    if (page <= amount) {
        let navigationDOM = ``;
        if (page === 1) {
            navigationDOM = createNavigationButton("next", page);
        } else if (page === amount) {
            navigationDOM = createNavigationButton("prev", page);
        } else {
            navigationDOM = `${createNavigationButton("prev", page)}${createNavigationButton(
                "next",
                page
            )}`;
        }

        DOMs.resultPages.insertAdjacentHTML("afterbegin", navigationDOM);
    }
};
