import React, { useState, useRef } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

function PostForm({create}) {
    const [post, setPost] = useState({title: '', body: ''})
    // const bodyInputRef = useRef()
    // const bodyInputRefSimple = useRef()

    const addNewPost = (event) => {
        event.preventDefault()
        const newPost = { ...post, id: Date.now() }
        create(newPost)
        setPost({title: '', body: ''})

        // console.log("MyInput value = " + bodyInputRef.current.value)
        // console.log("MyInput element = " + bodyInputRef.current)
        // console.log(bodyInputRef.current)
        // console.log("input value = " + bodyInputRefSimple.current.value)
        // console.log("input element = " + bodyInputRefSimple.current)
        // console.log(bodyInputRefSimple.current)
    }

    return (
        <form>
            {/*//* Управляемый компонент */}
            <MyInput
                value={post.title}
                onChange={event => setPost({...post, title: event.target.value})}
                type="text"
                placeholder="Post name"
            />
            <MyInput
                value={post.body}
                onChange={event => setPost({...post, body: event.target.value})}
                type="text"
                placeholder="Post description"
            />
            {/*//* Simple input from html */}
            {/* <input ref={bodyInputRefSimple} type="text"/> */}
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
    );
}

export default PostForm;