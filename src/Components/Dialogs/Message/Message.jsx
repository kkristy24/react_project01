import React from "react";
import s from './Message.module.css';


const Message = (props) => {

    let type = props.type === 'incoming'
        ? s.incoming
        : s.outgoing;


    return (
        <div className= {s.message + ' ' + type}>
            <div>{props.name}</div>
            <div>{props.message}</div>
        </div>
    );
}

export default Message;