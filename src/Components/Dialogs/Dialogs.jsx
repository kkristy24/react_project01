import React from "react";
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Mia
                </div>
                <div className={s.dialog}>
                    Alex
                </div>
                <div className={s.dialog}>
                    Cristy
                </div>
                <div className={s.dialog}>
                    Kate
                </div>
                <div className={s.dialog}>
                    Constantin
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