import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Employees from './Employees'
//import { v4 as uuid } from 'uuid'
import {  useNavigate } from 'react-router-dom'


function Edit() {
  const [name, setName] = useState([]);
  const [age, setAge] = useState([]);
  const [id,setId]= useState([]);


  let history =useNavigate();

  var index = Employees.map(function(e){
    return e.id
  }).indexOf(id);

  const handleSubmit=(e)=>{
    e.preventDefault();

    let a =Employees[index];
     
    a.Name=name;
    a.Age =age;
  

    history('/')
  }
   useEffect(()=>{
    setName(localStorage.getItem('Name'))
    setAge(localStorage.getItem('Age'))
    setId(localStorage.getItem('Id'))
   },[])
  


  return (
    <div>
      
      <Form className='' style={{ margin: '5rem' }}>
                <div className='form-grup'>
                    <input type='text' className='form-control' placeholder='Enter Name...' value={name} 
                    required onChange={(e) => setName(e.target.value)} />
                    <br />
                    <input type='text' className='form-control' placeholder='Enter Age...' value={age}
                    required onChange={(e) => setAge(e.target.value)} />
                    <br />
                    <Button type='submit' onClick={(e) => handleSubmit(e)} style={{ width: '100%' }}>Update</Button>

                </div>

            </Form>
    </div>
  )
}

export default Edit