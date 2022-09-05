export const api_key = '9cfdbdaa00f13b9fa6c00efad88bbaab';

const number = Math.floor(Math.random() * 10 + 1);

export default {
  image_url: 'https://image.tmdb.org/t/p/original',
  Trending: `/trending/all/day?api_key=${api_key}&language=pt-BR&page=${number}`,
  TopRated: `/movie/top_rated?api_key=${api_key}&language=pt-BR&page=${number}`,
  ActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28&language=pt-BR`,
  ComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35&language=pt-BR`,
  HorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
  RomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10479`,
  Mystery: `/discover/movie?api_key=${api_key}&with_genres=9648`,
  SciFi: `/discover/movie?api_key=${api_key}&with_genres=878`,
  Western: `/discover/movie?api_key=${api_key}&with_genres=37`,
  Animation: `/discover/movie?api_key=${api_key}&with_genres=16`,
  Tv: `/discover/movie?api_key=${api_key}&with_genres=10770`,
  Serie: `/tv/top_rated?api_key=${api_key}&language=pt-BR&page=${number}`,
  Search: `/search/movie?api_key=${api_key}&query=`,
  Popular: `/movie/popular?api_key=${api_key}&language=pt-BR&page=${number}`,
  NowPlaying: `/movie/now_playing?api_key=${api_key}&language=en-US&page=1`,
  Persons: `person/popular?api_key=${api_key}&language=en-US&page=${number}`
};
