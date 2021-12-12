import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements= props.dialogsPage.dialogs.map(d =>
        <DialogItem name={d.name}
                    id={d.id}/>);

    let messagesElements = props.dialogsPage.messages.map(m =>
        <Message name={m.name}
                 type={m.type}
                 message={m.message}/>);

    let newMessageElement = React.createRef();

    let sentMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea rows='3' cols = '100' placeholder="New message" ref = {newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={sentMessage}>Sent</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;