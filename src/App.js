import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import React from "react";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile' element={<Profile posts={props.posts}/>}/>
                        <Route path='/dialogs' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        <Route path='/dialogs/:dialogId' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    </Routes>
                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;
