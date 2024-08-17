import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                       Discover exciting new ways to improve your sex life with the largest selection of adult sex toys in the US. At Lovehoney you can browse the very best online sex toys and shop with confidence, knowing that every order comes with discreet packaging. Check out our Beginner's Guide to Sex Toys to find the toy that's right for you.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg}  alt="*"/>
            </div>
        </div>
    );
};

export default Banner;
