import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function EditPostPage() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', body: '' });

  useEffect(() => {
    // Загружаем данные поста при монтировании компонента
    const fetchPostData = async () => {
      const res = await fetch(`/api/posts/${postId}`);
      const data = await res.json();
      setFormData({ title: data.title, body: data.body });
    };

    fetchPostData();
  }, [postId]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (res.status === 200) {
      navigate('/');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='container'>
      <form onSubmit={submitHandler}>
        <div className='mb-3'>
          <label htmlFor='editTitle' className='form-label'>
            Title
          </label>
          <input
            type='text'
            className='form-control'
            id='editTitle'
            name='title'
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='editBody' className='form-label'>
            Body
          </label>
          <input
            type='text'
            className='form-control'
            id='editBody'
            name='body'
            value={formData.body}
            onChange={handleInputChange}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}
