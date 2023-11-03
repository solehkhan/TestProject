import React, { Fragment, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import {BrowserRouter, Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
const CustomerList=()=>{

   
    
    const [data,setData] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    let navigate = useNavigate();
    const editCustomer =(id)=>
    {
      navigate('/add/' +id);
    }
  
    const deleteCustomer =(id)=>
    {
      
      alert(id);
    }
  
    function prePage()
    {
       if(currentPage !==1){
             setCurrentPage(currentPage - 1)
       }
  }
  
  function nextPage(){
  
    if(currentPage !==npage){
    setCurrentPage(currentPage +1)
    }
  }
  

useEffect(()=>{

  getData();
   
},[]);


   const getData = async ()=>{
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://localhost:7236/Customer/GetAllCustomer',
  headers: { }
};

 await axios.request(config)
.then((response) => {
  setData(response.data);
        
})
.catch((error) => {
  console.log(error);
});
}

          const lastIndex = currentPage * recordsPerPage;
           const firstIndex = lastIndex - recordsPerPage;
         const records =   data.slice(firstIndex,lastIndex) 
         const  npage = Math.ceil(data.length / recordsPerPage)
         const  numbers = [...Array(npage + 1).keys()].slice(1)
           

    return(
<>
        <Fragment>
          <br/>
<Link to="/add">Add Customer</Link>
<br/>
<br/>
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
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
            
            records && records.length > 0 ?
            records.map((item,index)=>{
                return(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.id}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.email}</td>
                    <td>{item.phone_Number}</td>
                    <td>{item.country_code}</td>
                    <td>{item.gender}</td>
                    <td>{item.balance}</td>
                    <td colSpan={2}>
                         <button class="btn btn-primary" onClick={()=>editCustomer(item.id)}>Edit</button>
                        
                         &nbsp; 
                        <button class="btn btn-danger" onClick={()=>deleteCustomer(item.id)}>Delete</button>
                    </td>
                  </tr>
                )
            }) 
            :
              "Loading..."      
    }
      </tbody>
    </Table>
    <nav>
      <ul className='pagination'>
        <li className='page-item'>
          <a href='#' className='page-link'
           onClick={prePage}>
            Prev
          </a>
        </li>
        {
           numbers.map((n,i)=>(
            <li className={`page-item ${currentPage === n ? 'active' : '' }`} key={i}>
              &nbsp;
              <a href='#' className='page-item'
              onClick={()=>setCurrentPage(n)} >{n}</a>
              &nbsp;
            </li>
           
           ))

        }
         <br />
        <li className='page-item'>
          <a href='#' className='page-link'
           onClick={nextPage}>
            Next
          </a>
        </li>
      </ul>
    </nav>
        </Fragment>
        </>
    )
}

export default CustomerList;