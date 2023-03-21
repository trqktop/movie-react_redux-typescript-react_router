interface IFetchHeader {
    headers: {
        [index: string]: string;
    }
}

const Request = () => {
    const _baseUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/';
    const _header: IFetchHeader = {
        headers: {
            'X-API-KEY': '757f6afa-954c-4484-9629-04d0c3a9a842',//'5b1fdd9f-4864-4982-9d0e-b0da98fef63c'
            'Content-Type': 'application/json',
        }
    }


    async function _getResource(url: string) {
        const resource = await fetch(url, _header)
            .then(res => _checkResponsive(res, url));
        return resource;
    }


    async function _checkResponsive(res: any, url: string) {
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        const result = await res.json();
        return result
    }


    function getFilms() {
        const url = _baseUrl + 'films'
        const result = _getResource(url)
        return result.then(result => result.items.map((item: any) => _transform(item)))
    }


    function getFilm(id: number) {
        const url = `${_baseUrl}films/${id}`
        const result = _getResource(url)
        return result
    }



    function getPremieres() {
        const url = `${_baseUrl}films/premieres`
        return _getResource(url)
    }


    function getPopularFilms() {
        const url = `${_baseUrl}films/top?type=TOP_100_POPULAR_FILMS&page=1`
        const result = _getResource(url)
        return result.then(result => result.films.map((item: any) => _transform(item)))
    }

    function _transform(data: any) {
        const { kinopoiskId,
            nameRu,
            posterUrl,
            posterUrlPreview,
            ratingImdb,
            ratingKinopoisk }: any = { ...data }
        return {
            kinopoiskId,
            nameRu,
            posterUrl,
            posterUrlPreview,
            ratingImdb,
            ratingKinopoisk
        }
    }




    return {
        getFilms,
        getFilm,
        getPremieres,
        getPopularFilms
    }
}


export default Request