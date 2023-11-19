import Home from "./models/Home";
import * as homeView from "./views/homeView";
import Photo from "./models/Photo";
import * as photoView from "./views/photoView";
import Search from "./models/Search";
import * as searchView from "./views/searchView";
import {
    DOMs,
    loader,
    clearLoader,
    clearPhoto,
    removeScrollBar,
    clearInput,
    clearPhotos,
} from "./views/base";

const state = {
    homeScroll: 1,
    searchScroll: 1,
    fetchData: false,
    searchData: false,
};

/*************************
 * HOME
 */
const homeHandler = async (type) => {
    try {
        DOMs.photos.insertAdjacentHTML("beforeend", loader());
        if (type === "scroll") {
            state.fetchData = true;
        }

        state.home = new Home(state.homeScroll);

        await state.home.getPhotos();

        clearLoader();

        homeView.renderPhotos(state.home.photos);

        state.fetchData = false;
    } catch (err) {
        alert("Oops! Something went wrong.");
    }
};
window.addEventListener("load", homeHandler);

/***********************
 * Full Photo
 */

const fullPhotoHandler = async (id) => {
    try {
        state.photoDetail = new Photo(id);
        await state.photoDetail.getPhoto();
        photoView.renderPhoto(state.photoDetail.photo);
        DOMs.details.style.display = "flex";
        removeScrollBar();
    } catch (err) {
        alert("Oops! Something went wrong.");
    }
};
DOMs.photos.addEventListener("click", (e) => {
    const id = e.target.parentElement.dataset.id;

    if (id) fullPhotoHandler(id);
});

document.querySelector(".details__close").addEventListener("click", () => {
    clearPhoto();
    DOMs.details.style.display = "none";
    removeScrollBar();
});

/*************************
 * Search
 */

const searchHandler = async (type) => {
    try {
        if (type === "scroll") {
            state.fetchData = true;
        } else {
            state.query = DOMs.searchInput.value;
        }

        if (state.query) {
            DOMs.photos.insertAdjacentHTML("beforeend", loader());
            state.search = new Search(state.query, state.searchScroll);
            await state.search.getSearch();
            clearLoader();

            searchView.renderSearch(state.search.searchPhotos, state.search.total, state.fetchData);

            state.fetchData = false;
        }
    } catch (err) {
        alert("Oops! Something went wrong.");
    }
};
window.addEventListener("keypress", (e) => {
    if (e.keyCode === 13 || e.which === 13) {
        clearPhotos();
        state.searchData = true;
        searchHandler();
        clearInput();
    }
});

/*************************
 * SCROLL
 */
window.addEventListener("scroll", () => {
    if (!state.fetchData && !state.searchData) {
        if (window.scrollY + window.innerHeight >= DOMs.photos.scrollHeight) {
            state.homeScroll += 1;
            homeHandler("scroll");
        }
    }
    if (!state.fetchData && state.searchData) {
        if (window.scrollY + window.innerHeight >= DOMs.photos.scrollHeight) {
            state.searchScroll += 1;

            searchHandler("scroll");
        }
    }
});
