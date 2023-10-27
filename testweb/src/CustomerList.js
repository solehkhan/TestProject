import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const CustomerList=()=>{

   
    
    const [data,setData] = useState();

useEffect(()=>{

  getDate();
},[]);


   const getDate =()=>{
               axios.get('https://localhost:7236/Customer/GetAllCustomer')
               .then((result)=>{
                   setData(result.data)
               }).catch((error) =>{
                   console.log(error);
               })
               
   }
  const editCustomer =(id)=>
  {
    alert(id);
  }

  const deleteCustomer =(id)=>
  {
    alert(id);
  }

    return(

        <frameElement>

<Table striped bordered hover>
      <thead>
        <tr>
            <th>#</th>
          <th>Customerid</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone_Number</th>
          <th>Country_Code</th>
          <th>Gender</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {
            data && data.length > 0 ?
            data.map((item,index)=>{
                return(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.id}</td>
                    <td>{item.FirstName}</td>
                    <td>{item.LastName}</td>
                    <td>{item.Email}</td>
                    <td>{item.Phone_Number}</td>
                    <td>{item.Country_Code}</td>
                    <td>{item.Gender}</td>
                    <td>{item.Balance}</td>
                    <td colSpan={2}>
                        <button class="btn btn-primary" onClick={()=>editCustomer(item.customerid)}>Edit</button> &nbsp;
                        <button class="btn btn-danger" onClick={()=>deleteCustomer(item.customerid)}>Delete</button>
                    </td>
                  </tr>
                )
            }) 
            :
              "Loading..."      
    }
      </tbody>
    </Table>
        </frameElement>
        
    )
}

export default CustomerList;