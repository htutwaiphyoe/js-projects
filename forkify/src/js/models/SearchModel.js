import axios from "axios";
export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getRecipes() {
        try {
            const response = await axios(
                `https://forkify-api.herokuapp.com/search?q=${this.query}`
            );
            this.recipes = response.data.recipes;
        } catch (err) {
            alert("No recipe! Try another one.");
        }
    }
}
