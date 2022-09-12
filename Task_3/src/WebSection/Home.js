import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
// import {NavBar, Nav, NavItem} from 'react-bootstrap';

export default function Body() {
  useEffect(() => {
    Aos.init({ duration:3000 });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className='pt-5 pd-5'>
          <div className="home responsive_block">
              <div class="container hero" >  
                  <div class="row">
                      <div class="col-md-7" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="3000">
                        {/* The magic can’t begin until you get started */}
                          <h4><span><br/>Magic of <b>LogiqueCode</b> can be cognized.. </span><br/></h4>
                          <h5><span>When our <b>CODE work</b> for your <b>needs</b> and make your work <b>faster</b>.</span></h5>
                          <div class="my-5">
                                <span>At LogiqueCode we Work to understand the business Software Code needs.<br/>Understand your business problem and architect a custom tailored<br/>Logical Software business solution for you. Then build, assist, deploy and
                                  <br/>maintain the code for you to accelerate your business journey.
                              </span> 
                          </div><br/>
                          <div class="hero-btns" >
                            <NavLink to="/about">GET STARTED</NavLink>
                            <NavLink to="/contact">Get in Touch.</NavLink>
                          </div>
                      </div>
                      {/* <div class="col-md-7 "> */}
                        <img src="https://victorelmann.files.wordpress.com/2021/01/website-design.gif" class="img-fluid float_add"  alt="" data-aos="fade-left" data-aos-duration="3000" />
                      {/* </div> */}
                  </div>
              </div>                
              <div class="container home_images">
                <div class="portfolio-aside">
                  <img src="" alt=""/>
                </div>
                <div class="container">
                  <div class="row">
                    <div class="col-12" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="3000">
                    <br />
                      <h4>SOLUTIONING WHICH WE DO TO BUILD LOGICAL CODE FOR YOU</h4>
                      <span> We build solutions using latest tools such as Python, Django, Angular, React, Bootstrap and may more tools to provide
                      you solutions which server your needs. </span>
                    </div>                    
                  </div>
                  {/* home images block */}
                                   
                  <div class="row">
                    <div class="col-12 col-lg-4 work-box">
                      <div class="photobox ">
                          <div class="photobox__previewbox" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="3000">                         
                            <img src="images/restful_api.svg" class="img-fluid p-2" alt="Preview" width="20%" />                          
                            <span class="photobox__label">REST API Development Solutions</span>
                          </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 work-box">
                      <div class="photobox ">
                          <div class="photobox__previewbox" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="3000">                         
                            <img src="images/web-design.svg" class="img-fluid p-2" alt="Preview"/>                          
                            <span class="photobox__label">Web Design & Hosting Solutions</span>
                          </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 work-box">
                      <div class="photobox ">
                          <div class="photobox__previewbox" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="3000">                         
                            <img src="images/cloud-deployment.svg" class="img-fluid p-2" alt="Preview"/>                         
                            <span class="photobox__label">Cloud Security & Deployment Solutions</span>
                          </div>
                        </div>
                    </div>
                  </div>   
                  {/* second row content social-media.svg */}
                  <div class="row">
                    <div class="col-12 col-lg-4 work-box">
                      <div class="photobox ">
                          <div class="photobox__previewbox" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="3000">                         
                            <img src="images/social-media.svg" class="img-fluid p-2" alt="Preview" width="20%" />                          
                            <span class="photobox__label">Digital Marketing Solutions</span>
                          </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 work-box">
                      <div class="photobox ">
                          <div class="photobox__previewbox" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="3000">                         
                            <img src="images/business-solution.svg" class="img-fluid p-2" alt="Preview"/>                          
                            <span class="photobox__label">IT Consulting Solutions</span>
                          </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 work-box">
                      <div class="photobox ">
                          <div class="photobox__previewbox" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="3000">                         
                            <img src="images/integration.svg" class="img-fluid p-2" alt="Preview"/>                         
                            <span class="photobox__label">Code Integration Solutions</span>
                          </div>
                        </div>
                    </div>
                  </div>   
                  {/* second row image content */}
                  <div id="hiden-gallery" class="hide">
                    <div class="row">
                      <div class="col-12 col-lg-4 work-box">
                        <div class="photobox ">
                            <div class="photobox__previewbox">                        
                              <img src="images/5.png" class="photobox__preview" alt="Preview"/>                           
                              <span class="photobox__label">Awesome Work</span>
                            </div>
                          </div>
                      </div>
                      <div class="col-12 col-lg-4 work-box">
                        <div class="photobox ">
                            <div class="photobox__previewbox">                            
                              <img src="images/3.png" class="photobox__preview" alt="Preview"/>                        
                              <span class="photobox__label">Awesome Work</span>
                            </div>
                          </div>
                      </div>
                      <div class="col-12 col-lg-4 work-box">
                        <div class="photobox ">
                            <div class="photobox__previewbox">                        
                              <img src="images/1.png" class="photobox__preview" alt="Preview"/>                           
                              <span class="photobox__label">Awesome Work</span>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    {/*<div class="col-12 more-btn">                  
                      <a class="more-btn-inside"></a>
                    </div>*/}
                  </div>
                </div>
            </div>
         </div>
      </div>
      </>

  )
}
