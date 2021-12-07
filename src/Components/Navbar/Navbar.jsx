import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {

    return (
        <nav className={s.nav}>
            <div>
                <div className={s.item}>
                    <NavLink to="/profile"
                             className={({isActive}) => isActive ? `${s.activeLink}` : ""}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs"
                             className={({isActive}) => isActive ? `${s.activeLink}` : ""}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" className={({isActive}) => isActive ? `${s.activeLink}` : ""}>News</NavLink>
                </div>
                <div className={s.item}>
                    <a>Music</a>
                </div>
                <div className={s.item}>
                    <a>Settings</a>
                </div>
                <Friends friends={props.navbarPage.friends}/>
            </div>
        </nav>
    )
}

export default Navbar