import { useState } from "react";

function SearchBox({testingStatus, setTestStatus, setSearchBox, searchingBox, searchTerm, setSearchTerm}){

    return(
        <div className="search-contents">
        Enter the student's code to view testing status
        <br></br>
        <br></br>
        <input 
        type="text" 
        placeholder="Search..."
        className=""
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <br></br>
        <br></br>
        </div>
    )
}

export default SearchBox;