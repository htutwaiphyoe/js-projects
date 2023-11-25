import axios from "axios";

export default class Search{
    constructor(query){
        this.query = query;
    }

    async getSearch(){
        try{
            const result = await axios(`https://covid19.mathdro.id/api/countries/${this.query}`);
            this.result = result.data;

        }
        catch(error){
            // alert("Something Wrong");
        }
    }
}