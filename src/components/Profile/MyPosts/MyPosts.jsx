import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            MyPosts
            <div>
                <textarea>New Post</textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message = 'Hello, World!' counts = '15' />
                <Post message = 'First post' counts ='10' />
                

            </div>
        </div>
    );
}
export default MyPosts;
