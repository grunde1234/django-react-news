import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AddNewsPage = ({ addNews }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [published_on, setPublished_on] = useState('');
  const [author_email, setAuthor_email] = useState('');
  const [category_name, setCategory_name] = useState('');
  const imageRef = useRef(null);  // <-- useRef for file

  const navigate = useNavigate();

  const submitform = (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('location', location);
  formData.append('published_on', published_on);
  formData.append('author_email', author_email);
  formData.append('category_name', category_name);

  if (imageRef.current && imageRef.current.files[0]) {
    formData.append('image_select', imageRef.current.files[0]);
  }
  
  addNews(formData);
  navigate('/news');
};


  return (
    <form onSubmit={submitform} className='flex flex-col gap-4 p-4 m-4 rounded-lg shadow-md max-w-4xl justify-center mx-auto'>
      <h1 className='text-2xl font-bold text-center'>Add News</h1>
      {/* form fields */}
      <label htmlFor="title">Title</label>
      <input className='text-black' id="title" value={title} required onChange={(e)=>setTitle(e.target.value)} />

      <label htmlFor="description">Description</label>
      <textarea className='text-black' id="description" value={description} required onChange={(e)=>setDescription(e.target.value)} />

      <label htmlFor="location">Location</label>
      <input className='text-black' id="location" value={location} required onChange={(e)=>setLocation(e.target.value)} />

      <label htmlFor="published_on">Published On</label>
      <input className='text-black' type="date" id="published_on" value={published_on} required onChange={(e)=>setPublished_on(e.target.value)} />

      <label htmlFor="image_select">Image Select</label>
      <input className='text-black' type="file" id="image_select" ref={imageRef} required />

      <label htmlFor="author_email">Author Email</label>
      <input className='text-black' id="author_email" value={author_email} required onChange={(e)=>setAuthor_email(e.target.value)} />
      <label htmlFor="category_name">Category Name</label>
      <input 
        className='text-black'
        id="category_name"
        name="category_name"
        type="text"
        value={category_name}
        required
        onChange={(e)=>setCategory_name(e.target.value)}
      />


      <button className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 mt-4' type="submit">
        Submit News
      </button>
    </form>
  );
};

export default AddNewsPage;
/* USER ACTION
   |
   v
[React Form (AddNewsPage.jsx)]
   - User fills form
   - File selected via imageRef
   - On submit -> FormData built
   - Calls addNews(formData)
   |
   v
[addNews() Function in App.jsx]
   - Axios POST
   - POST /api/articles/add
   - Headers: multipart/form-data
   |
   v
[Backend Django REST API (views.py)]
   - Receives multipart/form-data
   - Uses ArticleSerializer to validate + save
   - Validates:
      - author_email → JournalistModel (ForeignKey)
      - category_name → CategoryModel (ForeignKey)
      - image_select → ImageField
   - Saves data to DB
   |
   v
[Database (PostgreSQL / SQLite / MySQL)]
   - Stores ArticleModel instance
   - Image file saved to media directory
   |
   v
[Response]
   - 201 Created or Error (400, etc)
   |
   v
[React Axios Response]
   - Success → navigate('/news')
   - Error → console.error()
 */


/*import React, { useState, useRef } from 'react';
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
  */