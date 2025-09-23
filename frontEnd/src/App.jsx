import React, {useEffect} from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Signup from './onboarding/signup'
import Login from './onboarding/login'
import Navbar, { BottomNav } from './components/navbar'
import Home from './home/home'
import Cart from './components/cart'
import Favorite from './components/favorite'
import Notifications from './components/notifications'
import Tracking from './components/tracking'

function AppContent() {
  const location = useLocation()
  const hideNav = ["/signup", "/login"].includes(location.pathname)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/tracking' element={<Tracking />} />
      </Routes>

      {!hideNav && <BottomNav />}
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  )
}
