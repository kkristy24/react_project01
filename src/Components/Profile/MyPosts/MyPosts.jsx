import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id:1, message:'Hi', likesCount:10},
        {id:2, message:'My first post', likesCount:12},
        {id:3, message:'My second post', likesCount:7}
    ];
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
           <Post message={postData[0].message} likesCount={postData[0].likesCount} />
           <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
           <Post message={postData[2].message} likesCount={postData[2].likesCount}/>
        </div>
    )
}

export default MyPosts;