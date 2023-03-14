import React from "react";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'search-form'}>
                <input type="text" className={'input'} placeholder={'What do you want to watch?'}/>
                <button className={'button button__primary'}>Search</button>
            </div>
        )
    }
}

export default SearchForm;
