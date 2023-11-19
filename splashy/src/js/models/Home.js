import axios from "axios";

export default class Home {
    constructor(page, perPage = 30) {
        this.page = page;
        this.perPage = perPage;
    }

    async getPhotos() {
        const photos = await axios({
            method: "GET",
            url: `https://api.unsplash.com/photos?page=${this.page}&per_page=${this.perPage}`,
            headers: {
                Authorization: "Client-ID hjmyqc6bOXPW8s0sGwjMc398i79EAt7KlFObLwN9VHE",
                "Accept-Version": "v1",
            },
        });

        this.photos = photos.data;
    }
}
