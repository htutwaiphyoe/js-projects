import axios from "axios";
export default class Search {
    constructor(query, page, perPage = 30) {
        this.query = query;
        this.page = page;
        this.perPage = perPage;
    }

    async getSearch() {
        const searchResults = await axios({
            method: "GET",
            url: `https://api.unsplash.com/search/photos?&page=${this.page}&per_page=${this.perPage}&query=${this.query}`,
            headers: {
                Authorization: "Client-ID hjmyqc6bOXPW8s0sGwjMc398i79EAt7KlFObLwN9VHE",
                "Accept-Version": "v1",
            },
        });
        this.total = searchResults.data.total;
        this.searchPhotos = searchResults.data.results;
    }
}
