import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    debugger;
    return (
        <div className={classes.item}>
            <img src="https://innashved.com/img/pic.jpg" alt="img"/>
            {props.message} 
            <div>
            <span>Like {props.counts}</span>
            </div>
        </div>
            
        

    );
}
export default Post;
