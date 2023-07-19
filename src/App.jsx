import Menu from './components/Menu'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Programs from './pages/Programs'
import Blog from './pages/Blog'
import Store from './pages/Store'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <main className='w-full h-screen bg-gray-light'>
        <div className='max-w-5xl m-auto'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/sobre-mi' element={<AboutMe />}/>
            <Route path='/programas' element={<Programs />}/>
            <Route path='/blog' element={<Blog />}/>
            <Route path='/tienda' element={<Store />}/>
            <Route path='/login' element={<Login />}/>
          </Routes> 
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
