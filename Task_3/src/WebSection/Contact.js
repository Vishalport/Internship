import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";


export default function Contact() {
  
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    
    return (
    <div className='responsive_block'>
      <div class=" text-center mt-7"> 
               <h2>Contact Us</h2>
             </div>
           <div class="row ">
           <div class="col-lg-7 mx-auto">
             <div class="card mt-2 mx-auto p-4 bg-light">
                 <div class="card-body bg-light">
                  <div class=" text-center mt-7"> 
                    <h2 data-aos="fade-zoom" data-aos-duration="3000">Contact Us</h2>
                    <hr/>
                  </div>
                 <div class = "container">
                   <form id="contact-form" role="form">
                     <div class="controls">
                     <div class="row">
                         <div class="col-md-6">
                           <div class="form-group">
                                 <label for="form_name">First Name *</label>
                               <input id="form_name" type="text" name="name" class="form-control" placeholder="Please Enter Firstname" required="required" data-error="Firstname is required."/>
                                
                             </div>
                         </div>
                         <div class="col-md-6">
                             <div class="form-group">
                               <label for="form_lastname">Last Name *</label>
                                 <input   type="text" name="surname" class="form-control" placeholder="Please Enter Lastname" required="required" data-error="Lastname is required."/>
                             </div>
                         </div>
                     </div>
                     <div class="row">
                         <div class="col-md-6">
                             <div class="form-group">
                                 <label for="form_email">Email *</label>
                                 <input id="form_email" type="email" name="email" class="form-control" placeholder="Please Enter Email" required="required" data-error="Valid email is required."/>    
                             </div>
                         </div>
                         <div class="col-md-6">
                             <div class="form-group" hidden>
                                 <label for="form_need">Please Specify Your Need *</label>
                                 <select id="form_need" name="need" class="form-control" required="required" data-error="Please specify your need.">
                                     <option value="" selected disabled>--Select Your Issue--</option>
                                     <option >Request Invoice for order</option>
                                  <option >Request order status</option>
                                    <option >Haven't received cashback yet</option>
                                     <option >Other</option>
                                 </select>                           
                             </div>
                         </div>
                     </div>
                     <div class="row">
                         <div class="col-md-12">
                             <div class="form-group">
                                 <label for="form_message">Message *</label>
                                  <textarea id="form_message" name="message" class="form-control" placeholder="Write Your Message Here..." rows="4" required="required" data-error="Please, leave us a message."></textarea>
                                 </div>
                             </div>
                         <div class="col-md-12">                       
                           <input type="submit" class="btn btn-success btn-send  pt-2 btn-block" value="Send Message"/> 
                     </div>
                     </div>
               </div>
               </form>
               </div>
             </div>
           </div>
       </div>
       </div>
    </div>
    )

}

