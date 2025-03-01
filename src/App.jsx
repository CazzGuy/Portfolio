import "./App.css"
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

function App() {
  const BrowserRouter = createBrowserRouter([
    {
      "path": "/",
      "element": <><Navbar/> <Home /></>,
    },
    {
      "path": "/about",
      "element": <><Navbar/> <About /></>,
    },
    {
      "path": "/skills",
      "element": <><Navbar/> <Skills /></>,
    },
    
    
    {
      "path": "/contact",
      "element": <><Navbar/> <Contact /></>,
    },
    
  ])

  return (
    <>
      
      <RouterProvider router={BrowserRouter}/>
      
    </>
  )
}

export default App
