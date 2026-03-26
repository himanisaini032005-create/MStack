import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Page/Home.jsx'
import Login from './Page/Login.jsx'
import Login2 from './Page/Login2.jsx'
import Navbar from './Page/Navbar.jsx'
import Register from './Page/Register.jsx'
import About from './Month/About.jsx'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Navbar/>
<Routes>
<Route path='/Home' element={<Home/>}/>
<Route path='/Login' element={<Login/>}/>
<Route path='/Login2' element={<Login2/>}/>
<Route path='/Register' element={<Register/>}/>
<Route Path='/About' element={<About/>}/>
</Routes>
</BrowserRouter>
)
