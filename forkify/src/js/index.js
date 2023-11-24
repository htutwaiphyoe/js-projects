import Search from "./models/SearchModel";
import * as searchView from "./views/searchView";
import { DOMs, renderLoader, clearLoader } from "./views/base";
import Recipe from "./models/recipeModel";
import * as recipeView from "./views/recipeView";
import ShoppingList from "./models/ShoppingList";
import * as shoppingListView from "./views/shoppingListView";
import Like from "./models/LikeModel";
import * as likeView from "./views/likeView";
/*** Global State
 * - Search
 * - Recipe
 * - Likes
 * - List
 */

const state = {};

/***
 * Search Controller
 */
const searchHandler = async () => {
    try {
        const query = searchView.getInput();
        if (query) {
            state.search = new Search(query);
            searchView.clearResults();
            searchView.clearInput();

            renderLoader(DOMs.searchResultList);
            await state.search.getRecipes();
            searchView.clearResults();
            searchView.renderRecipes(state.search.recipes);
        } else {
            searchView.setFocus();
        }
    } catch (err) {
        alert("No recipe! Try another one.");
    }
};

DOMs.searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchHandler();
});

DOMs.resultPages.addEventListener("click", (e) => {
    e.preventDefault();
    const page = e.target.closest("button").dataset.page;
    searchView.clearResults();

    searchView.renderRecipes(state.search.recipes, +page);
});

/**
 * RecipeController
 * @param id = Recipe id
 */
const recipeHandler = async () => {
    try {
        const id = window.location.hash.replace(/#/, "");
        if (id) {
            recipeView.clearRecipe();
            renderLoader(DOMs.recipe);
            searchView.active(id);
            state.recipe = new Recipe(id);
            await state.recipe.getRecipe();

            state.recipe.calculateTime();
            state.recipe.calculateServings();
            state.recipe.parseIngredients();
            clearLoader();
            recipeView.renderRecipe(state.recipe, state.likes.checkLiked(id));
        }
    } catch (err) {
        alert("No recipe! Try another one.");
    }
};

["hashchange", "load"].forEach((event) => window.addEventListener(event, recipeHandler));

/****
 * Shopping List Controller
 */

const shoppingListHandler = () => {
    if (!state.shoppingList) {
        state.shoppingList = new ShoppingList();
    }
    state.recipe.ingredients.forEach((ingredient) => {
        shoppingListView.renderShoppingList(
            state.shoppingList.addItem(ingredient.count, ingredient.unit, ingredient.ingredient)
        );
    });
};

DOMs.shoppingList.addEventListener("click", (e) => {
    const id = e.target.closest(".shopping__item").dataset.itemid;
    if (e.target.matches(".shopping__delete, .shopping__delete *")) {
        state.shoppingList.deleteItem(id);
        shoppingListView.deleteShoppingList(id);
    }
    // /shopping__count-value
    else if (e.target.matches(".shopping__count-value")) {
        const value = +e.target.value;
        if (value > 0) {
            state.shoppingList.updateCount(id, value);
        }
    }
});

/********************
 * Like Controller
 */

window.addEventListener("load", () => {
    state.likes = new Like();
    state.likes.readData();
    likeView.toggleLikeMenu(state.likes.getNumOfLikeItems());
    state.likes.likes.forEach((like) => {
        likeView.renderLikeItem(like);
    });
});

const likeHandler = () => {
    if (!state.likes) {
        state.likes = new Like();
    }

    if (!state.likes.checkLiked(state.recipe.id)) {
        const likeItem = state.likes.addLike(
            state.recipe.id,
            state.recipe.recipe.image_url,
            state.recipe.recipe.title,
            state.recipe.recipe.publisher
        );

        likeView.toggleLikeIcon(false);
        likeView.renderLikeItem(likeItem);
    } else {
        state.likes.deleteLike(state.recipe.id);
        likeView.toggleLikeIcon(true);
        likeView.deleteLikeItem(state.recipe.id);
    }
    likeView.toggleLikeMenu(state.likes.getNumOfLikeItems());
};
DOMs.recipe.addEventListener("click", (e) => {
    if (e.target.matches(".btn-increase, .btn-increase *")) {
        state.recipe.updateServings("inc");
        recipeView.renderUpdatedRecipe(state.recipe);
    } else if (e.target.matches(".btn-decrease, .btn-decrease *")) {
        if (state.recipe.servings > 1) {
            state.recipe.updateServings("dec");
        }
        recipeView.renderUpdatedRecipe(state.recipe);
    } else if (e.target.matches(".recipe__btn--add, .recipe__btn--add *")) {
        shoppingListHandler();
    } else if (e.target.matches(".recipe__love, .recipe__love *")) {
        likeHandler();
    }
});
