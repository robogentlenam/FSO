import { useState } from "react";
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';


const App = () => {
  const [persons, setPersons] = useState([{ id: "1", name: "Arto Hellas", number:"111 111 111"}]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("")
  const [filterName, setFilterName] =useState("")

  const addName = (event) => {
    event.preventDefault();
    console.log("Button clicked", event.target);
    const nameObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    };
    const names = persons.map((persons) => persons.name);
    const numbers = persons.map((persons) => persons.number);

    if (names.includes(newName)) {
      alert(`${newName} is already added to phonebook`);
    } else if(numbers.includes(newNumber)){
      alert(`${newNumber} is already added to phonebook`);
    }
     else {
      setPersons(persons.concat(nameObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const filteredNames = filterName === ""
  ? persons
  : persons.filter(persons => persons.name.toLowerCase() === filterName.toLowerCase())
  

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilterName(event.target.value);
  };

  const Person = ({ persons }) => {
    return <li>{persons.name} {persons.number}</li>;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} handleFilterChange={handleFilterChange} ></Filter>
      <h3>Add a new</h3>
      <PersonForm onSubmit={addName} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
     
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <Persons filteredNames={filteredNames}></Persons>
    </div>
  );
};

export default App;
