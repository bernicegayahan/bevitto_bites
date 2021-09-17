import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bbc.jpg";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1> Bevitto Bites </h1>
                <p> Pastries and more</p>
                <Link to="/menu">
                    <button> ORDER NOW </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
