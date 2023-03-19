interface IFetchHeader {
    headers: {
        [index: string]: string;
    }
}

const Request = () => {
    const _baseUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/';
    const _header: IFetchHeader = {
        headers: {
            'X-API-KEY': '5b1fdd9f-4864-4982-9d0e-b0da98fef63c',
            'Content-Type': 'application/json',
        }
    }


    async function _getResource(url: string) {
        const resource = await fetch(url, _header)
            .then(res => _checkResponsive(res, url))
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
        return _getResource(url)
    }


    function getFilm(id: number) {
        const url = `${_baseUrl}films/${id}`
        return _getResource(url)
    }


    function getPremieres() {
        const url = `${_baseUrl}films/premieres`
        return _getResource(url)
    }


    return {
        getFilms,
        getFilm,
        getPremieres
    }
}


export default Request