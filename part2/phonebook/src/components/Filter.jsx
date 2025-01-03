import React from "react";


const Filter = ({filterName, handleFilterChange}) => (
    <div>
        filter shown with <input value={filterName} onChange={handleFilterChange}></input>
    </div>
)

export default Filter