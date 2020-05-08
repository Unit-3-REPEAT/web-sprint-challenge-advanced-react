import React from 'react';


export default class SearchForm extends React.Component {   
    

     render() {
        // console.log(`this is props inside Searchform`, this.props)
        return (
            <form onSubmit={this.props.searchSpecificPlant}>
                <input
                    placeholder="Search plants here ..." 
                    type="text"
                    value={this.props.searchPlant}
                    onChange={this.props.handleChanges}
                />

                <button>Search</button>
          </form> 
        )
    }
}