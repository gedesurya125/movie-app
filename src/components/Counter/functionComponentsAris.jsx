import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const FunctionComponents = () => {
  return (
    <div>
      <h1>ini dari function component</h1>
    </div>
  )
}

export const FunctionComponentGetMovies = () => {
  const [movies, setMovies] = useState([])
  const [posts, setPosts] = useState([])
  const [news, setNews] = useState([])
  // this.state = {
  //   movies: []
  // }

  //componentDidMount
  useEffect(() => {
    // getMoviesData("http://www.omdbapi.com/?i=tt3896198&apikey=de2c8530")
    // getData("http://jsonplaceholder.typicode.com/posts")
    getData("https://newsapi.org/v2/everything?q=Apple&from=2021-07-15&sortBy=popularity&apiKey=478ebeed86344297a76daa34ad91514c")
  }, [])

  const getData = async (url) => {
    try {
      const res = await axios.get(url);
      const data = await res.data;
      // setMovies(data)
      // setPosts(data)
      setNews(data.articles)
    } catch (error) {
      console.log(error)
    }
  }


  console.log(news)

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
        )} */}
        {news.map((item, index) => (
           <li key={index}>
             {item.title} 
            <a href={item.url} target="_blank" rel="noopener noreferrer"> Go to Link</a>
            </li>
        ))}
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
