import React from 'react'
import { useActionData, useAsyncValue, useLoaderData, useParams } from 'react-router-dom'
import Header from '../Header/Header'
const Layout = (props: any) => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className='app'>
            <Header />
            <main className='content'>
                {props.children}
            </main>
        </div>
    )
}

export default Layout