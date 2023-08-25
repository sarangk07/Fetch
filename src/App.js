// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([])

  useEffect(()=> {
    fetch('https://dummyjson.com/quotes')
    .then(response => response.json())
    .then(value => {
      console.log(value);
      Array.isArray(value.quotes)
      ?setPosts(value.quotes.slice(0,10))
      :console.log("data is not available");
    })
    .catch(error => {
      console.log("Fetching Data Error:",error);
    })
  },[])
  return (
    <div>
      <h1 className='head'>DATA LIST</h1>
      {posts.map((post, i) =>(
      <h1 key={i}>{post.quote}</h1>
      ))}
    </div>
  );
}

export default App;
