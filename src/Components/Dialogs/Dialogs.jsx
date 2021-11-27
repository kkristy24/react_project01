import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Mia</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Cristy</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Kate</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Constantin</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Yo</div>
                <div className={s.message}>Bla bla</div>
                <div className={s.message}>How are you?</div>
            </div>
        </div>
    );
}

export default Dialogs;