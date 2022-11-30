import axios from "axios";
import React, { useState, useRef, useMemo, useEffect } from "react";
import PostService from "./API/PostService";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import Loader from "./components/UI/Loader/Loader";
import MyModal from "./components/UI/MyModal/MyModal";
import { usePosts } from "./hooks/usePosts";
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

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
  const [isPostsLoading, setIsPostsLoading] = useState(false)

  useEffect(() => {
    console.log('useEffect component did mount')
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  }

  async function fetchPosts() {
    setIsPostsLoading(true)
    setTimeout(async () => {
      const posts = await PostService.getAll()
      setPosts(posts)
      setIsPostsLoading(false)
    }, 1000)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    // appOne;

    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
        : <PostList remove={removePost} posts={sortedAndSearchPosts} title="List of posts about JS"/>
      }
    </div>
  );
}

export default App;
