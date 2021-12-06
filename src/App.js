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
                        <Route path='/profile' element={<Profile profilePage={props.state.profilePage}/>}/>
                        <Route path='/dialogs' element={<Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                        <Route path='/dialogs/:dialogId' element={<Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                    </Routes>
                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;
