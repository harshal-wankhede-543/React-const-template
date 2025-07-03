import React from "react";
import "./style.css"

const Header=()=>{
    return(
        <>
            <section className="container-fluid header">
                <div className="text-center p-5 heading">
                    <h1>Education is the Power of Humanity</h1>
                </div>
                <div className="text-center">
                    <button className="btn btn-success m-2 p-3">View Courses</button>
                    <button className="btn btn-primary m-2 p-3">Learn More</button>
                </div>

            </section>
        </>
    )
}
export default Header;