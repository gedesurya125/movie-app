import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const FunctionComponentGetMovies = () => {
  const [movies, setMovies] = useState([])
  const [posts, setPosts] = useState([])
  const [news, setNews] = useState([])
  // this.state = {
  //   movies: []
  // }

  //componentDidMount
  useEffect(() => {
    // getMoviesData("http://www.omdbapi.com/?i=tt3896198&apikey=de2c8530") => keluarnya 1 data
    // getData("http://jsonplaceholder.typicode.com/posts") => filter 10data
    // getData("https://newsapi.org/v2/everything?q=Apple&from=2021-07-15&sortBy=popularity&apiKey=478ebeed86344297a76daa34ad91514c") //10data
    // loadData()
  }, [])

  //asynchronous async await / then -> synchronous
  const getDataNews = async (url) => {
    try {
      //declare variable to save the data
    } catch (error) {
      console.log(error)
    }
  }

  //tanpa asynchronous atau namanya synchronous
  const GetDataPosts = () => {
    //axios
    //setPosts
  }

  const GetDataMovie = () => {
    //axios
    //setMovies
  }


  console.log()

  // const {Actors, Awards, Plot, Title} = movies
  return(
    <div>
      <h1>List Data</h1>
      {/* {JSON.stringify(DataUsers)} */}
      <ol>
        {/* { news.filter((item, index) => index < 10)
        .map(item => 
            <li key={item.id}>{item.title} 
              <a href={item.url} target="_blank" rel="noopener noreferrer">Go to Link</a>
            </li>
              //    {item.title} 
          //   <a href={item.url} target="_blank" rel="noopener noreferrer"> Go to Link</a>
        )} */}
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {news.filter((item, index) => index < 5)
              .map((item) => (
                //  <li key={index}>
                <div className="col">
                  <div className="card" style={{"width":"18rem"}}>
                    <img src={item.urlToImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">Go to Link</a>
                    </div>
                  </div>
                </div>
                //  </li>
              ))}
            </div>
          </div>
        </div>
     
      </ol>
    </div>
    // <div>
    //   <ul>
    //     <li>Film ini Berjudul : {Title}</li>
    //     <li>Para Aktornya : {Actors}</li>
    //     <li>Mempunyai Penghargaan : {Awards}</li>
    //     <li>Dengan Cerita : {Plot}</li>
    //   </ul>
    // </div>
  )
}
