import React from 'react'

interface Organization {
    id: number;
    name: string;
    address: string;
}

interface Emp {
    id: number;
    organization: Organization;
    name: string;
    phoneNo: string;
    address: string;
}

const EmployeePage = async () => {
  
  const resp = await fetch('http://localhost:8080/api/employee/getAllEmp')  

  const emps: Emp[] = await resp.json();

  return (
    <div>
        <h1>EmployeePage</h1>

            <table className='table table-zebra-zebra'>
                <thead>
                  <tr>
                    <th>Id</th><th>Name</th> <th>PhoneNo</th> <th>Address</th> <th>Organization</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {emps.map(emp => 
                  <tr key={emp.id}>
                     <td>{emp.id}</td>
                     <td>{emp.name}</td>
                     <td>{emp.address}</td>
                     <td>{emp.phoneNo}</td>
                     <td>{emp.organization.name}</td>

                  </tr>)}
                </tbody>
            </table>
        
    </div>
  )
}

export default EmployeePage