import React, {Component} from "react";

export class Searchbar extends Component {
    state = {
       value: '' 
    }

    onInputChange = (evt) => {
        this.setState({value: evt.target.value})
    }

    onFormSubmit = (evt) => {
        evt.preventDefault();

        if(this.state.value.trim() === '') {
            return;
        }

        this.props.onSubmit(this.state.value);
        this.setState({value: ''});
    }

    render () {
        return (
            <header>
                <form onSubmit={this.onFormSubmit}>
                    <button type="submit">
                    <span>Search</span>
                    </button>
    
                    <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={this.onInputChange}
                    value={this.state.value}
                    />
                </form>
            </header>
        )
    }
}