import React from 'react';
import './About.css';

function About() {
  return (
    <main id="main">
      <div className="site-section pb-0 site-portfolio">
        <div className="container">
          <div className="row mb-5 align-items-end">
            <div className="col-md-6" data-aos="fade-up">
              <h2>About Me</h2>
              <p className="mb-0">my portfolio</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 mb-5 mb-md-0 order-md-2" data-aos="fade-up">
            <div class="col-md-4">
            <p><img src="img/asem.jpeg" alt="Image" className="img-fluid" style={{ maxWidth: '300px' }} /></p>
            </div>
            <div class="col-md-7"> 
              <p>My name is Asem, i'm 19 years old, and i'm programmer</p>
             
            </div>
              <p><a href="https://www.linkedin.com/in/asem-kenesova-247420257/" className="readmore">view portfolio</a></p>
            </div>
            <div className="col-md-4 ml-auto order-md-1" data-aos="fade-up">
              <h3 className="h3 mb-4">Skills</h3>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <div className="d-flex mb-1">
                    <strong>Experience</strong>
                    <span className="ml-auto">1 year</span>
                  </div>
                  <div className="progress custom-progress">
                    <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex mb-1">
                    <strong>Clients</strong>
                    <span className="ml-auto">100+</span>
                  </div>
                  <div className="progress custom-progress">
                    <div className="progress-bar" role="progressbar" style={{ width: "96%" }} aria-valuenow="96" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex mb-1">
                    <strong>Partners</strong>
                    <span className="ml-auto">15+</span>
                  </div>
                  <div className="progress custom-progress">
                    <div className="progress-bar" role="progressbar" style={{ width: "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
