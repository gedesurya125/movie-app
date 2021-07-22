import React, { Component } from 'react';
import './fetchingAPI.css';

class ClassComponentsLifecycle extends Component {
  constructor(){
    super();
    this.state = {
      data : [],
      filter: 1,
    }
    this.loadData = this.loadData.bind(this);
  }

  //componentDidMount
  componentDidMount(){
    // this.setState = {
    //   data: "sudah ada"
    // }
    //memanggil fungsi untuk fetch(komunikasi) api
    this.loadData("https://jsonplaceholder.typicode.com/posts");
  }

  //componentDidUpdate
  //componentWillUnmount

  loadData(url){
    return fetch(url).then(res => {
      if(!res.ok) throw Error(res.statusText);
      return res.json()
    }).then( data => this.setState({data})).catch(err => console.log('Ada error guys',err));
  }

  
  // render
  render() {
    // console.log(this.state.data);
    const listPost = this.state.data.filter((post, index) => index < this.state.filter).map((post, index) => (
    <li key={index}>
      <ol>
        <li>Title : {post.title}</li>
        <li>Content : {post.body}</li>
      </ol>
    </li>
    ))

    return (
      <div>
        <h1>List Post</h1>
        <form>
          <input 
            id="filter" 
            min="1" 
            max={this.state.data.length} 
            className="form-input" name="filter" 
            type="number" value={this.state.filter} 
            onChange={(e) => this.setState({filter: e.target.value})}
          />

          <label htmlFor="filter">&nbsp; Post to Display 
            <span style={{color: "red", fontWeight: "bold"}}>
              {this.state.filter > this.state.data.length && `Warning: Maximum Post Is ${this.state.data.length}`}
            </span>
          </label>
          
        </form>
          <ol className="dataPost">
            {listPost}
          </ol>
      </div>
    )
  }
}

export default ClassComponentsLifecycle
