import React from 'react'
import {Link} from 'react-router-dom'
import Topbar from '../Component/Topbar'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function WallAppreciation() {
  return (
    <div className='main'>
      <Topbar />
      <Header/>
      <main id="main" data-aos="fade-in">
    
    <div class="breadcrumbs" data-aos="fade-in">
     <div class="container">
       <ol>
       <li> <Link to={'/'}><a>Home</a></Link>  </li>
   
       </ol>
    
     </div>
   </div>

   <section id="testimonials" class="testimonials">
     <div class="container">
     
       <div class="row">
       <div class="section-title">
            <h2>Wall of Appreciation</h2>
          </div>

         <div class="col-lg-6">
           <div class="testimonial-item mt-2">
             <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt=""/>
             <h3>Saul Goodman</h3>
             <h4>Ceo &amp; Founder</h4>
             <p>
               <i class="bx bxs-quote-alt-left quote-icon-left"></i>
               Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
               <i class="bx bxs-quote-alt-right quote-icon-right"></i>
             </p>
           </div>
         </div>

         <div class="col-lg-6">
           <div class="testimonial-item mt-2">
             <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt=""/>
             <h3>Sara Wilsson</h3>
             <h4>Designer</h4>
             <p>
               <i class="bx bxs-quote-alt-left quote-icon-left"></i>
               Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
               <i class="bx bxs-quote-alt-right quote-icon-right"></i>
             </p>
           </div>
         </div>

         <div class="col-lg-6">
           <div class="testimonial-item mt-2">
             <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt=""/>
             <h3>Jena Karlis</h3>
             <h4>Store Owner</h4>
             <p>
               <i class="bx bxs-quote-alt-left quote-icon-left"></i>
               Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
               <i class="bx bxs-quote-alt-right quote-icon-right"></i>
             </p>
           </div>
         </div>

         <div class="col-lg-6">
           <div class="testimonial-item mt-2">
             <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt=""/>
             <h3>Matt Brandon</h3>
             <h4>Freelancer</h4>
             <p>
               <i class="bx bxs-quote-alt-left quote-icon-left"></i>
               Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
               <i class="bx bxs-quote-alt-right quote-icon-right"></i>
             </p>
           </div>
         </div>

         <div class="col-lg-6">
           <div class="testimonial-item mt-2">
             <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt=""/>
             <h3>John Larson</h3>
             <h4>Entrepreneur</h4>
             <p>
               <i class="bx bxs-quote-alt-left quote-icon-left"></i>
               Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
               <i class="bx bxs-quote-alt-right quote-icon-right"></i>
             </p>
           </div>
         </div>

         <div class="col-lg-6">
           <div class="testimonial-item mt-2">
             <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt=""/>
             <h3>John Larson</h3>
             <h4>Entrepreneur</h4>
             <p>
               <i class="bx bxs-quote-alt-left quote-icon-left"></i>
               Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
               <i class="bx bxs-quote-alt-right quote-icon-right"></i>
             </p>
           </div>
         </div>
        

       </div>

     </div>
   </section>

 </main>

 <Footer/>
    </div>
  )
}

export default WallAppreciation