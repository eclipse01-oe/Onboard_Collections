import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Signup from './onboarding/signup'
import Login from './onboarding/login'
import Navbar, { BottomNav } from './components/navbar'
import Home from './home/home'

function AppContent() {
  const location = useLocation()
  const hideNav = ["/signup", "/login"].includes(location.pathname)

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
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
