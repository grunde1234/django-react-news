import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddUserPage = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: '',
    first_name: '',
    last_name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addUser = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/articles/journalist/`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response);
      toast.success('User added successfully, add an article now!');
      navigate('/addnews'); // move after successful submit
    } catch (error) {
      console.error('Error adding user:', error);
      toast.error('Failed to add user. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.entries(formState).forEach(([key, value]) => {
      form.append(key, value);
    });

    addUser(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 m-4 rounded-lg shadow-md max-w-4xl justify-center mx-auto"
    >
      <h1 className="text-2xl font-bold text-center">Add User</h1>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        className="text-black"
        value={formState.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="first_name">First Name</label>
      <input
        type="text"
        name="first_name"
        id="first_name"
        className="text-black"
        value={formState.first_name}
        onChange={handleChange}
        required
      />

      <label htmlFor="last_name">Last Name</label>
      <input
        type="text"
        name="last_name"
        id="last_name"
        className="text-black"
        value={formState.last_name}
        onChange={handleChange}
        required
      />

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded mt-10"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default AddUserPage;
