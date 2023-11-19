import axios from "axios";

export default class Photo {
    constructor(id) {
        this.id = id;
    }

    async getPhoto() {
        const photo = await axios({
            method: "GET",
            url: `https://api.unsplash.com/photos/${this.id}`,
            headers: {
                Authorization: "Client-ID hjmyqc6bOXPW8s0sGwjMc398i79EAt7KlFObLwN9VHE",
                "Accept-Version": "v1",
            },
        });

        this.photo = photo.data;
    }
}
