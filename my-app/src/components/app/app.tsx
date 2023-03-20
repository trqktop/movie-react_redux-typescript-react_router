import { useEffect, useState } from 'react'
import './App.css'
import Banner from '../Banner/Banner'
import Poster from '../Poster/Poster'
import Header from '../Header/Header'
import MainPage from '../Pages/MainPage'
import { Route, Routes, Link } from 'react-router-dom'
import PostersCatalog from '../Pages/PostersCatalog'








interface IState {
  data: Array<Object> | null
  events: {
    loading: boolean
    error: boolean
  }
}

function App() {

  return (

    <div className='app'>
      <Header />
      <main className='content'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/movie' element={<PostersCatalog />} />
          <Route path='/serials' element={<PostersCatalog />} />
          <Route path='/cartoons/:1?' element={<PostersCatalog />} />
        </Routes>
      </main>
    </div>

  )
}




export default App