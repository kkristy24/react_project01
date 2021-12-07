import s from "./Friends.module.css";
import React from "react";
import Friend from "./Friend/Friend";



const Friends = (props) => {

    let friendsList = props.friends.map(f => <Friend avaUrl={f.avaUrl} name={f.name}/>)

    return (
        <div className={s.friendsBlock}>
            <h3>Friends</h3>
            <div className={s.friends}>
            {friendsList}
            </div>
        </div>
    )
}

export default Friends;