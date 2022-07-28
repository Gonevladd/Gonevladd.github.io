
import App from "../App";

class mainColor {
    static color = 'success';

    static setColor(c){
        this.color = c.toLowerCase();
    }

    static getColor(){
        console.log(this.color);
        return this.color;
    }
}

export default mainColor;