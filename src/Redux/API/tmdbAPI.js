/* 
  To Get List of popular movie by page
  url = https://api.themoviedb.org/3/movie/popular?api_key=8100b713a1925be73991a2897dfa83f5&language=en-US&page=1
  page is run

  to get imagage
  https://image.tmdb.org/t/p/w500/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg <= image addr

  to get movie details
  https://api.themoviedb.org/3/movie/550?api_key=8100b713a1925be73991a2897dfa83f5
*/

import axios from "axios";

const popularMovieAPI = (page) => axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=8100b713a1925be73991a2897dfa83f5&language=en-US&page=${page}`
});

const movieImageAPI = (imagePath) => axios.create({
  baseURL: `https://image.tmdb.org/t/p/w500/${imagePath}`
})

const movieDetailsAPI = (movieId) => axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/${movieId}?api_key=8100b713a1925be73991a2897dfa83f5`
})

const nowPlayingMovieAPI = (page) => axios.create({
  baseURL: `${process.env.REACT_APP_TMDB_URL}/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${page}`
})

export const getPopularMovie = (page) => popularMovieAPI(page).get();
export const getMovieImage = (imagePath) => movieImageAPI(imagePath).get();
export const getMovieDetails = (movieId) => movieDetailsAPI(movieId).get();
export const getNowPlayingMovie = (page) => nowPlayingMovieAPI(page).get();
