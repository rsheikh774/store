import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    We're the global leader in sexual happiness and ship orders in discreet, boring brown boxes direct from our warehouses in the India, straight to your door. Buying an adult toy used to involve being confronted by seedy, male-centric websites with in-your-face, adult images and packaging. But colleagues and friends Akshay Panday and Rehan Sheikh decided it was time things changed, and a new era of adult toy shopping began in 2022.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            MP Nagar Zone-2, Bhopal
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 785696925</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: store@res.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Vibrators</span>
                    <span className="text">Sex Toys for Couple</span>
                    <span className="text">But Plugs</span>
                    <span className="text">Cock Rings</span>
                    <span className="text">Anal Sex Toys</span>
                    <span className="text">Dildos</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                       Created by:- ReS
                    </span>
                    <img src={Payment}  alt="*"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
