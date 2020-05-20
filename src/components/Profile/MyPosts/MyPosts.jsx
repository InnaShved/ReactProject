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
                <Post />
                <Post />
                <Post />
                <Post />

            </div>
        </div>
    );
}
export default MyPosts;
