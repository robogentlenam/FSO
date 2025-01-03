import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ id: "1", name: "Arto Hellas", number:"111 111 111"}]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("")

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


  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const Person = ({ persons }) => {
    return <li>{persons.name} {persons.number}</li>;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div> 
          number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <ul>
        {persons.map((persons) => (
          <Person key={persons.id} persons={persons}></Person>
        ))}
      </ul>
    </div>
  );
};

export default App;
