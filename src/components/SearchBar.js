import React from 'react';

class SearchBar extends React.Component {

    state = { verbiage: '' };

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search Text : </label>
                        <input type="text"
                            value={this.state.verbiage}
                            onChange={(e) => this.setState({ verbiage: e.target.value })}>
                        </input>

                    </div>
                </form>
            </div >

        );
    }

    onTextChange(event) {
        console.log(event.target.value);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.verbiage);
        this.props.hitSubmit(this.state.verbiage);
    }
}

export default SearchBar;