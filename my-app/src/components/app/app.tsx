import { useEffect } from 'react'
import './App.css'
import Request from '../../services/request'
import Banner from '../Banner/Banner'
import Poster from '../Poster/Poster'
import Header from '../Header/Header'
import FilmsCompilation from '../FilmsCompilation/FilmsCompilation'
import React from 'react'



function App() {
  const [state, setState] = React.useState({
    windowWidth: window.innerWidth
  })



  useEffect(() => {
    window.onresize = () => {
      setState(prev => {
        return {
          ...prev,
          windowWidth: window.innerWidth
        }
      })
    }
    console.log('update')
  }, [])

  // useEffect(() => {
  //   const request = Request()
  // }, [])


  return (
    <div className='app'>
      <Header />
      <main className='content'>
        <Banner />
        <section className='posters'>
          <FilmsCompilation />
          <FilmsCompilation />
          <FilmsCompilation />
          <FilmsCompilation />
          <FilmsCompilation />
        </section>
      </main>
    </div>
  )
}




export default App