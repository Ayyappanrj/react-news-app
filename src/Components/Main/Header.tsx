import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './main.css';
import { LocalStorage } from "../../Constants/Helper";

const Header = () => {
    let isAuth = LocalStorage();
    let navigate = useNavigate();
    return (
        <header>
            <div className="header-area">
            <div className="main-header ">
            <div className="header-top ">
            <div className="container">
            <div className="row">
            <div className="col-xl-12">
            <div className="d-flex justify-content-between align-items-center">
            <div className="header-info-left ">

            <div className="header-social d-none d-sm-block">
            <a href="https://bit.ly/sai4ull"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-tumblr"></i></a>
            </div>
            </div>
            <div className="header-info-mid">

            <div className="logo">
            <Link to="/"><img src="logo.jpg" className="logo" /></Link>
            </div>
            </div>
            <div className="header-info-right d-flex align-items-center">
            <ul>
            <li>
            <form className="search-form" action="#">
            <i className="fas fa-search"></i>
            <input type="search" className="form-control" placeholder="Search Here" title="Search here" />
            </form>
            </li>
            <li><Link to="/">Page</Link>
            <ul className="multipage">
            <li><Link to="/articles">Articles</Link></li>
            { isAuth && <li><Link to="/settings">Settings</Link></li> }
            </ul>
            </li>
            { !isAuth ?
                <li><Link to="/signin" className="header-btn">Sign in</Link></li>
            :
                <li><a onClick={() => {
                    localStorage.removeItem("INNOSCRIPTA_LOGIN");
                    navigate("/signin");
                  }} className="header-btn">Logout</a></li>
            }
            </ul>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div className="header-bottom  header-sticky">
            <div className="container">
            <div className="row align-items-center">
            <div className="col-xl-12">

            <div className="logo2">
            <Link to="/"><svg id="logo_white_svg__Ebene_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 245.6 88.2" xmlSpace="preserve" className="logo"><path className="logo_white_svg__st0" d="M45.5 54.1h2.1v21.6h-2.1zM46.6 48.8c1.1 0 1.9-.8 1.9-1.9 0-1-.8-1.9-1.9-1.9-1.1 0-1.9.9-1.9 1.9 0 1 .8 1.9 1.9 1.9zM57.8 65c0-4.4.9-9.4 6.3-9.4 4.7 0 5.2 3.2 5.2 7v13h2.1v-13c0-5.6-1.5-9-7.1-9-2.8 0-5.1 1.4-6.4 3.8h-.1V54h-2.1v21.6h2.1V65zM80.6 65c0-4.4.9-9.4 6.3-9.4 4.7 0 5.2 3.2 5.2 7v13h2.1v-13c0-5.6-1.5-9-7.1-9-2.8 0-5.1 1.4-6.4 3.8h-.1V54h-2.1v21.6h2.1V65zM110.5 76.1c6.3 0 11.3-4.9 11.3-11.2 0-6.4-5-11.2-11.3-11.2-6.3 0-11.2 5.1-11.2 11.3 0 6 5 11.1 11.2 11.1zm-.2-20.6c5.3 0 9.4 4 9.4 9.3 0 5.2-4.1 9.2-9.4 9.2-5.1 0-9-4.3-9-9.2.1-4.9 3.9-9.3 9-9.3zM132 74.1c-2.8 0-4.6-1.8-5.4-4.4l-2.1.7c.9 3.5 3.8 5.7 7.4 5.7 3.9 0 7-2.8 7-6.7 0-7.8-10.5-5.3-10.5-10.4 0-1.9 1.9-3.4 3.7-3.4 1.7 0 3.1.9 3.8 2.4l1.8-.9c-.9-2-3.3-3.5-5.5-3.5-3.1 0-5.9 2.2-5.9 5.5 0 3.6 3.4 4.9 6.3 6 2.1.7 4.2 1.6 4.2 4.2.1 2.7-2.1 4.8-4.8 4.8zM153.3 76.1c2.9 0 5.6-1.1 7.8-3v-2.8c-2 2.4-4.9 3.9-7.9 3.9-5.1 0-8.9-4.4-8.9-9.3s3.8-9.2 8.9-9.2c3.1 0 5.6 1.3 7.6 3.5v-2.8c-2.1-1.8-4.7-2.7-7.5-2.7-6.3 0-11.1 4.9-11.1 11.2.1 6.2 4.7 11.2 11.1 11.2zM168.7 64.6c0-3.2-.3-9.1 4.4-9.1.6 0 1 .1 1.5.4l1.1-1.9c-.7-.3-1.4-.5-2.3-.5-2.3 0-3.8 1.3-4.7 3.3h-.1V54h-2.1v21.6h2.1v-11zM180.4 54.1h2.1v21.6h-2.1zM181.5 48.8c1.1 0 1.9-.8 1.9-1.9 0-1-.8-1.9-1.9-1.9-1.1 0-1.9.9-1.9 1.9 0 1 .8 1.9 1.9 1.9zM211.6 65c0-6.3-4.1-11.4-10.6-11.4-3.2 0-6.6 1.6-8.2 4.3h-.1V54h-2.1v34.1h2.1V71.9h.1c1.8 2.8 5 4.2 8.3 4.2 6.4 0 10.5-4.8 10.5-11.1zm-19.1.3c0-5.2 3-9.8 8.5-9.8 5.3 0 8.5 4.6 8.5 9.5 0 4.8-3.4 9.1-8.4 9.1-5.2 0-8.6-3.8-8.6-8.8zM216.9 75.6h2.1V56h3.7v-1.9H219v-7.7h-2.1v7.7h-2.4V56h2.4zM234.9 76.1c3.2 0 6.6-1.6 8.2-4.3h.1v3.9h2.1V54.1h-2.1v3.7h-.1c-1.8-2.7-5-4.2-8.3-4.2-6.5 0-10.5 4.8-10.5 11.1s4.1 11.4 10.6 11.4zm-.2-20.6c5.2 0 8.6 3.9 8.6 8.9 0 5.2-3 9.7-8.5 9.7-5.2 0-8.5-4.5-8.5-9.4.1-4.7 3.5-9.2 8.4-9.2z"></path><path className="logo_white_svg__st0" d="M195.7 83h49.8v1.7h-49.8zM27.6 74.5l-1.4-.9L24 77h-5.8l-3.6-5.9h16.5v-6H11.8v-2.6h21.5v-6.2H9.7v-2.6h24.5l.1-.7c.8-4.4 4.1-15.7 5.3-19.7l.2-.7c.9-2.9 2.6-8.4 2.6-11.1C42.4 10.9 34.4 0 21 0 7.8 0 0 10.9 0 21.5c0 2.7 1.6 8.1 2.5 11.1l.2.7c.1.4.3 1 .6 1.8.9 2.7 2.3 7.3 3.4 11.5l1.6-.4C7.2 42 5.8 37.4 4.9 34.6c-.3-.8-.4-1.4-.6-1.8l-.1-.8c-.8-2.6-2.5-8.1-2.5-10.6C1.7 11.8 8.9 1.7 21 1.7h.1c12.3 0 19.7 10.1 19.7 19.8 0 2.4-1.7 7.9-2.5 10.6l-.3.6c0 .1-4.1 13.4-5.2 19.2H8v6h23.6v2.8H10.1v6h19.4v2.6H11.6l9.5 15.5.1-.2h166.3V83H22.3l5.3-8.5z"></path></svg></Link>
            </div>

            <div className="logo3 d-block d-sm-none">
            <Link to="/"><svg id="logo_white_svg__Ebene_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 245.6 88.2" xmlSpace="preserve" className="logo"><path className="logo_white_svg__st0" d="M45.5 54.1h2.1v21.6h-2.1zM46.6 48.8c1.1 0 1.9-.8 1.9-1.9 0-1-.8-1.9-1.9-1.9-1.1 0-1.9.9-1.9 1.9 0 1 .8 1.9 1.9 1.9zM57.8 65c0-4.4.9-9.4 6.3-9.4 4.7 0 5.2 3.2 5.2 7v13h2.1v-13c0-5.6-1.5-9-7.1-9-2.8 0-5.1 1.4-6.4 3.8h-.1V54h-2.1v21.6h2.1V65zM80.6 65c0-4.4.9-9.4 6.3-9.4 4.7 0 5.2 3.2 5.2 7v13h2.1v-13c0-5.6-1.5-9-7.1-9-2.8 0-5.1 1.4-6.4 3.8h-.1V54h-2.1v21.6h2.1V65zM110.5 76.1c6.3 0 11.3-4.9 11.3-11.2 0-6.4-5-11.2-11.3-11.2-6.3 0-11.2 5.1-11.2 11.3 0 6 5 11.1 11.2 11.1zm-.2-20.6c5.3 0 9.4 4 9.4 9.3 0 5.2-4.1 9.2-9.4 9.2-5.1 0-9-4.3-9-9.2.1-4.9 3.9-9.3 9-9.3zM132 74.1c-2.8 0-4.6-1.8-5.4-4.4l-2.1.7c.9 3.5 3.8 5.7 7.4 5.7 3.9 0 7-2.8 7-6.7 0-7.8-10.5-5.3-10.5-10.4 0-1.9 1.9-3.4 3.7-3.4 1.7 0 3.1.9 3.8 2.4l1.8-.9c-.9-2-3.3-3.5-5.5-3.5-3.1 0-5.9 2.2-5.9 5.5 0 3.6 3.4 4.9 6.3 6 2.1.7 4.2 1.6 4.2 4.2.1 2.7-2.1 4.8-4.8 4.8zM153.3 76.1c2.9 0 5.6-1.1 7.8-3v-2.8c-2 2.4-4.9 3.9-7.9 3.9-5.1 0-8.9-4.4-8.9-9.3s3.8-9.2 8.9-9.2c3.1 0 5.6 1.3 7.6 3.5v-2.8c-2.1-1.8-4.7-2.7-7.5-2.7-6.3 0-11.1 4.9-11.1 11.2.1 6.2 4.7 11.2 11.1 11.2zM168.7 64.6c0-3.2-.3-9.1 4.4-9.1.6 0 1 .1 1.5.4l1.1-1.9c-.7-.3-1.4-.5-2.3-.5-2.3 0-3.8 1.3-4.7 3.3h-.1V54h-2.1v21.6h2.1v-11zM180.4 54.1h2.1v21.6h-2.1zM181.5 48.8c1.1 0 1.9-.8 1.9-1.9 0-1-.8-1.9-1.9-1.9-1.1 0-1.9.9-1.9 1.9 0 1 .8 1.9 1.9 1.9zM211.6 65c0-6.3-4.1-11.4-10.6-11.4-3.2 0-6.6 1.6-8.2 4.3h-.1V54h-2.1v34.1h2.1V71.9h.1c1.8 2.8 5 4.2 8.3 4.2 6.4 0 10.5-4.8 10.5-11.1zm-19.1.3c0-5.2 3-9.8 8.5-9.8 5.3 0 8.5 4.6 8.5 9.5 0 4.8-3.4 9.1-8.4 9.1-5.2 0-8.6-3.8-8.6-8.8zM216.9 75.6h2.1V56h3.7v-1.9H219v-7.7h-2.1v7.7h-2.4V56h2.4zM234.9 76.1c3.2 0 6.6-1.6 8.2-4.3h.1v3.9h2.1V54.1h-2.1v3.7h-.1c-1.8-2.7-5-4.2-8.3-4.2-6.5 0-10.5 4.8-10.5 11.1s4.1 11.4 10.6 11.4zm-.2-20.6c5.2 0 8.6 3.9 8.6 8.9 0 5.2-3 9.7-8.5 9.7-5.2 0-8.5-4.5-8.5-9.4.1-4.7 3.5-9.2 8.4-9.2z"></path><path className="logo_white_svg__st0" d="M195.7 83h49.8v1.7h-49.8zM27.6 74.5l-1.4-.9L24 77h-5.8l-3.6-5.9h16.5v-6H11.8v-2.6h21.5v-6.2H9.7v-2.6h24.5l.1-.7c.8-4.4 4.1-15.7 5.3-19.7l.2-.7c.9-2.9 2.6-8.4 2.6-11.1C42.4 10.9 34.4 0 21 0 7.8 0 0 10.9 0 21.5c0 2.7 1.6 8.1 2.5 11.1l.2.7c.1.4.3 1 .6 1.8.9 2.7 2.3 7.3 3.4 11.5l1.6-.4C7.2 42 5.8 37.4 4.9 34.6c-.3-.8-.4-1.4-.6-1.8l-.1-.8c-.8-2.6-2.5-8.1-2.5-10.6C1.7 11.8 8.9 1.7 21 1.7h.1c12.3 0 19.7 10.1 19.7 19.8 0 2.4-1.7 7.9-2.5 10.6l-.3.6c0 .1-4.1 13.4-5.2 19.2H8v6h23.6v2.8H10.1v6h19.4v2.6H11.6l9.5 15.5.1-.2h166.3V83H22.3l5.3-8.5z"></path></svg></Link>
            </div>

            <div className="main-menu text-center d-none d-lg-block">
            <nav>
            <ul id="navigation">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/articles">Articles</Link></li>
            { isAuth && <li><Link to="/news-feed">News Feed</Link></li> }
            </ul>
            </nav>
            </div>
            </div>

            <div className="col-xl-12">
            <div className="mobile_menu d-block d-lg-none"></div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </header>
    )
}

export default Header;