import React from 'react';
import PostItem from './PostItem';

function PostList({posts, title}) {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post, index) => {
                //* map return array. React transform this array to sequence of objects on page.
                return <PostItem number={index + 1} post={post} key={post.id}/>
            })}
        </div>
    );
}

export default PostList;