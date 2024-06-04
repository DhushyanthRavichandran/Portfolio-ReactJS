import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export const Navbar = () => {
  const scrollToSection = (name) => {
  
    const element=document.getElementById(name);
    if(element){
      element.scrollIntoView({behavior:'smooth'})
    }
  };

  return (
    <div className='navbar'>
      <div className='nav-name' data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-duration="1500">
        <p style={{ fontSize: '24px' }}>&lt;Dhushyanth /&gt;</p>
      </div>
      <div className='nav-buttons' data-aos="fade-left"  data-aos-duration="1500">

        <button className='navbuttons' name='about' onClick={() => scrollToSection('about')}>
          About </button>
          <button className='navbuttons' name='home' onClick={() => scrollToSection('Tech')}>
          Tech</button>
        <button className='navbuttons' name='projects' 
            onClick={() => scrollToSection('projects')}>
              Projects</button>

        <button
          className='navbuttons' name='contact' onClick={() =>scrollToSection('contact')}>
            Contact
         </button>
        <button className='nightmode' name='nightmode'>
          <i className="fas fa-lightbulb"></i>
        </button>
      </div>
    </div>
  );
};

      //   onClick={() =>
      //     window.scroll({
      //     top: 2100,
      //     behavior: "smooth"
      // })
      //     }