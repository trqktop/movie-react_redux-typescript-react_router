import React, { useEffect, useMemo, useState, useContext, useLayoutEffect } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
// import Request from '../../services/request'
import Poster from '../Poster/Poster'





const RenderSkeletons = () => {
    return <div style={{ color: 'red', fontSize: '90px' }}>skeletons</div>
}


const RenderItems = ({ data }: any) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {data.map((elem: any, index: any) => {
                return <li key={index}><Poster data={elem} /></li>
            })}
        </div>
    )
}

const PostersCatalog = (props: any) => {

    const { getData }: any = { ...props }
    const [state, setState] = useState({
        data: null,
        events: {
            loading: true,
            error: false
        }
    })
    const { data, events } = { ...state }
    const { loading, error } = { ...events }

    // useLayoutEffect(() => {
    //     getData()
    //         .then((res: any) => (
    //             setState(state => (
    //                 {
    //                     ...state,
    //                     data: res,
    //                     events: {
    //                         loading: false,
    //                         error: false
    //                     }
    //                 }
    //             ))
    //         ))
    // }, [])
    const skeleton = loading ? <RenderSkeletons /> : null
    const hasData = (!loading && !error)

    const content = hasData ? <RenderItems data={data} /> : null
    return (
        <>
            {skeleton}
            {content}
        </>
    )
}


export default PostersCatalog