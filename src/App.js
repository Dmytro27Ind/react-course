import React, { useState } from "react";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
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
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'},
  ])

  return (
    // appOne;

    <div className="App">
      <form>
        <input type="text" placeholder="Post name"/>
        <input type="text" placeholder="Post description"/>
        {/* <MyButton disabled>Create post</MyButton> */}
        <MyButton>Create post</MyButton>
      </form>
      <PostList posts={posts} title="List of posts about JS"/>
    </div>
  );
}

export default App;
