export default class GalleryService {

    static async getRecource (url) {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, ERROR: ${res.status}`)
      }
      const body = await res.json();
        return body
    }

    async getAllGenre(){
      const res = await GalleryService.getRecource('https://api.themoviedb.org/3/genre/movie/list?api_key=dcc9acdebadcf222b7588db1d80573d0&language=ru');
      return res.genres
    }

     getMovie(id){
      return GalleryService.getRecource(`https://api.themoviedb.org/3/movie/${id}?api_key=dcc9acdebadcf222b7588db1d80573d0&language=ru`)
    }

   async getMovieList(page, sort){
      const res = await GalleryService.getRecource(`https://api.themoviedb.org/3/discover/movie?api_key=dcc9acdebadcf222b7588db1d80573d0&language=ru&sort_by=${sort}&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`);
      return res.results
    }

  }

 /* const movie = new GalleryService();

  movie.getMovieList(1,'popularity.desc')
  .then((body) => console.log(body));

  movie.getMovie(337404)
  .then((body) => console.log(body));

  movie.getAllGenre()
  .then((body) => console.log(body));
*/
