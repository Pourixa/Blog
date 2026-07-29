import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router';
import App from './App.jsx'
import Home from './components/home.jsx';
import Signup from './components/signup.jsx';
import Login from './components/login.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {index:true,element:<Home/>},
      {path:"signup" , element:<Signup/>},
      {path:"login" , element:<Login/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
