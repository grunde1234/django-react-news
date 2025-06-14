import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const AddUserPage = () => {
    const navigate = useNavigate()
    const [formState, setFormState] = useState({
        email: '',
        first_name: '',
        last_name: '',
    })

const handleChange = (e, previous)=>{
    const {name, value} = e.target
    setFormState(previous =>({
        ...previous,
        [name]: value
}))
    
}

const add = async (formData) => {
    try{
        const response = await axios.post('/api/journalist/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        console.log(response)
        toast.success('User added successfully, add an article now!')
    }catch(error){
        alert('Error adding user: ' + error.stack)
        toast.error('Failed to add user. Please try again.')
    }
}

const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send formState to your backend
    const form = new FormData()
    form.append('email', formState.email)
    form.append('first_name', formState.first_name)
    form.append('last_name', formState.last_name)
    console.log('Form submitted:', form);

    add(form)
    navigate('/addnews')
}
  return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-4 m-4 rounded-lg shadow-md max-w-4xl justify-center mx-auto'>
            <h1 className='text-2xl font-bold text-center'>Add User</h1>
            <label htmlFor="email">Email</label>
            <input
            type='email'
            name='email'
            id='email'
            className='text-black'
            onChange={handleChange}
            value={formState.email}
            required
            />
            <label htmlFor="first_name">First Name</label>
            <input
            type='text'
            name='first_name'
            value={formState.first_name}
            onChange={handleChange}
            className='text-black'
            id='first_name'
            required
            />
            <label htmlFor="last_name">Last Name</label>
            <input
            type='text'
            name='last_name'
            value={formState.last_name}
            onChange={handleChange}
            className='text-black'
            id='last_name'
            required
            />
        <button className='bg-blue-500 text-white py-2 px-4 rounded mt-10' type='submit'>Submit</button>
        </form>
  )

}
export default AddUserPage;