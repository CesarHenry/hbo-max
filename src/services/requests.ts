export const api_key = '9cfdbdaa00f13b9fa6c00efad88bbaab';

export default {
  Trending: `/trending/all/day?api_key=${api_key}&language=pt-BR`,
  TopRated: `/movie/top_rated?api_key=${api_key}&language=pt-BR&page=1`,
  ActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28&language=pt-BR`,
  ComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35&language=pt-BR`,
  HorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
  RomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10479`,
  Mystery: `/discover/movie?api_key=${api_key}&with_genres=9648`,
  SciFi: `/discover/movie?api_key=${api_key}&with_genres=878`,
  Western: `/discover/movie?api_key=${api_key}&with_genres=37`,
  Animation: `/discover/movie?api_key=${api_key}&with_genres=16`,
  Tv: `/discover/movie?api_key=${api_key}&with_genres=10770`,
  Video: `/videos?api_key=${api_key}&language=en-US`,
  Serie: `tv/top_rated?api_key=${api_key}&language=pt-BR&page=10`,
  Star: `tv/1399/credits?api_key=${api_key}&language=en-US`
};
