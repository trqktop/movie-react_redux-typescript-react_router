import { useEffect, useState } from 'react'
import Banner from '../Banner/Banner'
import { Route, Routes, Link } from 'react-router-dom'

interface IState {
    data: Array<Object> | null
    events: {
        loading: boolean
        error: boolean
    }
}

function MainPage() {
    return (
        <Banner />
    )
}




export default MainPage