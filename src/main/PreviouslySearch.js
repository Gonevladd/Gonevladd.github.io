
import App from "../App";

class PreviouslySearch {
    static searchResult = null;

    static setSearchResult(struct){
        console.log('Set struct: ');
        console.log(struct);
        this.searchResult = struct;
    }

    static getSearchResult(){
        console.log('Get struct: ');
        console.log(this.searchResult);
        return this.searchResult;
    }
}

export default PreviouslySearch;