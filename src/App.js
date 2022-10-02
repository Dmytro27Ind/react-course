import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";

function App() {
  const [likes, setLikes] = useState(0)
  const [value, setValue] = useState('Input text')

  function increment(){
    setLikes(likes + 1)
  }

  function decrement(){
    setLikes(likes - 1)
  }

  return (
    <div class="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input type="text" value={value} onChange={
        event => setValue(event.target.value)
      }/>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <Counter/>
      <Counter/>
      <Counter/>

      <ClassCounter/>
      <ClassCounter/>
      <ClassCounter/>
    </div>
  );
}

export default App;
