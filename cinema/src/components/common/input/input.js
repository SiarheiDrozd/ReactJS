import React from "react";
import './input.scss';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input type="text"
                   className={'input'}
                   value={this.props.value}
                   placeholder={this.props.placeholder}
                   onChange={this.props.onChange}
            />
        )
    }
};
