import React from 'react'
import{Link} from 'react-router-dom'

function AboutUsSection() {
  return (
    <section id="about" className="about section-bg">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>About Us</h2><br></br><br></br>
        <h3>Get to Know More <a href="#"><span>About Us</span></a></h3>

      </div>

      <div className="row">
        <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
          <img src="assets/img/" className="img-fluid" alt=""/>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
         
            <h3>Moneytre.in</h3>
            <ul>
              <li><i className="bi bi-check-circle"></i> We are leading Technical Analysis advisory and portfolio management services
                site.</li>
              <li><i className="bi bi-check-circle"></i> We provide comprehensive trading and investment strategies based on extensive
                research into the price movements, trends, and timing changes of multiple stocks and indices
                across various asset classes.</li>
              <li><i className="bi bi-check-circle"></i> We are on a mission is to serve market participants by making profitable and well
                informed trading decisions and aiding in the development of winning strategies to achieve
                your monetary goals in a measurable and consistent manner.</li>
              <li><i className="bi bi-check-circle"></i> Our purpose to help you achieve your financial objectives.</li>
              <li><i className="bi bi-check-circle"></i> Our aim is to inspire you to funnel your energies toward achieving measurable financial results by
                taking simple and consistent actions.</li>
            </ul>
           
          </div>
        </div>
      </div>
  </section>
    
  )
}

export default AboutUsSection