import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

export default function About() {
    useEffect(() => {
        Aos.init({ duration:2000 });
      }, []);
      useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
  return (
    <div class='container responsive_block'>
        <div className='pt-5 pd-5'>
        <div className='container '>
            <div className="row my-5">
                <div className='section-head col-sm-12'>
                    <h4><span>All About</span> LogiqueCode??</h4>
                    <p>Company got established in Noida, Uttar Pradesh (U.P)-India. LogiqueCode is born with a dream to provide
                    software solution by writing custom tailored CODE which could solve manual or effort taking tasks with aim to reach every 
                    corner of society, understand the needs and provide CODE to automate time consuming efforts.</p>
                </div>
        
            <div class="row my-5">
                <div class="col-12 col-sm-4 col-lg-4" data-aos="fade-right" data-aos-duration="3000">
                    <img src="https://pngimage.net/wp-content/uploads/2018/06/our-vision-png-6.png" alt=""/>
                </div>
                <div class="col-12 col-sm-8 col-lg-8 text-end" data-aos="fade-left" data-aos-duration="3000">
                    <h5 className='vs_about_Heading_mp'>Logical Code development</h5>
                    <h3>Our Vision</h3>
                    <p >We just believe in developing code which could ease your Problems? Which helps the people reduce their manual efforts and expand their
                    productivity. Our efforts are to touch every corner of society and work with maximum reach. We want to make LogiqueCode for most of the common basic requirements 
                    to maximum individuals and Business? so that power of LogiqueCode can be relished. </p>
                </div>
            </div>
            <div class="row my-5">
                <div class="col-12 col-sm-8 col-lg-8" data-aos="fade-right" data-aos-duration="3000">
                    <h5>Logical Code development</h5>
                    <h3>Our Mission</h3>
                    <p >To Etsablish a mindset where people understand the power of LogiqueCode written 
                    with latest technology. We need to bridge the gap where toil reductions can be done using powerful LogiqueCode developed which could touch with problem statement of common individuals or Business? so that same amount of work can be done more effectively. 
                    At the same time hire and work with creative and brilliant IT professionals who can bring new and fresh ideas to solve complex business problems.</p>
                
                </div>
                <div class="col-12 col-sm-4 col-lg-4" data-aos="fade-left" data-aos-duration="3000">
                    <img src="https://pngimage.net/wp-content/uploads/2018/06/our-mission-png.png" alt=""/>
                </div>
            </div>
            
            </div>
        </div>
        
        </div>
        {/* Center popup */}
        <div className="row my-5">
        <div className="col-md-3" data-aos="fade-right" data-aos-duration="3000">
            <img src="https://pngimage.net/wp-content/uploads/2020/01/company-values-png-2.png" alt="" width="250" height="300" />
        </div>
        <div className="col-md-7" data-aos="fade-down" data-aos-duration="3000">
            <h4>We are Building a Community for the Developers</h4>
        <div class="hero-btns contact-btn">
            <NavLink to="/contact">JOIN US</NavLink>
        </div>
        </div>
        <div className="col-md-2" data-aos="fade-left" data-aos-duration="3000">
            <img src="https://pngimage.net/wp-content/uploads/2019/05/roundabout-icon-png-1.png" alt="" />
        </div>
        </div>
         {/* End Center popup */}
    </div>
  )
}



// import React, { Component } from 'react'
// export default class About extends Component {
//   render() {
//     return (
//     <div>
//       <div className="services">
//         <div class="container responsive_block">
//             <div class="row align-items-center my-5">
//             <div class="col-lg-12">
//             <h3>All About LogiqueCode??</h3>     
//                 <p>Company got established in Noida, Uttar Pradesh (U.P)-India. LogiqueCode is born with a dream to provide
//                     software solution by writing custom tailored CODE which could solve manual or effort taking tasks with aim to reach every 
//                     corner of society, understand the needs and provide CODE to automate time consuming efforts.</p>
//             </div>          
//             </div>

//             {/* cloud services start */}
//             <section class="computing">
//             <div class="container">
//                 <div class="row align-items-center my-5">
//                     <div class="col-12 col-sm-4 col-lg-4">
//                     <img src="https://pngimage.net/wp-content/uploads/2018/06/our-vision-png-6.png" alt=""/>
//                     </div>
//                     <div class="col-12 col-sm-8 col-lg-8">
//                     <h3>Our Vision</h3>
//                     <p>We just believe in developing code which could ease your Problems? Which helps the people reduce their manual efforts and expand their
//                     productivity. Our efforts are to touch every corner of society and work with maximum reach. We want to make LogiqueCode for most of the common basic requirements 
//                     to maximum individuals and Business? so that power of LogiqueCode can be relished.</p>
//                     </div>
//                 </div>
//             </div>
//             </section>
//             {/* cloud services ends */}

//             {/* Cyber security starts */}
//             <section class="webapp">
//                 <div class="container">
//                     <div class="row align-items-center my-5">
//                         <div class="col-12 col-sm-8 col-lg-8">
//                             <h3>Our Mission</h3>
//                             <p >To Etsablish a mindset where people understand the power of LogiqueCode written 
//                      with latest technology. We need to bridge the gap where toil reductions can be done using powerful LogiqueCode developed which could touch with problem statement of common individuals or Business? so that same amount of work can be done more effectively. 
//                      At the same time hire and work with creative and brilliant IT professionals who can bring new and fresh ideas to solve complex business problems.</p>
//                         </div>
//                         <div class="col-12 col-sm-4 col-lg-4">
//                             <img src="https://pngimage.net/wp-content/uploads/2018/06/our-mission-png.png" alt=""/>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//       </div>
//     </div>
//     )
//   }
// }
