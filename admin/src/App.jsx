import { useState } from 'react'
import './styles/App.css'
import { Outlet } from 'react-router'
import Header from './components/header'
import Footer from './components/footer'
function App() {
  const isLoggedIn = true;
  return <>
    <Header/>
    <Outlet context={isLoggedIn}/>
    <Footer/>
  </>
}

export default App
