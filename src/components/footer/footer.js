import React from 'react';

//third-party
import {Facebook,Twitter,Instagram,YouTube} from '@material-ui/icons';


const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12">
                        <hr />
                        <div className="footer-section-links-container">
                            <ul className="footer-section-links">

                                    <li className="footer-section-link">
                                        <a href="www.facebook.com" className="footer-section-link-a">
                                            <Facebook className="footer-section-link-icon" />
                                        </a>
                                    </li>

                                    <li className="footer-section-link">
                                        <a href="www.twitter.com" className="footer-section-link-a">
                                            <Twitter className="footer-section-link-icon" />
                                        </a>
                                    </li>

                                    <li className="footer-section-link">
                                        <a href="www.instagram.com" className="footer-section-link-a">
                                            <Instagram className="footer-section-link-icon" />
                                        </a>
                                    </li>

                                    <li className="footer-section-link">
                                        <a href="www.youtube.com" className="footer-section-link-a">
                                            <YouTube className="footer-section-link-icon" />
                                        </a>
                                    </li>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;