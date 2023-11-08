import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import {useParams,useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


function CustomerForm() {

    const {Id }= useParams();
   
   const [firstName,setFirstName] = useState('');
   const [lastName,setLastName] = useState('');
   const [email,setEmail] = useState('');
   const [phoneNumber,setPhoneNumber] = useState('');
   const [countryCode,setcountryCode] = useState('');
   const [gender,setGender] = useState('');
   const [balance,setBalance] = useState('');
   const navigate = useNavigate();
  const getDataById = async (Id) =>{

       axios.get(`https://localhost:7236/Customer/GetCustomerById/${Id}`)
       .then((result)=>{
           setFirstName(result.data.firstname);
           setLastName(result.data.lastname);
           setEmail(result.data.email);
           setPhoneNumber(result.data.phone_Number);
           setcountryCode(result.data.country_code);
           setGender(result.data.gender);
           setBalance(result.data.balance);
           
       })
       .catch((error)=>{
        console.log(error)
       })

 } 

  useEffect(()=>{

    getDataById(Id);
  },[])


  const SubmitCustomer = async (event)=>{
      event.preventDefault();
             
             const customerModel = {
              'id': '',
              'salutation': '',
              'initials': '',
              'firstname': firstName,
              'firstname_ascii': '',
              'gender': gender,
              'firstname_country_rank': '',
              'firstname_country_frequency': '',
              'lastname': lastName,
              'lastname_ascii': '',
              'lastname_country_rank': '',
              'lastname_country_frequency': '',
              'email': email,
              'password': '',
              'country_code': countryCode,
              'country_code_alpha': '',
              'country_name': '',
              'primary_language_code': '',
              'primary_language': '',
              'balance': parseFloat(balance),
              'phone_Number': phoneNumber,
              'currency': '',
              // 'partitionKey': '',
              // 'rowKey': '',
              // 'timestamp': new Date(),
              // 'eTag': {}

             }

             if(Id && Id !=='')
             {
              customerModel.id= Id;
              const url  = `https://localhost:7236/Customer/UpdateCustomer/${Id}`;
              await axios.put(url,customerModel)
              .then((result)=>{
                alert('Updated Successfully...');
                navigate('/add');
              })
              .catch((error)=>{
                 console.log(error);
              });
             }
             else
             {
              const url  = 'https://localhost:7236/Customer/AddCustomer';
              await axios.post(url,customerModel)
              .then((result)=>{
                alert('Added Successfully....');
                navigate('/add');
              })
              .catch((error)=>{
                 console.log(error);
              });

             }
        
  }

  return (
    <Form onSubmit={SubmitCustomer} >
        <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
    </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Phone Number" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCountrycode">
        <Form.Label>Country Code</Form.Label>
        <Form.Control type="text" placeholder="Enter coundtry Code" value={countryCode} onChange={(e)=>{setcountryCode(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCountrycode">
      <Form.Label>Gender</Form.Label>
      <Form.Select aria-label="Default select example" value={gender}   onChange={(e)=>{setGender(e.target.value)}}>
      <option>Select Gender</option>
      <option value="m">Male</option>
      <option value="f">Female</option>
     </Form.Select>
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBalance">
        <Form.Label>Balance</Form.Label>
        <Form.Control type="text" placeholder="Enter Balance" value={balance} onChange={(e)=>{setBalance(e.target.value)}} />
    </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CustomerForm;