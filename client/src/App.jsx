import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import MainPage from './components/pages/MainPage'
import OnePostPage from './components/pages/OnePostPage'
import AddPostPage from './components/pages/AddPostPage'
import UpdatePostPage from './components/pages/UpdatePostPage'

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
        element:<OnePostPage />
      },
      {
        path:'/posts/:postId/update',
        element:<UpdatePostPage />
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
