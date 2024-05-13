import { useNavigate } from 'react-router-dom';

export default function AddPostPage() {
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (res.status === 201) {
      navigate('/');
    }
  };


  return (
    <div className='container'>
        <form onSubmit={submitHandler}>
            <div className='mb-3'>
                <lebel htmlFor= 'addTitle' className='form-lebel'>
                    Title
                </lebel>
                <input type='text' className='form-control' id='addTitle' name='title' />
            </div>
            <div className='mb-3'>
                <lebel htmlFor= 'addContent' className='form-lebel'>
                    Body
                </lebel>
                <input type='text' className='form-control' id='addBody' name='body' />
            </div>
                <button type='submit' className='btn btn-primary'>
                    Submit
                </button>
        </form>
    </div>
  );
}
