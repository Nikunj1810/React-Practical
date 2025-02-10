import * as React from "react";
class StateExample extends React.Component {
    state = {
        first:false,    
        second:false,
        clr:"blue",
        txt:"R.K University"
    };
    constructor(){
        super();
        setTimeout(() => {
            this.setState({first : true,
                second : true,
                clr:"red",
                txt:"R.K University" ,})
            
        },10000);
    }
    render() {
        const {first, second, clr, txt} = this.state;
        return (
            <div>
                <button disabled={first}> Button </button>
                <button disabled={second}> Button </button> 
                <label style={{color: clr}}>{txt}</label>
            
            </div>
        );
    };

}
export default StateExample ;