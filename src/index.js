import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs=[
    {id:1, name:'Mia'},
    {id:2, name:'Alex'},
    {id:3, name:'Cristy'},
    {id:4, name:'Kate'},
    {id:5, name:'Constantin'}
]

let messages=[
    {id:1, message:'Yo'},
    {id:2, message:'Bla bla'},
    {id:3, message:'How are you?'},
    {id:4, message:'Ha ha'},
    {id:5, message:'Oy'}
]

let posts = [
    {id:1, message:'Hi', likesCount:10},
    {id:2, message:'My first post', likesCount:12},
    {id:3, message:'My second post', likesCount:7}
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
