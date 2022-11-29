import React from 'react';
import PostItem from './PostItem';

function PostList({posts, title, remove}) {

    if(!posts.length){
        return (
            <h1 style={{textAlign: 'center'}}>Posts don't found</h1>
        );
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post, index) => {
                //* map return array. React transform this array to sequence of objects on page.
                return <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
            })}
        </div>
    );
}

export default PostList;