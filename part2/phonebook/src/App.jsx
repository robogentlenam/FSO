import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ id: "1", name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addName = (event) => {
    event.preventDefault();
    console.log("Button clicked", event.target);
    const nameObject = {
      name: newName,
      id: String(persons.length + 1),
    };
    const names = persons.map((persons) => persons.name);
    if (names.includes(newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(nameObject));
      setNewName("");
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const Person = ({ persons }) => {
    return <li>{persons.name}</li>;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
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
