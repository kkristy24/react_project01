import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    return (
        <div>
            <div>
                <img src='https://sun9-19.userapi.com/impf/c630218/v630218134/481e6/V3Ul0vBgVFA.jpg?size=1024x1024&quality=96&sign=b6babe9e0c58e65daa71329196c7c183&c_uniq_tag=AP8SRNqT5GFoBb4IjC66LlAaZoClfTysSlLNCZwtudg&type=album'/>
            </div>
            <div>{props.name}</div>
        </div>
    )
}

const Navbar = (props) => {


    let friendsList = props.navbarPage.friends.map(f => <Friend name={f.name}/>)

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
                <div className={s.friendsBlock}>
                    <h3>Friends</h3>
                    <div className={s.friends}>
                        {friendsList}
                        {/*<Friend name='Alex' avaUrl='https://sun9-19.userapi.com/impf/c630218/v630218134/481e6/V3Ul0vBgVFA.jpg?size=1024x1024&quality=96&sign=b6babe9e0c58e65daa71329196c7c183&c_uniq_tag=AP8SRNqT5GFoBb4IjC66LlAaZoClfTysSlLNCZwtudg&type=album'/>*/}
                        {/*<Friend name='Alex' avaUrl='https://sun9-19.userapi.com/impf/c630218/v630218134/481e6/V3Ul0vBgVFA.jpg?size=1024x1024&quality=96&sign=b6babe9e0c58e65daa71329196c7c183&c_uniq_tag=AP8SRNqT5GFoBb4IjC66LlAaZoClfTysSlLNCZwtudg&type=album'/>*/}
                        {/*<Friend name='Alex' avaUrl='https://sun9-19.userapi.com/impf/c630218/v630218134/481e6/V3Ul0vBgVFA.jpg?size=1024x1024&quality=96&sign=b6babe9e0c58e65daa71329196c7c183&c_uniq_tag=AP8SRNqT5GFoBb4IjC66LlAaZoClfTysSlLNCZwtudg&type=album'/>*/}
                        {/*<Friend name='Alex' avaUrl='https://sun9-19.userapi.com/impf/c630218/v630218134/481e6/V3Ul0vBgVFA.jpg?size=1024x1024&quality=96&sign=b6babe9e0c58e65daa71329196c7c183&c_uniq_tag=AP8SRNqT5GFoBb4IjC66LlAaZoClfTysSlLNCZwtudg&type=album'/>*/}
                        {/*<Friend name='Alex' avaUrl='https://sun9-19.userapi.com/impf/c630218/v630218134/481e6/V3Ul0vBgVFA.jpg?size=1024x1024&quality=96&sign=b6babe9e0c58e65daa71329196c7c183&c_uniq_tag=AP8SRNqT5GFoBb4IjC66LlAaZoClfTysSlLNCZwtudg&type=album'/>*/}
                        {/*<Friend name='Alex' avaUrl='https://sun9-19.userapi.com/impf/c630218/v630218134/481e6/V3Ul0vBgVFA.jpg?size=1024x1024&quality=96&sign=b6babe9e0c58e65daa71329196c7c183&c_uniq_tag=AP8SRNqT5GFoBb4IjC66LlAaZoClfTysSlLNCZwtudg&type=album'/>*/}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar