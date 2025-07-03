import React from "react";
import "./style.css";

const Library=()=>{
    return(
        <>
            <section className="container mt-5">
                <div className="text-center text-primary lib-1">
                    <h1>Online Library</h1>
                    <h4>Even slightly believable. If you are going use a passage of Lorem Ipsum need some</h4>
                </div>
                <div className="row lib-main">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="library-img">
                            <img src="src/images/product-1 (1).webp" alt="" />
                        </div>
                        <div className="text-center lib-title">
                            <h3 className="text-primary">Pen Holder</h3>
                            <h4>Price: $6.00</h4>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="library-img">
                            <img src="src/images/product-2 (1).webp" alt="" />
                        </div>
                        <div className="text-center lib-title">
                            <h3 className="text-primary">Bag</h3>
                            <h4>Price: $12.00</h4>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="library-img">
                            <img src="src/images/product-3 (1).webp" alt="" />
                        </div>
                        <div className="text-center lib-title">
                            <h3 className="text-primary">Clip Board</h3>
                            <h4>Price: $7.00</h4>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="library-img">
                            <img src="src/images/product-4 (1).webp" alt="" />
                        </div>
                        <div className="text-center lib-title">
                            <h3 className="text-primary">Stapler Machine</h3>
                            <h4>Price: $16.00</h4>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Library;