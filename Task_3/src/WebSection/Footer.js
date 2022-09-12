import React from 'react';
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer>
      <div class="container">
          <div className="row">
               <div className="col-md-4 col-sm-4 my-3">
                <h2 class="footer_item_color">Connect with Us</h2>
                    <form method="POST" id="contact-form" role="form">
                        <div class="controls">
                            <div class="row">
                                <div class="col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <input id="form_name" type="text" name="name" class="form-control" placeholder="Enter Your Name" required="required" data-error="Firstname is required."/>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <input id="form_email" type="email" name="email" class="form-control" placeholder="Enter Your Email" required="required" data-error="Valid email is required."/>    
                                    </div>
                                </div>
                            </div>
                            {/* <div class="row">
                                <div class="col-md-12 col-sm-12">
                                    <div class="form-group" hidden>
                                        <select id="form_need" name="need" class="form-control" required="required" data-error="Please specify your need.">
                                            <option value="" selected disabled>--Select Your Issue--</option>
                                            <option >Request Invoice for order</option>
                                        <option >Request order status</option>
                                            <option >Haven't received cashback yet</option>
                                            <option >Other</option>
                                        </select>                           
                                    </div>
                                </div>
                            </div> */}
                                
                            
                            <div class="row">
                                <div class="col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <textarea id="form_message" name="message" class="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea>
                                        </div>
                                </div>
                                <div class="col-md-12">                       
                                <input type="submit" class="btn btn-success btn-send  pt-2 btn-block" value="Send Message"/> 
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            <div className="col-md-4 col-sm-4 my-3 footer_seperation">                
                <h3 class="footer_item_color footer_head">NAVIGATION</h3>
                <ul class="contact-nav footer_menu">
                    <li><NavLink to="/">Home.</NavLink><br/></li>
                    <li><NavLink to="/about">About Us.</NavLink><br/></li>
                    <li><NavLink to="/Service">Services.</NavLink><br/></li>
                    <li><NavLink to="/contact">Contact.</NavLink><br/></li>
                </ul>
                
                <ul class="social">
                    <li><a href="#"><i class="icofont-facebook"></i></a></li>
                    <li><a href="#"><i class="icofont-twitter"></i></a></li>
                    <li><a href="#"><i class="icofont-dribbble"></i></a></li>
                </ul>
                
              </div>
              <div className="col-md-4  col-sm-4 my-3 footer_resp ">
                    <h3 class="footer_item_color footer_head">HAVE A QUESTIONS?</h3>
                    <p class="location_icon">
                        <i class="icofont-location-pin "></i>
                       : BS-1107, Galaxy Diamond Plazza, Noida | Branch Off:- Meerut
                    </p>
                    <p class="phone_icon">
                        <i class="icofont-phone"></i>
                        +91-6397695719 
                    </p >
                    <p class="phone_icon"><i class="icofont-email"></i>logiquecode@gmail.com</p>
                    
              </div>
            </div>
            <h6 class="py-2">© 2022 - LogiqueCode LLP. All Right Reserved.</h6>  
        </div>
      </footer>      
    </div>
  )
}




