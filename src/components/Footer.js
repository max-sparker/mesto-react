import React from 'react';

const currentDate = new Date();

function Footer() {
    return (
      <footer className="footer">
        <p className="footer__copyright">&copy; {currentDate.getFullYear()} Mesto Russia</p>
      </footer>
    );
}

export default Footer;
