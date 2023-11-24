import axios from "axios";

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const response = await axios(`https://forkify-api.herokuapp.com/get?rId=${this.id}`);
            this.recipe = response.data.recipe;
        } catch (err) {
            alert("No recipe! Try another one.");
        }
    }

    calculateTime() {
        const numIng = this.recipe.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }
    calculateServings() {
        this.servings = 4;
    }

    parseIngredients() {
        const longUnits = [
            "tablespoons",
            "tablespoon",
            "ounces",
            "ounce",
            "teaspoons",
            "teaspoon",
            "cups",
            "pounds",
        ];
        const shortUnits = ["tbsps", "tbsp", "ozs", "oz", "tsps", "tsp", "cup", "lbs"];
        const units = [...shortUnits, "kg", "g"];
        const newIngredients = this.recipe.ingredients.map((ing) => {
            let ingredient = ing.toLowerCase();
            longUnits.forEach((unit, i) => {
                ingredient = ingredient.replace(unit, shortUnits[i]);
            });
            ingredient = ingredient.replace(/ *\([^)]*\) */g, "");

            const ingArr = ingredient.split(" ");
            const unitIndex = ingArr.findIndex((ing) => units.includes(ing));

            let ingObj;
            if (unitIndex > -1) {
                const arrCount = ingArr.slice(0, unitIndex);
                let count;
                if (arrCount === 1) {
                    count = eval(ingArr[0].replace("-", "+"));
                } else {
                    count = eval(arrCount.join("+"));
                }

                ingObj = {
                    count,
                    unit: ingArr[unitIndex],
                    ingredient: ingArr.slice(unitIndex + 1).join(" "),
                };
            } else if (parseInt(ingArr[0], 10)) {
                ingObj = {
                    count: parseInt(ingArr[0], 10),
                    unit: "",
                    ingredient: ingArr.slice(1).join(" "),
                };
            } else if (unitIndex === -1) {
                ingObj = {
                    count: 1,
                    unit: "",
                    ingredient,
                };
            }

            return ingObj;
        });

        this.ingredients = newIngredients;
    }
    updateServings(type) {
        const newServings = type === "dec" ? this.servings - 1 : this.servings + 1;

        this.ingredients.forEach((ingredient) => {
            ingredient.count *= newServings / this.servings;
        });

        this.servings = newServings;
    }
}
