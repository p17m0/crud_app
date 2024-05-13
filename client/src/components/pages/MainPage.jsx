import React, { useEffect, useState } from 'react'
import PostCard from '../ui/PostCard'

export default function MainPage() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('/api/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);

  const deleteHandler = async (postId) =>{
    const res = await fetch(`/api/posts/${postId}`, {
      method: 'DELETE'
    })
    if(res.status === 204){
      setPosts((prev) => prev.filter((post) => post.id !== postId))
    }
  };

  return (
    <div className='row'>
    {posts.map((post) => (
      <div key={post.id} className='col-4'>
        <PostCard post={post} deleteHandler={deleteHandler} />
      </div>
    ))}
  </div>
  );
}
