import React from 'react'

interface Org {
    id: number;
    name: string;
    address: string;
}

const OrganizationPage = async () => {

    const res = await fetch('http://localhost:8080/api/org/viewAllOrg')
    const orgs: Org[] = await res.json();


    return (    
    <div>
        <h1>Praise The LORD! JESUS CHRIST! OrganizationPage</h1>

            <table className='table table-bordered'>
                <thead>
                     <tr>
                        <th>Id</th> <th>Name</th> <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {orgs.map(org => 
                    <tr key={org.id}>
                        <td>{org.id}</td>
                        <td>{org.name}</td> 
                        <td>{org.address}</td>                        
                    </tr>)}   

                </tbody>
            </table>
                
            
    </div>        
  )
}

export default OrganizationPage