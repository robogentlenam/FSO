import React from "react";
import Person from './Person';


const Persons = ({filteredNames}) =>{
  return(
  <ul>
  {filteredNames.map((persons) => (
        <Person key={persons.id} persons={persons} />

  ))}
</ul>
  )
}

  export default Persons