import React, { useEffect, useMemo, useState } from 'react'
import Request from '../../services/request'
import Poster from '../Poster/Poster'
const PostersCatalog = () => {
    const request = useMemo(() => Request(), [])
    const [state, setState] = useState<any>({
        data: null,
        loading: true
    })
    useEffect(() => {
        request.getPopularFilms()
            .then(res => setState((prev: any) => {
                return ({
                    ...prev,
                    data: res.films,
                    loading: false
                })
            }))
    }, [])





    if (state.loading) {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>loading...</div>
        )
    }
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {state.data.map((elem: any) => {
                const data = elem
                return <li key={elem.filmId}><Poster data={data} /></li>
            })}
        </div>
    )
}


export default PostersCatalog