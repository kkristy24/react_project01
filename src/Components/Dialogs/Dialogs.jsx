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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Mia" id="1"/>
                <DialogItem name="Alex" id="2"/>
                <DialogItem name="Cristy" id="3"/>
                <DialogItem name="Kate" id="4"/>
                <DialogItem name="Constantin" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Yo"/>
                <Message message="Bla bla"/>
                <Message message="How are you?"/>
                <Message message="Moa"/>
            </div>
        </div>
    );
}

export default Dialogs;