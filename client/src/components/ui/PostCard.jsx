import React from 'react'
import { Link } from 'react-router-dom';

export default function PostCard({post, deleteHandler}) {
  return (
    <div className="card">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.body}</p>
    <Link to={`/posts/${post.id}`} className="btn btn-primary">
        Перейти
    </Link>
    <button onClick={() => deleteHandler(post.id)} className="btn btn-danger">
        Удалить
    </button>
  </div>
</div>
  )
}
