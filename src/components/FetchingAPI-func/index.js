import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FunctionComponentGetMovies = () => {
  const [movies, setMovies] = useState([]);
  const [posts, setPosts] = useState([]);
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState({
    postFilter: 10
  })




  //asynchronous async await / then -> synchronous
  const getDataNews = async (url) => {
    try {
      const res = await axios.get(url);
      setNews(res.data.articles);
    } catch (error) {
      console.log(error)
    }
  }

  const getDataPost = async (url) => {
    try {
      const res = await axios.get(url);
      setPosts(res.data);
    } catch (err) {
      console.log(err)
    }
  }

  const getMoviesData = async (url) => {
    try {
      const res = await axios.get(url);
      setMovies(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMoviesData("http://www.omdbapi.com/?i=tt3896198&apikey=de2c8530") // => keluarnya 1 data
    getDataPost("http://jsonplaceholder.typicode.com/posts")// => filter 10data
    getDataNews("https://newsapi.org/v2/everything?q=Apple&from=2021-07-15&sortBy=popularity&apiKey=478ebeed86344297a76daa34ad91514c") //10data
    // loadData()
  }, [])


  const postToDisplay = posts.filter((post, index) => index < 10).map(post => (
    <div className="card text-dark m-3" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
        <p className="card-text">{post.body}</p>
        <a href="#like" className="card-link btn btn-primary">Like</a>
        <a href="#share" className="card-link btn btn-secondary">Share</a>
      </div>
    </div>
  ))

  const newsToDisplay = news.map(berita => {
    const dt = new Date(berita.publishedAt);
    const str = dt.toDateString();

    return (
      <div className="card m-3" style={{ width: "25rem" }}>
        <img src={`${berita.urlToImage}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{berita.title}</h5>
          <p className="card-text">{berita.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Author : {berita.author}</li>
          <li className="list-group-item">Published At : {str}</li>
        </ul>
        <div className="card-body text-center">
          <a href={berita.url} className="card-link btn btn-primary">details</a>
        </div>
      </div>
    )
  }
  )
  return (
    <div>
        {/* ========================================== */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-success position-sticky top-0 w-full" style={{
          zIndex: '1'
        }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#home ">LIST DATA</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#movies">Movies</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#posts">Post</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#news">News</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* ========================================== */}
      <div className="container-fluid min">
        {/* <h1 className="text-center">List Data</h1> */}





        {/* MOVIE DATA */}

        <div id="movies" className="row bg-secondary p-3">
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <h2>Movie Data</h2>
          </div>
          <div className="col-md-7 d-flex justify-content-center">

            {/* <div className="card" style={{ width: "18rem" }}>
            <img src={`${movies.Poster}`} className="card-img-top" alt="none" />
            <div class="card-body">
              <h5 class="card-title">{movies.Title}</h5>
              <p class="card-text">{movies.Plot}</p>
              <a href="#a" className="btn btn-primary">{movies.Released}</a>
            </div>
          </div> */}

            {/* HORIZONTAL CARD */}

            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={`${movies.Poster}`} className="img-fluid rounded-start" alt="none" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{movies.Title}</h5>
                    <p className="card-text">{movies.Plot}</p>
                    <p className="card-text"><small className="text-muted">{movies.Released}</small></p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* POSTS DATA */}
        <div id="posts" className="row bg-primary text-light p-3 text-center">
          <div className="col-12">
            <h2>POST DATA</h2>
            <div>
              <input className="form-control" type="text" value={filter.postFilter} onChange={(e) => {setFilter(state => ({...state, postFilter: e.target.value}))}} />
            </div>
            <div className="d-flex flex-wrap justify-content-center align-items-start">
              {postToDisplay}

            </div>
          </div>
        </div>

        {/* NEWS FOR YOU */}

        <div id="news" className="row bg-warning p-3">
          <h2 className="text-center">SOME NEWS FOR YOU</h2>
          <div id="news" className="d-flex flex-wrap justify-content-center align-items-start">
            {newsToDisplay}
          </div>
        </div>

      </div>
    </div>

  )
}

export default FunctionComponentGetMovies;
