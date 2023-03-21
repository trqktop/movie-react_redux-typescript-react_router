import React from 'react'
import Header from '../Header/Header'
const Layout = (props: any) => {
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