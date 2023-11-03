import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import {useParams} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


function CustomerForm() {

    const {Id }= useParams();
   const [customer,setData] = useState({});


  const getDataById = async (Id) =>{

       axios.get(`https://localhost:7236/Customer/GetCustomerById/${Id}`)
       .then((result)=>{
           setData(result.data);
       })
       .catch((error)=>{
        console.log(error)
       })

 } 

  useEffect(()=>{

    getDataById(Id);
  },[])

  return (
    <Form>
        <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="firstname" placeholder="Enter First Name" value={customer.firstname} />
    </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Last Name" value={customer.lastname} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={customer.email} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="PhoneNumber" placeholder="Enter email" value={customer.phone_Number} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCountrycode">
        <Form.Label>Country Code</Form.Label>
        <Form.Control type="CountryCode" placeholder="Enter coundtry Code" value={customer.country_code} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCountrycode">
      <Form.Label>Gender</Form.Label>
      <Form.Select aria-label="Default select example" value={customer.gender}>
      <option>Select Gender</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
     </Form.Select>
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBalance">
        <Form.Label>Balance</Form.Label>
        <Form.Control type="balance" placeholder="Enter Balance" value={customer.balance} />
    </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CustomerForm;