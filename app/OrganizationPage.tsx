import { useState, useEffect } from 'react';

export default function OrganizationPage({ orgId }) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch data based on orgId
    fetch(`http://localhost:8080/api/employee/findByOrgId/${orgId}`)
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [orgId]);

  return (
    <main>
      <h1>Employee List for Organization ID: {orgId}</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone No</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.phoneNo}</td>
              <td>{employee.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
