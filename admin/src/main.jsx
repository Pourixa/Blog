import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router'
import App from './App.jsx'
import New from './components/newBlog.jsx'
import Manage from './components/manageBlog.jsx'
import Login from './login.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {index:true , element:<Manage/>},
      {path:'/new' , element:<New/>}
    ],
  },
  {
    path:"login",
    element:<Login/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
