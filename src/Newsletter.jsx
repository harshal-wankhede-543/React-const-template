import React from "react";
import "./style.css";

const Newsletter=()=>{
    return(
        <>
            <section className="container mt-5 mb-5 Newsletter">
                <div className="news text-primary">
                    <div className="p-5 news-content">
                        <h1>Subscribe our Newsletter</h1>
                        <h4>Even slightly believable. If you are going use a passage of Lorem Ipsum need some</h4>
                    </div>
                    <div className="news-input">
                        <input type="email" placeholder="Enter Your E-mail Here" />
                        <button type="button" className="btn btn-success">Subscribe Now</button>
                    </div>
                </div>
            </section>


        </>
    )
}
export default Newsletter;