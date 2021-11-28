import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.item}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
           <Post message='Hi' />
           <Post message='My first post'/>
           <Post message='My second post'/>
           <Post message='No no no'/>
        </div>
    )
}

export default MyPosts;