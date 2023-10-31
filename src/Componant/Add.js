import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Employees from './Employees'
import { v4 as uuid } from 'uuid'
import { Link, useNavigate } from 'react-router-dom'

function Add() {
    const [name, setName] = useState([]);
    const [age, setAge] = useState([]);

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name,
        b = age;

        Employees.push({id:uniqueId, Name:a, Age:b});
        history('/')
    }

    return (
        <div>

            <Form className='' style={{ margin: '5rem' }}>
                <div className='form-grup'>
                    <input type='text' className='form-control' placeholder='Enter Name...' onChange={(e) => setName(e.target.value)} />
                    <br />
                    <input type='text' className='form-control' placeholder='Enter Age...' onChange={(e) => setAge(e.target.value)} />
                    <br />
                    <Button type='submit' onClick={(e) => handleSubmit(e)} style={{ width: '100%' }}>Submit</Button>

                </div>

            </Form>
        </div>
    )
}

export default Add