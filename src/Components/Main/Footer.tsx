import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
        <footer>
            <div className="footer-area footer-padding">
            <div className="container">
            <div className="row d-flex justify-content-between">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-caption mb-50">
            <div className="single-footer-caption mb-30">

            <div className="footer-logo mb-25">
            <Link to="/"><img src="logo.jpg" className="logo" /></Link>
            </div>
            <div className="footer-tittle">
            <div className="footer-pera">
            <p>We are an international software company with a focus on cloud-based research and development software</p>
            </div>
            </div>
            <div className="footer-social">
            <a href="https://bit.ly/sai4ull"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-tumblr"></i></a>
            </div>
            </div>
            </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div className="single-footer-caption mb-50">
            <div className="footer-tittle">
            <h4>Top Categories</h4>
            <ul>
            <li><Link to={`/business`}>business</Link></li>
            <li><Link to={`/entertainment`}>Entertainment</Link></li>
            <li><Link to={`/general`}>General</Link></li>
            <li><Link to={`/health`}>Health</Link></li>
            <li><Link to={`/science`}>Science</Link></li>
            <li><Link to={`/sports`}>Sports</Link></li>
            <li><Link to={`/technology`}>Technology</Link></li>
            </ul>
            </div>
            </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-caption mb-50">
            <div className="footer-tittle mb-50">
            <h4>Subscribe Newsletter</h4>
            <p>Subscribe our newsletter to get update news & updates.</p>
            </div>

            <div className="footer-form">
            <div id="mc_embed_signup">
            <form action="#" method="get" className="subscribe_form relative mail_part">
            <input type="email" name="EMAIL" id="newsletter-form-email" placeholder="  Enter your email" />
            <div className="form-icon">
            <button type="button" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm">
            Subscribe
            </button>
            </div>
            <div className="mt-10 info"></div>
            </form>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>

            <div className="footer-bottom-area">
            <div className="container">
            <div className="footer-border">
            <div className="row d-flex align-items-center">
            <div className="col-xl-12 ">
            <div className="footer-copy-right text-center">
            <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved <i className="fa fa-heart color-danger" aria-hidden="true"></i> by <a href="https://www.innoscripta.com/en" target="_blank">Innoscripta</a></p>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </footer>
            <div id="back-top">
            <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
            </div>
        </>
    )
}

export default Footer;