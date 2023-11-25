import axios from "axios";

export default class Countries{
    constructor(query){
        this.query = query;
    }

    async getCountries(){
        try{
            const result = await axios(`https://covid19.mathdro.id/api/${this.query}`);
            this.result = result.data;

        }
        catch(error){
            alert("Something Wrong");
        }
    }
}