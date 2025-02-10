import * as React from "react";
import MyButton from "../lec2712/MyButton";

class propexample extends React.Component {
    state = {
        text :"My Button",
        disabled : false,
        items : ["one", "two", "three"],
    };
    constructor() {
        super();
        setTimeout(() => {
            () => {
                this.setState({
                    disabled : false,
                    text : "Hellow world",
                    items : ["pineapple", "banana", "apple"],
                });
            }
            
        }, 2000);
    }
    render() {
        const {text, disabled, } = this.state;
        return(
            <div>
                <MyButton text={text} disabled={disabled}/>
                
            </div>
        )
            
        
    }
}
export default propexample;