import React, { useEffect, useState, useContext, createContext, } from 'react'
import './App.css'
import Banner from '../Banner/Banner'
import Poster from '../Poster/Poster'
import Header from '../Header/Header'
import MainPage from '../Pages/MainPage'
import { Route, Routes, Link } from 'react-router-dom'
import PostersCatalog from '../Pages/PostersCatalog'
import Request from '../../services/request'
import { BrowserRouter } from 'react-router-dom';
const request = Request()






interface IState {
  data: Array<Object> | null
  events: {
    loading: boolean
    error: boolean
  }
}

function App() {
  const { getFilms,
    getFilm,
    getPremieres,
    getPopularFilms,
  } = request

  return (
    <div className='app'>
      {/* <ServiceContext.Provider value={request}> */}
      <Header />
      <main className='content'>
        <Banner />
      </main>
      {/* </ServiceContext.Provider> */}
    </div>

  )
}





export default App