import React, { useState, useRef, useMemo } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css'

function App() {

  //* first app
  // const [likes, setLikes] = useState(0)
  // const [value, setValue] = useState('Input text')

  // function increment(){
  //   setLikes(likes + 1)
  // }
  // function decrement(){
  //   setLikes(likes - 1)
  // }
  // // eslint-disable-next-line
  // const appOne = <div class="App">
  //   <h1>{likes}</h1>
  //   <h1>{value}</h1>
  //   <input type="text" value={value} onChange={
  //     event => setValue(event.target.value)
  //   }/>
  //   <button onClick={increment}>Increment</button>
  //   <button onClick={decrement}>Decrement</button>

  //   <Counter/>
  //   <Counter/>
  //   <Counter/>

  //   <ClassCounter/>
  //   <ClassCounter/>
  //   <ClassCounter/>
  // </div>;

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Des'},
    {id: 2, title: 'React', body: 'Native'},
    {id: 3, title: 'NodeJS', body: 'Backend'},
  ])
  const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPosts = useMemo(() => {
    console.log('call getSortedPosts()')
    if(filter.sort){
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    // appOne;

    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {sortedAndSearchPosts.length !== 0
        ? <PostList remove={removePost} posts={sortedAndSearchPosts} title="List of posts about JS"/>
        : <h1 style={{textAlign: 'center'}}>Posts don't found</h1>
      }
    </div>
  );
}

export default App;
