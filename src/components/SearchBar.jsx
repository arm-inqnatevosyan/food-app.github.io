import React from "react";

const SearchBar = ({query,isLoading,handleSubmit,setQuery}) => {
    return (
        <form onSubmit={handleSubmit}>
           <input 
                value={query}
                className="form-control"
                placeholder="Search Recipe"
                name="query"
                disabled={isLoading}
                onChange={(event) => setQuery(event.target.value)}
            />  
            <div>
            <input 
             type="submit"
             className="btn"
             value="Search"
             disabled={isLoading || !query}
            />
            <button className="btn1" onClick={() => setQuery("")}>Clear</button>
            </div> 
        </form>
    )
}
export default SearchBar;