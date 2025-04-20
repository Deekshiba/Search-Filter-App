import React, { useState } from 'react';
import './App.css';
import employees from './data/employees';

function App() {
  const [search, setSearch] = useState('');

  const filtered = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Manager</h1>
      </header>

      <div className="container">
        <input
          type="text"
          placeholder="Search by name"
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <h2 className="title">Employee Details</h2>
        <table className="employee-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.gender}</td>
                <td>{emp.phone}</td>
                <td>{emp.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
