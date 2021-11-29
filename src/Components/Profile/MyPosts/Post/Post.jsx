import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div>
            <div className={s.post}>
               <img src = 'https://sun6-22.userapi.com/s/v1/ig2/Gjni394eSK52nXLPinglTDbgd5ldVAfc4NgAoUaSKQt8nulQOLgFdzTdRwznXxGvMxnA18J6KpRlzVe_URge8dzZ.jpg?size=100x0&quality=96&crop=0,0,1200,1200&ava=1'/>
                {props.message}
                <div>
                <span>Like {props.likesCount}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;