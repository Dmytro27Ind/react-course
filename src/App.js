import React, { useState, useRef } from "react";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
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

  const [title, setTitle] = useState('')
  const bodyInputRef = useRef()
  const bodyInputRefSimple = useRef()

  const addNewPost = (event) => {
    event.preventDefault()
    console.log("title = " + title)
    // console.log("MyInput value = " + bodyInputRef.current.value)
    // console.log("MyInput element = " + bodyInputRef.current)
    console.log("input value = " + bodyInputRefSimple.current.value)
    console.log("input element = " + bodyInputRefSimple.current)
  }

  return (
    // appOne;

    <div className="App">
      <form>
        {/*//* Управляемый компонент */}
        <MyInput
          value={title}
          onChange={event => setTitle(event.target.value)}
          type="text"
          placeholder="Post name"
        />
        {/*//* Simple input from html */}
        <input ref={bodyInputRefSimple} type="text"/>
        {/*//* НЕ управляемый компонент. С помощью ref мы получаем ссылку на сам элемент.
           //* bodyInputRef.current == <MyInput ... />
           //* bodyInputRef.current.value == значению в элементе*/}
        {/* <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="Post description"
        /> */}
        {/* <MyButton disabled>Create post</MyButton> */}
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title="List of posts about JS"/>
    </div>
  );
}

export default App;
