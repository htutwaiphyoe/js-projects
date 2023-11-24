export default class Like {
    constructor() {
        this.likes = [];
    }
    addLike(id, image, title, publisher) {
        const likeItem = {
            id,
            image,
            title,
            publisher,
        };
        this.likes.push(likeItem);
        this.storeData();
        return likeItem;
    }
    deleteLike(id) {
        const index = this.likes.findIndex((likeItem) => likeItem.id === id);
        this.likes.splice(index, 1);
        this.storeData();
    }

    checkLiked(id) {
        const index = this.likes.findIndex((likeItem) => likeItem.id === id);
        return index !== -1 ? true : false;
    }

    getNumOfLikeItems() {
        return this.likes.length;
    }
    storeData() {
        localStorage.setItem("likes", JSON.stringify(this.likes));
    }

    readData() {
        const data = JSON.parse(localStorage.getItem("likes"));
        if (data) {
            this.likes = data;
        }
    }
}
