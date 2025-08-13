import Nav from './components/Nav'
import Footer from './components/Footer' 
import { Route, Routes } from 'react-router-dom'


import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'
const MyApp = () => {
  return (
    <div className='wrap'>
        {/* 選單 */}
        <Nav/>
        <hr />
        <Routes>
            {/* 首頁 */}
            <Route path='/' element={<Home/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/News' element={<News/>}></Route>
        </Routes>
        {/* footer區 */}
        <Footer/>

    </div>
  )
}

export default MyApp