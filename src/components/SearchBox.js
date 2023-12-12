import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className = "pa2 ma4">
            <input 
                className = "tc pa3 ba b--blue bg-lightest-blue"
                type = "search"
                placeholder = "Type to Search"
                onChange={ searchChange }
            />
        </div>
    )
}

export default SearchBox