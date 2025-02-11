import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register=()=>{
    const[values, setValues]= useState({
        surname:'',
        othername:'',
        DOB:'',
        email:'',
        password:''

    })
    const navigate=useNavigate()
    const handleChanges=(e)=>{
        setValues({...values,[e.target.name]:[e.target.value]})
    }
    const handleSubmit=async (e) => {
        e.preventDefault()
        try {
            const response=await axios.post("http://localhost:3000/auth/register", values)
            if(response.status===201){navigate('/Login')}
        } catch (err) {
            console.log(err)
        }
    }


  return (
    <div className='flex justify-center items-center h-screen'>
        <div className=' shadow-lg px-8 py-5 border w-96'>
            <h2 className='text.lg font-bold  mb-4'> Register</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label htmlFor="surname" className='block text-gray-800'> Surname</label>
                    <input type="text" placeholder='Enter Surname' className='w-full px-3 py-2' name='surname' onChange={handleChanges} />
                </div>
                <div className='mb-4'>
                    <label htmlFor="othername" className='block text-gray-800'> Othername</label>
                    <input type="text" placeholder='Enter othername' className='w-full px-3 py-2'name='othername' onChange={handleChanges} />
                </div>
                <div className='mb-4'>
                    <label htmlFor="DOB" className='block text-gray-800'> DOB</label>
                    <input type="date" className='w-full px-3 py-2' name='DOB' onChange={handleChanges}/>
                </div>
                <div className='mb-4'>
                    <label htmlFor="email" className='block text-gray-800' > Email</label>
                    <input type="email" placeholder='Enter your email address' className='w-full px-3 py-2' name='email' onChange={handleChanges} />
                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className='block text-gray-800'> Password</label>
                    <input type="password" placeholder='Enter password' className='w-full px-3 py-2' name='password' onChange={handleChanges} />
                </div>
                <div className='mb-4'>
                    <button className='w-full bg-green-600 text-white py-2'>Register</button> 
                </div>
            </form>
        </div>
    </div>
  )
}
export default Register