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




    return (
        <div>
            <h1>TEXT</h1>
        </div>
    )
}


export default PostersCatalog