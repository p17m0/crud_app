import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import MainPage from './components/pages/MainPage'
import OnePostPege from './components/pages/OnePostPege'
import AddPostPage from './components/pages/AddPostPage'

function App() {
 const routerConfig =[
  {
    element:<Layout />,
    children:[
      {
        path:'/',
        element:<MainPage />
      },
      {
        path:'/posts/:postId',
        element:<OnePostPege />
      },
      {
        path:'/posts/add',
        element:<AddPostPage />
      },
    ]
  }
 ];

 const router = createBrowserRouter(routerConfig)

  return  <RouterProvider router={router} />

  
}

export default App
