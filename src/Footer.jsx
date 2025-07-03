import React from "react";
import "./style.css";

const Footer=()=>{
    return(
        <>
            <section className="container-fluid footer-1"> 
                <div className="footer-2">
                    <div className="foot mt-5">
                        <h2>Information</h2>
                        <nav>
                            <ul>
                                <li>Admission</li>
                                <li>Tuition fee</li>
                                <li>Scholorship</li>
                                <li>Coditions</li>
                                <li>Facilities</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="foot mt-5">
                        <h2>Useful Link</h2>
                        <nav>
                            <ul>
                                <li>All Courses</li>
                                <li>Our Teachers</li>
                                <li>Our Events</li>
                                <li>Blog post</li>
                                <li>FAQs</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="foot mt-5">
                        <h2>Useful Link</h2>
                        <nav>
                            <ul>
                                <li>All Courses</li>
                                <li>Our Teachers</li>
                                <li>Our Events</li>
                                <li>Blog post</li>
                                <li>Login</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="foot mt-5 contact-info">
                        <h2>Contact Info</h2>
                        <div className="adjust">
                            <div>
                                <p>245, New Town, Marklen Street North City, New York, USA</p>
                            </div>
                            <div className="mt-4">
                                <p>+01254 659 874</p>
                                <p>+32145 857 458</p>
                            </div>
                            <div className="mt-4">
                                <p>info@example.com</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="footer-3 mt-3">
                    <div className=" footer-3-adjust    ">
                        <div className="d-flex images">
                            <img src="src/images/instagram (2).png" alt=""  width="30px" height="30px"/>
                            <img src="src/images/twitter (2).png" alt=""  width="30px" height="30px"/>
                            <img src="src/images/social-media.png" alt=""  width="30px" height="30px"/>
                            <img src="src/images/business.png" alt=""  width="30px" height="30px"/>
                        </div>
                        <div className="text-white d-flex nav-foot">
                            <nav>
                                <ul className="d-flex">
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Courses </li>
                                    <li>Notice Board</li>
                                    <li>Offers</li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
};
export default Footer;