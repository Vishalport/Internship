import React ,{ useEffect } from "react";
import { NavLink } from "react-router-dom";
import Aos from 'aos';
import "aos/dist/aos.css";

function Services() {
    useEffect(() => {
        Aos.init({ duration:2000 });
      }, []);
      useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="services">
      <div class="container responsive_block">
        <div class="row align-items-center my-5">
          <div class="col-lg-7" data-aos="fade-right" data-aos-duration="3000">
            <h2>SERVICES</h2>            
          </div>
          <div class="col-lg-5">
            <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://img.freepik.com/free-vector/designers-are-working-desing-web-page-web-design-user-interface-user-experience-content-organization_335657-4403.jpg?w=2000"
                alt=""
                data-aos="fade-left" data-aos-duration="3000"
                />
          </div>
        </div>

        <div class="row align-items-center my-5" data-aos="fade-up" data-aos-duration="3000">
          <div class="col-lg-12">
            <h4 class="color-h4">Services We Offer</h4>     
            <p>We specialize in a wide range of technology which includes various software development tools and languages, Cloud Services, Web/ Application design, and development. Our team will help businesses to figure out a Software Code bases solution and elevate their value and productivity through Post and pre Go-Live. We are here to help you decide the right architecture and processes to follow and oversee the successful delivery of your projects.</p>       
            <p>LogiqueCode assures that our team of talented developers, designers, and data analysts will help you reach your goals. We take care of development needs, and you can put all your efforts towards your core business.</p>
          </div>          
        </div>

        {/* cloud services start */}
        <section class="computing">
        <div class="container">
            <div class="row my-5">
                <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-right" data-aos-duration="2000">
                <img src="https://pngimage.net/wp-content/uploads/2019/05/communicative-icon-png-1.png" alt=""/>
                </div>
                <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-left" data-aos-duration="3000">
                <h5>Logical Code development and Cloud Services</h5>
                <h3>We are born in an era of cloud computing</h3>
                <p>We are an end-to-end service provider for all your software code development and deployment over cloud needs. Start getting the most from the code you get developed from us and deployed using various cloud technologies. 
                Start your journey to move to multi-cloud with industry-leading tools and agile best practices to migrate or develop your applications on cloud with intelligently utilizing only required set of services so as to consider Cost Factor also during deployment. </p>
                </div>
            </div>
        </div>
        </section>
        {/* cloud services ends */}

        {/* Cyber security starts */}
        <section class="webapp">
            <div class="container">
                <div class="row my-5">
                    <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-right" data-aos-duration="2000">
                        <h5>Web App Design and Development Services</h5>
                        <h3>We help you to get your website and webapp Go-To-Market ready</h3>
                        <p>In the digital realm, a website is an essential element for businesses, irrespective of their size and type. It helps them increase their brand presence via the Internet breaking the geographical boundaries. A professional website design itself can be used to attain various marketing strategies in order to help your business surge. 
                        Thoughtfully created website designs code have a far outspread reach than any other form of marketing tools.
                        The increasing visibility is one of the factors that necessitate having a site with clean web page design. LogiqueCode is a single-point destination for all your graphic design needs.</p>
                    </div>
                    <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-left" data-aos-duration="3000">
                        <img src="https://terranovasecurity.com/wp-content/uploads/2020/09/Cyber-Security-Awareness-Hub-icon.png" alt="" width="400" height="400" />
                    </div>
                </div>
            </div>
        </section>
        {/* Cyber security ends */}

        {/* Managed Security Services ends */}

         {/* Agile/Devops starts */}

            <div class="container">
                <div class="row my-5">
                    <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-right" data-aos-duration="2000">
                        <img src="https://www.altexsoft.com/media/2018/08/DevOps-cycle.png" alt=""/>
                    </div>
                    <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-left" data-aos-duration="2000">
                        <h5>Agile/DevOps Orchestration Services</h5>
                        <h3>Latest IT Tools and methadology for efficiencies and innovation</h3>
                        <p>We focus on Agile methodology for Software Development and DevOps methadology to deliver IaaS / SaaS Solutions, LogiqueCode can quickly deliver reliable and repeatable cloud infrastructure.</p>
                        <div className="ul">
                            <ul class="service_page_lists">
                                <li>Infrastructure As Code</li>
                                <li>Continuous Integration and Continuous Deployment</li>
                                <li>Deploying Application Code</li>
                                <li>Automating software release processes</li>
                                <li>Increased Observibility</li>
                                <li>Infrastructure Management</li>
                            </ul>
                        </div>
                    </div>                   
                </div>
            </div>

        {/* Agile/Devops ends */}

        {/* LET’S EXPLORE THE ROAD starts */}
        <div className="row my-5">
            <div className="col-md-3" data-aos="fade-right" data-aos-duration="3000">
                <img src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-a-man-who-works-at-a-computer-png-image_5361911.jpg" alt="" width="250" height="300" />
            </div>
            <div className="col-md-7" data-aos="fade-down" data-aos-duration="3000">
                <h4>LET'S PARTNER & MOVE TOWARDS NEW DAWN </h4>
                <div class="hero-btns contact-btn">
                    <NavLink to="/contact">CONNECT WITH US</NavLink>
                </div>
            </div>
            <div className="col-md-2" data-aos="fade-left" data-aos-duration="3000">
                <img src="https://www.clipartmax.com/png/middle/108-1081569_dots-clipart-nine-9-dot-pattern.png" alt="" />
            </div>
        </div>
        {/* LET’S EXPLORE THE ROAD ends */}

        {/* Develpment services starts */}
        <section class="about">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-right" data-aos-duration="2000">
                        <img src="https://sensationsolutions.com/wp-content/uploads/2022/03/Homepage-Header-Menu-Slider_04-1-1.png" alt=""/>
                    </div>
                    <div class="col-12 col-sm-12 col-lg-6" data-aos="fade-left" data-aos-duration="2000">
                        <h5>Development Services</h5>
                        <h3>Cost-effective Software Development services with complete satisfaction & benefit's analysis</h3>
                        <p>LogiqueCode are capable of fulfilling software code development and deployment requirements, be it web or application development. The outcome is exceptional usability software code which satisfies the business needs.</p>
                        <div className="row">
                            <div className="col-md-6">
                                <ul class="service_page_lists">
                                    <li>Custom Web Development</li>
                                    <li>Web App Development</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul class="service_page_lists">
                                    <li>Enterprise Web Development</li>
                                    <li>Support & Maintenance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
        {/* Develpment services ends */}

       

        {/* <div className="row">
            <div className="col-md-3">
                <img src="images/character.svg" alt="" />
            </div>
            <div className="col-md-8">
                <h2>We Empathize, We Design, We Develop Your Ideas</h2>
            </div>
            <div className="col-md-1">
                <img src="images/work-dots.svg" alt="" />
            </div>
        </div> */}
        

      </div>
    </div>
  );
}

export default Services;
