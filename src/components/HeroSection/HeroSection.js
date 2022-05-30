import React from 'react';
import "./HeroSection.css"
import HeroProductImage from "../img/heroProduct.jpg"
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="container row my-5 mx-auto d-flex flex-lg-row flex-column-reverse">
                <div className="col-lg-8 col-12 d-flex flex-lg-row flex-column-reverse">
                    <div className="d-flex  align-items-center h-100">
                        <div className="w-75 hero-container">
                            <h1 className=" hero-text">
                                About Our Business of Best Vehicle Fuel Oil Products.
                            </h1>

                            <p className="mt-4 hero-des">

                                “It is a web-based online machine fluid (fuels and oils) selling service in which people of any type can
                                buy their required fluid type products for machines. Such machines need oil for their smaller mechanical parts to remain active.”
                            </p>

                            <div>
                                <div>
                                    <button onClick={() => navigate("/about")} className="btn hero-btn mt-2">
                                        Explore
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4 col-12">
                    <div className="d-flex  justify-content-center align-items-center ">
                        <div className="h-100">
                            <img className="hero-p-img" src={HeroProductImage} alt="img" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;