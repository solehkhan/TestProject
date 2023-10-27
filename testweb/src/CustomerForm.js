import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CustomerForm() {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="firstname" placeholder="Enter First Name" />
    </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Last Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="PhoneNumber" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCountrycode">
        <Form.Label>Country Code</Form.Label>
        <Form.Control type="CountryCode" placeholder="Enter coundtry Code" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCountrycode">
      <Form.Label>Gender</Form.Label>
      <Form.Select aria-label="Default select example">
      <option>Select Gender</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
     </Form.Select>
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBalance">
        <Form.Label>Balance</Form.Label>
        <Form.Control type="balance" placeholder="Enter Balance" />
    </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CustomerForm;