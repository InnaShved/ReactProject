import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div>
        <img src="http://t2.gstatic.com/images?q=tbn:ANd9GcQsCp71YdrEs76AyO2ynsBTpWBfkP_kRMF9MgJDTXavYsh7PS0TuWafh0oXdZTnNgIyElzBQ2BQul14prRHl5Q"></img>
      </div>
      <div>
        avatar + description
      </div>
      <MyPosts />
    </div>
  );
}
export default Profile;