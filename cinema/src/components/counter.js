import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.value
        }
    }

    increment = () => {
        this.setState({counter: ++this.state.counter});
    }
    decrement = () => {
        this.setState({counter: --this.state.counter});
    }
    render() {
        return React.createElement(
            "div",
            {id: "id", className: "class"},
            React.createElement("button", {id: 'dec', onClick: this.decrement}, "-"),
            React.createElement("span", {className: 'number'}, this.state.counter),
            React.createElement("button", {id: 'inc', onClick: this.increment}, "+")
        )
    }
}

export default Counter;
