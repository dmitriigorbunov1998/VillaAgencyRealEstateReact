import React from 'react';
import './SubHeader.css';

const SubHeader = () => {
    return (
        <div className="sub-header">
            <div className="container">
                <div className="row">
                    <ul className="info">
                        <li><i className="fa fa-envelope"></i>info@company.com</li>
                        <li><i className="fa fa-map"></i>Sunny Isles, FL 33160</li>
                    </ul>
                    <ul className="social-links">
                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="sub-header-left">

            </div>
        </div>
    );
}

export default SubHeader;