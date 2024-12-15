import React from 'react';
import './HeaderArea.css';

const HeaderArea = () => {
    return (
        <div className="container">
            <div className="row">
                <nav className="main-nav">
                    <a href="#" className="logo">
                        <h1>Villa</h1>
                    </a>
                    <ul className="nav">
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="#" className="active">Properties</a></li>
                        <li><a href="#" className="active">Property Details</a></li>
                        <li><a href="#" className="active">Contacts Us</a></li>

                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default HeaderArea;