import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import 'remixicon/fonts/remixicon.css'
import PreLoader from './components/PreLoader.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreLoader />
    <div className='container mx-auto px-4'>
    <Navbar />
    <App />
    <Footer />
    </div>
  </StrictMode>,
)
