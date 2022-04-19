import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <div className="bg-dark text-center m-5 text-white p-5">
            <p><small>copyright @ {year} </small></p> 
            </div>
                       
        </footer>
    );
};

export default Footer;