import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path= "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}
const Dialogs = () => {

    let dialogs=[
        {id:1, name:'Mia'},
        {id:2, name:'Alex'},
        {id:3, name:'Cristy'},
        {id:4, name:'Kate'},
        {id:5, name:'Constantin'}
    ]

    let messages=[
        {id:1, message:'Yo'},
        {id:2, message:'Bla bla'},
        {id:3, message:'How are you?'},
        {id:4, message:'Ha ha'},
        {id:5, message:'Oy'}
    ]

    let dialogsElements= dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map (m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;