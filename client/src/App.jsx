import Header from './components/header'
import './styles/App.css'
import { Outlet } from 'react-router'
import Footer from './components/footer'
import { useLocation } from 'react-router'

function App() 
{
    const location = useLocation()
    return <>
    <Header location={location}/>
    <Outlet />
    <Footer/>
    </>
}

export default App
