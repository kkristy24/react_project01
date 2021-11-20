import React from "react";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.mainImg}>
                <img src='https://zabor.bz/zakaz/img/market/fotooboi_voda_img_5.jpg'/>
            </div>
            <div className={s.avaImg}>
                <img src='https://i.pinimg.com/originals/fa/11/0f/fa110feb86350d897056f54e18c83567.png'/>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div className={s.item}>
                        Post 1
                    </div>
                    <div className={s.item}>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile