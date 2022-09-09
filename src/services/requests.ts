export const api_key = '9cfdbdaa00f13b9fa6c00efad88bbaab';

const number = Math.floor(Math.random() * 10 + 1);

export default {
  image_url: 'https://image.tmdb.org/t/p/original',
  ActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28&language=pt-BR`,
  Animation: `/discover/movie?api_key=${api_key}&with_genres=16&language=pt-BR`,
  ComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35&language=pt-BR`,
  HorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27&language=pt-BR`,
  Mystery: `/discover/movie?api_key=${api_key}&with_genres=9648&language=pt-BR`,
  NowPlaying: `/movie/now_playing?api_key=${api_key}&language=en-US&page=1`,
  Persons: `person/popular?api_key=${api_key}&language=en-US&page=${number}`,
  Popular: `/movie/popular?api_key=${api_key}&language=pt-BR&page=${number}`,
  RomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10479&language=pt-BR`,
  Serie: `/tv/top_rated?api_key=${api_key}&language=pt-BR&page=${number}`,
  Search: `/search/movie?api_key=${api_key}&query=`,
  SerieLatest: `/tv/on_the_air?api_key=${api_key}&language=en-US&page=${number}`,
  SerieTopRated: `/tv/top_rated?api_key=${api_key}&language=pt-BR&page=50`,
  SciFi: `/discover/movie?api_key=${api_key}&with_genres=878&language=pt-BR`,
  Trending: `/trending/all/day?api_key=${api_key}&language=pt-BR&page=${number}`,
  TopRated: `/movie/top_rated?api_key=${api_key}&language=pt-BR&page=${number}`,
  Tv: `/discover/movie?api_key=${api_key}&with_genres=10770&language=pt-BR`,
  Western: `/discover/movie?api_key=${api_key}&with_genres=37&language=pt-BR`
};
