export default class GalleryService {

    static async getRecource(url) {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, ERROR: ${res.status}`)
        }
        return await res.json()
    }

    static async getAllGenre() {
        const res = await GalleryService.getRecource('https://api.themoviedb.org/3/genre/movie/list?api_key=dcc9acdebadcf222b7588db1d80573d0&language=ru');
        return res.genres
    }

    static async getMovie(id) {
        return await GalleryService.getRecource(`https://api.themoviedb.org/3/movie/${id}?api_key=dcc9acdebadcf222b7588db1d80573d0&language=ru`)
    }

    static async getMovieList(page, sort) {
        const res = await GalleryService.getRecource(`https://api.themoviedb.org/3/discover/movie?api_key=dcc9acdebadcf222b7588db1d80573d0&language=ru&sort_by=${sort}&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`);
        return res.results
    }
}
