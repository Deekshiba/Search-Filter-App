import React from 'react';

const EmployeeList = ({ employees }) => {
  if (employees.length === 0) return <p>No employees found.</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {employees.map((emp) => (
        <li
          key={emp.id}
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            marginBottom: '8px',
            borderRadius: '4px'
          }}
        >
          <strong>{emp.name}</strong> — {emp.designation}, {emp.department}
        </li>
      ))}
    </ul>
  );
};

export default EmployeeList;
