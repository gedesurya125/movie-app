export const ADD_MOVIE = "ADD_MOVIE";
export const DEL_MOVIE = "DEL_MOVIE";
export const UPDATE_MOVIE = "UPDATE_MOVIE";
export const SET_MOVIE = "SET_MOVIE";
export const GET_MOVIE = "GET_MOVIE"; // this will be use in redux saga


const initialState = [{
  "adult": false,
  "backdrop_path": "/8s4h9friP6Ci3adRGahHARVd76E.jpg",
  "genre_ids": [
    16,
    35,
    10751,
    878
  ],
  "id": 379686,
  "original_language": "en",
  "original_title": "Space Jam: A New Legacy",
  "overview": "When LeBron and his young son Dom are trapped in a digital space by a rogue A.I., LeBron must get them home safe by leading Bugs, Lola Bunny and the whole gang of notoriously undisciplined Looney Tunes to victory over the A.I.'s digitized champions on the court. It's Tunes versus Goons in the highest-stakes challenge of his life.",
  "popularity": 7153.206,
  "poster_path": "/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg",
  "release_date": "2021-07-08",
  "title": "Space Jam: A New Legacy",
  "video": false,
  "vote_average": 7.8,
  "vote_count": 1230
}]
const movieReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_MOVIE: return [...state, action.payload]; // payload is an object of a movie
    case DEL_MOVIE: return state.filter(mov => mov.id !== action.payload) // payload is an id of a movie that will be deleted
    case UPDATE_MOVIE: return state.map(mov => { // payload is an object of movie that will be updated
      const {
        adult,
        backdrop_path,
        genre_ids,
        id,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        release_date,
        title,
        video,
        vote_average,
        vote_count
      } = action.payload;
      if(mov.id !== id) return mov;
      return{
        ...mov,
        adult,
        backdrop_path,
        genre_ids,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        release_date,
        title,
        video,
        vote_average,
        vote_count
      }
    });
    case SET_MOVIE: return action.payload // payload is an array of all movie
    default: return state;
  }
}

export default movieReducer;

