import React from "react";
import "./style.css";

const Courses=()=>{
    return(
        <>
        <section className="container mt-5">
            <div className="course">
                <div className="text-primary">
                    <h1>Here Is Our<br/>Top Courses</h1>
                </div>
                <div className="m-4 coursetext text-primary">
                    <p>Even slightly believable. If you are going use a passage of Lorem Ipsum need</p>
                </div>
            </div>
            <div className="row mt-4 blockk">
                <div className="col-12 col-md-6 col-lg-3 p-2 courses bg-info">
                    <img src="src/images/courses-1 (1).webp" alt="" />
                    <h5>#Science</h5>
                    <h3>Computer Science & Engineering</h3>
                    <div className="d-flex justify-content-between">
                        <div>Online Apply</div>
                        <div>Read More</div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 p-2 courses bg-success">
                    <img src="src/images/courses-2 (1).webp" alt="" />
                    <h5>#Science</h5>
                    <h3>Computer Science & Engineering</h3>
                    <div className="d-flex justify-content-between">
                        <div>Online Apply</div>
                        <div>Read More</div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 p-2 courses bg-primary">
                    <img src="src/images/courses-3 (1).webp" alt="" />
                    <h5>#Science</h5>
                    <h3>Computer Science & Engineering</h3>
                    <div className="d-flex justify-content-between">
                        <div>Online Apply</div>
                        <div>Read More</div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 p-2 courses bg-warning">
                    <img src="src/images/courses-4 (1).webp" alt="" />
                    <h5>#Science</h5>
                    <h3>Computer Science & Engineering</h3>
                    <div className="d-flex justify-content-between">
                        <div>Online Apply</div>
                        <div>Read More</div>
                    </div>
                </div>

            </div>

        </section>
        </>
    )
}
export default Courses;