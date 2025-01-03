import React from "react";
import Person from './Person';


const Persons = ({filteredNames}) =>{
  return(
  <ul>
  {filteredNames.map((person) => (
        <Person key={person.id} person={person} />

  ))}
</ul>
  )
}

  export default Persons