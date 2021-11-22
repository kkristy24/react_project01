import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.item}>
            My posts
            <div>
                <textarea> </textarea>
                <button>Add post</button>
            </div>
           <Post message='Hi' />
           <Post message='My first post'/>
           <Post message='My second post'/>
           <Post message='No no no'/>
        </div>
    )
}

export default MyPosts;