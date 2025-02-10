import * as React from "react";

class StateMerge extends React.Component {
  state = {
    first: "Loading....",
    second: "Loading....",
    third: "Loading....",
    fourth: "Loading....",
    donesmesg: "Loading Complete",
  };

  constructor() {
    super();
    setTimeout(() => {
      this.setState({
        first: "First Done",
      });
    }, 2000);

    setTimeout(() => {
      this.setState({
        second: "Second Done",
      });
    }, 4000);

    setTimeout(() => {
      this.setState({
        third: "Third Done",
      });
    }, 6000);

    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        first: state.donesmesg,
        second: state.donesmesg,
        third: state.donesmesg,
        fourth: state.donesmesg,

      }));
    }, 8000);
  }

  render() {
    return (
     <ul  style={{fontSize:50}}>
        {Object.keys(this.state)
          .filter((key) => key !== "donesmesg")
          .map((key) => (
           <li key={key}>
              <strong>{key}:</strong> {this.state[key]}
            </li>
          ))}
      </ul>
      
    );
  }
}

export default StateMerge;