import { DOMs } from "./base";

export const renderShoppingList = (shoppingList) => {
    const markUp = `
    <li class="shopping__item" data-itemid=${shoppingList.id}>
    <div class="shopping__count">
        <input type="number" value="${shoppingList.count}" step="${shoppingList.count}" class="shopping__count-value">
        <p>${shoppingList.unit}</p>
    </div>
    <p class="shopping__description">${shoppingList.ingredient}</p>
    <button class="shopping__delete btn-tiny">
        <svg>
            <use href="img/icons.svg#icon-circle-with-cross"></use>
        </svg>
    </button>
</li>`;

    DOMs.shoppingList.insertAdjacentHTML("beforeend", markUp);
};

export const deleteShoppingList = (id) => {
    const item = document.querySelector(`[data-itemId="${id}"]`);
    if (item) {
        item.parentElement.removeChild(item);
    }
};
