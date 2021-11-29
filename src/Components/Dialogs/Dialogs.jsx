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

    let dialogData=[
        {id:1, name:'Mia'},
        {id:2, name:'Alex'},
        {id:3, name:'Cristy'},
        {id:4, name:'Kate'},
        {id:5, name:'Constantin'}
    ]

    let messageData=[
        {id:1, message:'Yo'},
        {id:2, message:'Bla bla'},
        {id:3, message:'How are you?'},
        {id:4, message:'Ha ha'},
        {id:5, message:'Oy'}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
                <DialogItem name={dialogData[4].name} id={dialogData[4].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
            </div>
        </div>
    );
}

export default Dialogs;