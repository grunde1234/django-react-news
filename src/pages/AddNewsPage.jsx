import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AddNewsPage = ({ addNews }) => {
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    location: '',
    published_on: '',
    author_email: '',
    category_name: ''
  });

  const imageRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(formState).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (imageRef.current?.files[0]) {
      formData.append('image_select', imageRef.current.files[0]);
    }

    addNews(formData);
    navigate('/news');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 m-4 rounded-lg shadow-md max-w-4xl justify-center mx-auto">
      <h1 className="text-2xl font-bold text-center">Add News</h1>

      {['title', 'description', 'location', 'published_on', 'author_email', 'category_name'].map((field) => (
        <div key={field}>
          <label htmlFor={field}>{field.replace('_', ' ').toUpperCase()}</label>
          {field === 'description' ? (
            <textarea
              className="text-black"
              id={field}
              name={field}
              value={formState[field]}
              required
              onChange={handleChange}
            />
          ) : (
            <input
              className="text-black"
              id={field}
              name={field}
              type={field === 'published_on' ? 'date' : field === 'author_email' ? 'email' : 'text'}
              value={formState[field]}
              required
              onChange={handleChange}
            />
          )}
        </div>
      ))}

      <label htmlFor="image_select">Image Select</label>
      <input className="text-black" type="file" id="image_select" ref={imageRef} required />

      <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600" type="submit">
        Submit News
      </button>
    </form>
  );
};

export default AddNewsPage;
