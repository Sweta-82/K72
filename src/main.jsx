import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stairs from '../components/common/Stairs.jsx'
import Navcontext from './context/Navcontext.jsx'
import LoadingPage from '../components/common/LoadingPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <Stairs> */}
    <Navcontext>
    <LoadingPage/>
    </Navcontext>
  {/* </Stairs> */}
  </BrowserRouter>
  ,
)
