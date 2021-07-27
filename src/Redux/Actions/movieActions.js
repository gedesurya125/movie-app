import { GET_MOVIE, ADD_MOVIE, DEL_MOVIE, UPDATE_MOVIE, SET_MOVIE} from "../Reducers/movieReducer";

export const setPopularMovie = (payload) => ({type:SET_MOVIE, payload}); // payload is an array of movies that already fetched
export const deleteMovie = (payload) => ({type: DEL_MOVIE, payload}); // payload is movie id that will be deleted
export const updateMovie = (payload) => ({type: UPDATE_MOVIE, payload}); // payload is an movie object that will be updated
export const addMovie = (payload) => ({type: ADD_MOVIE, payload}); // payload is an movie object that will be added
export const getMovie = (payload, api) => ({type: GET_MOVIE, payload, api}); // payload is page number of movies;