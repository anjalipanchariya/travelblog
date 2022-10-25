import React from "react";
import'./Home.css'
import Image from 'react-bootstrap/Image'
import './bgimage.png'
export default function Home(){
    return (
    // <article
    //   className="article"
    //   style={{ backgroundImage: `url(https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?cs=srgb&dl=pexels-victor-freitas-791763.jpg&fm=jpg)` }}
    // >
    //   <div>
    //     <h1>Quote of the day</h1>
    //     <p>lorem ipsum</p>
    //   </div>
    // </article>

    <div className="home">
        <img src= {require('./bgimage.png')} alt="" className="bgimage"/>
        <h1 className="bgtext top">Workout Tracker app</h1>

        <div className="home-box">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </div>
    </div>
      );
}