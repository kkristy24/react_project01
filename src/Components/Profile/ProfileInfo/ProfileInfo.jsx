import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.mainImg}>
                <img src='https://zabor.bz/zakaz/img/market/fotooboi_voda_img_5.jpg'/>
            </div>
            <div className={s.avaImg}>
                <img src='https://i.pinimg.com/originals/fa/11/0f/fa110feb86350d897056f54e18c83567.png'/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo