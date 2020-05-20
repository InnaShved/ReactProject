import React from 'react';
import classes from'./Profile.module.css';

const Profile = () => {
    return (
      <div className={classes.profile}>
      
      <div>
        <img src="http://t2.gstatic.com/images?q=tbn:ANd9GcQsCp71YdrEs76AyO2ynsBTpWBfkP_kRMF9MgJDTXavYsh7PS0TuWafh0oXdZTnNgIyElzBQ2BQul14prRHl5Q"></img>
      </div>
      <div>
        avatar + description
      
      </div>
      <div> 
        Posts
        <div>
          New post
          <div className = {classes.posts}>
            <div className= {classes.item}>
              post 1
          </div>
            <div className= {classes.item}>
              post 2
          </div>
            <div className= {classes.item}>
              post 3
          </div>
          </div>
        </div>

      </div>
    </div>
    );
}
export default Profile;