import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'


export default function OnePostPege() {
  const {postId} = useParams();
  const [post, setPosts] = useState(null);

  useEffect(() => {
    fetch(`/api/posts/${postId}`)
    .then(res => res.json())
    .then(setPosts)
  }, []);

  if (!post) return <h2>Loading...</h2>;

    return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h2>{post.title}</h2>
                </div>
                <div className='col-3'>
                    <h5>{new Date(post.createdAt).toLocaleDateString('ru-RU')}</h5>
                </div>
                <div className='col-12'>
                    <p>{post.body}</p>
                </div>
            </div>
        </div>
    </div>
  );
}
