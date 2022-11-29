import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
            <TransitionGroup>
                {/*//* map return array. React transform this array to sequence of objects on page. */}
                {posts.map((post, index) => (
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} number={index + 1} post={post}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
}

export default PostList;