import React from "react";
import "./style.css"
const Navbar=()=>{
    return(
        <>
           <section className="container-fluid stick">
                <div className="d-flex justify-content-evenly">
                    <div>
                        <img src="src/images/logo (1).webp" alt="" />
                    </div>
                    <div className="navigation">
                        <nav>
                            <ul className="d-flex justify-content-evenly">
                                <li><a href="">Home</a></li>
                                <li><a href="">Courses</a></li>
                                <li><a href="">Events</a></li>
                                <li><a href="">Pages</a></li>
                                <li><a href="">Shop</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
           </section>
        </>
    )

}
export default Navbar;