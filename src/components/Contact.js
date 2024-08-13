import React from 'react'
import { ContactContent } from './ContactContent'
export const Contact = () => {
  return (
    <div>
    <p className='contact-heading' style={{position:"relative", left:"10px"}}>Get in Touch.</p>
    <div id='contact' className='contact'>
       
              <div className='contact-writeup'>
                  <p className='contact-description'>Are you looking for a developer who hustles hard but stays humble? A curious soul who bobs their head to any music? A foodie who will venture out for amazing cuisine with you? ✨ If so, do get in touch!</p>
                      <ContactContent/>
              </div>

         <div className="end-page">
             <div className="column">
                 <p style={{textAlign:"center"}}>💌 Contact me</p>
                 <p>dhushyanthravichandran@gmail.com</p>
             </div>
             <div className="column">
              <p style={{textAlign:"center"}}>🤝 stay connected </p> 
                  <div className="social-links"> 
                        <a href="https://www.linkedin.com/in/dhushyanth-ravichandran-798a52242/">LinkedIn</a> |
                        <a href="https://github.com/DhushyanthRavichandran">GitHub</a> |
                        <a href="https://www.instagram.com/dhushyanth_rocky_/">Instagram</a> |
                        <a href="https://drive.google.com/file/d/15qgop3Bw3O93lBWzRw5tvNCe6qbP5Jka/view?usp=drive_link">Resume</a>
                 </div> 
                 
            </div>
            <div className="column">
            <p style={{textAlign:"center"}}>Made with ❤️</p>
            <p>Last updated July, 2024</p>
        </div>
     </div>
    </div>
    </div>

  )
}
