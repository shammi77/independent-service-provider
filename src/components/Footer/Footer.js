import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <div className="bg-dark text-center m-3 text-white p-3">
            <p><small>copyright @ {year} </small></p> 
            </div>            
        </footer>
    );
};

export default Footer;