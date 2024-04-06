
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import WatchHistory from './pages/WatchHistory'
import { Route, Routes } from 'react-router-dom'
function App() {
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/watchhistory' element={ <WatchHistory/>}/>
        <Route/>
      </Routes>
      
      
     
      <Footer/>
    </>
  )
}

export default App
