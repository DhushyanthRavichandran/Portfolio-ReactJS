import React, { useEffect } from "react";
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  const About = (props) => {
    const isDesktop = window.innerWidth >= 768; // example threshold for mobile screens

    useEffect(() => {
        if (isDesktop) {
            AOS.init();
        }
    }, [isDesktop]);


    return (
      <div className='hello'  >
        <div data-aos={isDesktop?"fade-left":undefined}
                          data-aos-duration="1500" className='about t' >
          <p style={{ margin:"0px 10px 0px 10px" ,color: "#74C0FC" ,paddingTop:"0",fontSize:"20px" ,fontWeight:"500"}}>{props.year}</p>
          <p style={{margin:"0px 10px 0px 10px"  ,fontSize:"20px",paddingTop:"0" ,fontWeight:"500"}}>{props.dept} |  <span style={{fontSize:"18px" ,fontWeight:"300"}}>{props.school}</span></p>
          <p style={{margin:"0px 10px 0px 10px"  ,paddingTop:"0",fontWeight:"400"}}> {props.description}</p>
          <p style={{margin:"10px 10px 0px 10px" }}>Scored {props.Scored}</p>
        </div>
      </div>
    );
  };

  export default About;
