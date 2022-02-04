import React from 'react';

const Footer = () => {
  let style = {
    position: "fixed",
    bottom: 0,
    width: "100%",
  }
  return <div className='text-center bg-dark text-light' style={ style }>
    Copyringht &copy; <strong>Qurashi Akeel 🧡</strong> Feb/2022
  </div>;
};

export default Footer;
