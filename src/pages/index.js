import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section class="hero-area bg-primary" id="parallax">
  <div class="container">
    <div class="row">
      <div class="col-lg-11 mx-auto">
        <h1 class="text-white font-tertiary">Moses <br />Maximino<br /> Cosme II</h1>
      </div>
    </div>
  </div>
  <div class="layer-bg w-100">
    <img class="img-fluid w-100" src="images/illustrations/leaf-bg.png" alt="bg-shape" />
  </div>
  <div class="layer" id="l2">
    <img src="images/illustrations/dots-cyan.png" alt="bg-shape" />
  </div>
  <div class="layer" id="l3">
    <img src="images/illustrations/leaf-orange.png" alt="bg-shape" />
  </div>
  <div class="layer" id="l4">
    <img src="images/illustrations/dots-orange.png" alt="bg-shape" />
  </div>
  <div class="layer" id="l5">
    <img src="images/illustrations/leaf-yellow.png" alt="bg-shape" />
  </div>
  <div class="layer" id="l6">
    <img src="images/illustrations/leaf-cyan.png" alt="bg-shape" />
  </div>
  <div class="layer" id="l7">
    <img src="images/illustrations/dots-group-orange.png" alt="bg-shape" />
  </div>
  <div class="layer" id="l8">
    <img src="images/illustrations/leaf-pink-round.png" alt="bg-shape" />
  </div>
  <div class="layer" id="l9">
    <img src="images/illustrations/leaf-cyan-2.png" alt="bg-shape" />
  </div>
  <ul class="list-unstyled ml-5 mt-3 position-relative zindex-1">
    <li class="mb-3"><a class="text-white" href="https://themefisher.com/"><i class="ti-facebook"></i></a></li>
    <li class="mb-3"><a class="text-white" href="https://themefisher.com/"><i class="ti-instagram"></i></a></li>
    <li class="mb-3"><a class="text-white" href="https://themefisher.com/"><i class="ti-dribbble"></i></a></li>
    <li class="mb-3"><a class="text-white" href="https://themefisher.com/"><i class="ti-twitter"></i></a></li>
  </ul>
</section>
<section class="section">
  <div class="container">
    <div class="row">
      <div class="col-lg-10 mx-auto text-center">
        <p class="font-secondary paragraph-lg text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <a href="about.html" class="btn btn-transparent">know more</a>
      </div>
    </div>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-title">Skills</h2>
      </div>
      <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div class="card shadow text-center">
          <div class="position-relative rounded-top progress-wrapper" data-color="#fdb157">
            <div class="wave" data-progress="90%"></div>
          </div>
          <div class="card-footer bg-white">
            <h4 class="card-title">Web Design (90%)</h4>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div class="card shadow text-center">
          <div class="position-relative rounded-top progress-wrapper" data-color="#9473e6">
            <div class="wave" data-progress="60%"></div>
          </div>
          <div class="card-footer bg-white">
            <h4 class="card-title">Logo Design (60%)</h4>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div class="card shadow text-center">
          <div class="position-relative rounded-top progress-wrapper" data-color="#bdecf6">
            <div class="wave" data-progress="80%"></div>
          </div>
          <div class="card-footer bg-white">
            <h4 class="card-title">After Effects (80%)</h4>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div class="card shadow text-center">
          <div class="position-relative rounded-top progress-wrapper" data-color="#ffbcaa">
            <div class="wave" data-progress="70%"></div>
          </div>
          <div class="card-footer bg-white">
            <h4 class="card-title">Web App (70%)</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="row justify-content-around">
      <div class="col-lg-12 text-center">
        <h2 class="section-title">Experience</h2>
      </div>
      <div class="col-lg-3 col-md-4 text-center">
        <img src="images/experience/icon-1.png" alt="icon" />
        <p class="mb-0">Jan 2007 - Feb 2009</p>
        <h4>Junior UX Designer</h4>
        <h6 class="text-light">WEBEX</h6>
      </div>
      <div class="col-lg-3 col-md-4 text-center">
        <img src="images/experience/icon-2.png" alt="icon" />
        <p class="mb-0">Mar 2009 - Aug 2014</p>
        <h4>UX & UI Designer</h4>
        <h6 class="text-light">AUGMEDIX</h6>
      </div>
      <div class="col-lg-3 col-md-4 text-center">
        <img src="images/experience/icon-3.png" alt="icon" />
        <p class="mb-0">Sep 2014 - Present</p>
        <h4>Senior UI Designer</h4>
        <h6 class="text-light">THEMEFISHER</h6>
      </div>
    </div>
  </div>
</section>
<section class="section position-relative">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="section-title">Education</h2>
      </div>
      <div class="col-lg-6 col-md-6 mb-80">
        <div class="d-flex">
          <div class="mr-lg-5 mr-3">
            <i class="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
          </div>
          <div>
            <p class="text-dark mb-1">2006</p>
            <h4>Marters in UX Design</h4>
            <p class="mb-0 text-light">Masassusets Institute of Technology</p>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 mb-80">
        <div class="d-flex">
          <div class="mr-lg-5 mr-3">
            <i class="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
          </div>
          <div>
            <p class="text-dark mb-1">2004</p>
            <h4>Honours in Fine Arts</h4>
            <p class="mb-0 text-light">Harvard University</p>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 mb-80">
        <div class="d-flex">
          <div class="mr-lg-5 mr-3">
            <i class="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
          </div>
          <div>
            <p class="text-dark mb-1">2000</p>
            <h4>Higher Secondary Certificat</h4>
            <p class="mb-0 text-light">Cardiff School</p>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 mb-80">
        <div class="d-flex">
          <div class="mr-lg-5 mr-3">
            <i class="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
          </div>
          <div>
            <p class="text-dark mb-1">1998</p>
            <h4>Secondary School Certificate</h4>
            <p class="mb-0 text-light">Cardiff School</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <img class="img-fluid edu-bg-image w-100" src="images/backgrounds/education-bg.png" alt="bg-image" />
</section>
<section class="section">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h2 class="section-title">Services</h2>
      </div>
      <div class="col-md-4 mb-4 mb-md-0">
        <div class="card hover-shadow shadow">
          <div class="card-body text-center px-4 py-5">
            <i class="ti-palette icon mb-5 d-inline-block"></i>
            <h4 class="mb-4">UI Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4 mb-md-0">
        <div class="card active-bg-primary hover-shadow shadow">
          <div class="card-body text-center px-4 py-5">
            <i class="ti-vector icon mb-5 d-inline-block"></i>
            <h4 class="mb-4">UX Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4 mb-md-0">
        <div class="card hover-shadow shadow">
          <div class="card-body text-center px-4 py-5">
            <i class="ti-panel icon mb-5 d-inline-block"></i>
            <h4 class="mb-4">Interaction Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h2 class="section-title">Portfolio</h2>
      </div>
    </div>
    <div class="row shuffle-wrapper">
      <div class="col-lg-4 col-6 mb-4 shuffle-item">
        <div class="position-relative rounded hover-wrapper">
          <img src="images/portfolio/item-1.png" alt="portfolio-image" class="img-fluid rounded w-100" />
          <div class="hover-overlay">
            <div class="hover-content">
              <a class="btn btn-light btn-sm" href="#!">view project</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-6 mb-4 shuffle-item">
        <div class="position-relative rounded hover-wrapper">
          <img src="images/portfolio/item-2.png" alt="portfolio-image" class="img-fluid rounded w-100" />
          <div class="hover-overlay">
            <div class="hover-content">
              <a class="btn btn-light btn-sm" href="#!">view project</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-6 mb-4 shuffle-item">
        <div class="position-relative rounded hover-wrapper">
          <img src="images/portfolio/item-3.png" alt="portfolio-image" class="img-fluid rounded w-100" />
          <div class="hover-overlay">
            <div class="hover-content">
              <a class="btn btn-light btn-sm" href="#!">view project</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-6 mb-4 shuffle-item">
        <div class="position-relative rounded hover-wrapper">
          <img src="images/portfolio/item-4.png" alt="portfolio-image" class="img-fluid rounded w-100" />
          <div class="hover-overlay">
            <div class="hover-content">
              <a class="btn btn-light btn-sm" href="#!">view project</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-6 mb-4 shuffle-item">
        <div class="position-relative rounded hover-wrapper">
          <img src="images/portfolio/item-5.png" alt="portfolio-image" class="img-fluid rounded w-100" />
          <div class="hover-overlay">
            <div class="hover-content">
              <a class="btn btn-light btn-sm" href="#!">view project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section bg-primary position-relative testimonial-bg-shapes">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h2 class="section-title text-white mb-5">Testimonials</h2>
      </div>
      <div class="col-lg-10 mx-auto testimonial-slider">
        <div class="text-center testimonial-content">
          <i class="ti-quote-right text-white icon mb-4 d-inline-block"></i>
          <p class="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <strong>quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.</strong> Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <img class="img-fluid rounded-circle mb-4 d-inline-block" src="images/testimonial/client-1.png"
            alt="client-image" />
          <h4 class="text-white">Jesica Gomez</h4>
          <h6 class="text-light mb-4">CEO, Funder</h6>
        </div>
        <div class="text-center testimonial-content">
          <i class="ti-quote-right text-white icon mb-4 d-inline-block"></i>
          <p class="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <strong>quis nostrud exercitation
              ullamco
              laboris nisi ut aliquip ex ea commodo consequat.</strong> Duis aute irure dolor in reprehenderit in
            voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.</p>
          <img class="img-fluid rounded-circle mb-4 d-inline-block" src="images/testimonial/client-1.png"
            alt="client-image" />
          <h4 class="text-white">Jesica Gomez</h4>
          <h6 class="text-light mb-4">CEO, Funder</h6>
        </div>
        <div class="text-center testimonial-content">
          <i class="ti-quote-right text-white icon mb-4 d-inline-block"></i>
          <p class="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <strong>quis nostrud exercitation
              ullamco
              laboris nisi ut aliquip ex ea commodo consequat.</strong> Duis aute irure dolor in reprehenderit in
            voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.</p>
          <img class="img-fluid rounded-circle mb-4 d-inline-block" src="images/testimonial/client-1.png"
            alt="client-image" />
          <h4 class="text-white">Jesica Gomez</h4>
          <h6 class="text-light mb-4">CEO, Funder</h6>
        </div>
      </div>
    </div>
  </div>
  <img src="images/backgrounds/map.png" alt="map" class="img-fluid bg-map" />
  <img src="images/illustrations/dots-group-v.png" alt="bg-shape" class="img-fluid bg-shape-1" />
  <img src="images/illustrations/leaf-orange.png" alt="bg-shape" class="img-fluid bg-shape-2" />
  <img src="images/illustrations/dots-group-sm.png" alt="bg-shape" class="img-fluid bg-shape-3" />
  <img src="images/illustrations/leaf-pink-round.png" alt="bg-shape" class="img-fluid bg-shape-4" />
  <img src="images/illustrations/leaf-cyan.png" alt="bg-shape" class="img-fluid bg-shape-5" />
</section>

<section class="section">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h2 class="section-title">Blogs</h2>
      </div>
      <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
        <article class="card shadow">
          <img class="rounded card-img-top" src="images/blog/post-3.jpg" alt="post-thumb" />
          <div class="card-body">
            <h4 class="card-title"><a class="text-dark" href="blog-single.html">Amazon increase income 1.5 Million</a>
            </h4>
            <p class="cars-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et
              dolore magna aliqua.</p>
            <a href="blog-single.html" class="btn btn-xs btn-primary">Read More</a>
          </div>
        </article>
      </div>
      <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
        <article class="card shadow">
          <img class="rounded card-img-top" src="images/blog/post-4.jpg" alt="post-thumb" />
          <div class="card-body">
            <h4 class="card-title"><a class="text-dark" href="blog-single.html">Amazon increase income 1.5 Million</a>
            </h4>
            <p class="cars-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et
              dolore magna aliqua.</p>
            <a href="blog-single.html" class="btn btn-xs btn-primary">Read More</a>
          </div>
        </article>
      </div>
      <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
        <article class="card shadow">
          <img class="rounded card-img-top" src="images/blog/post-2.jpg" alt="post-thumb" />
          <div class="card-body">
            <h4 class="card-title"><a class="text-dark" href="blog-single.html">Amazon increase income 1.5 Million</a>
            </h4>
            <p class="cars-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et
              dolore magna aliqua.</p>
            <a href="blog-single.html" class="btn btn-xs btn-primary">Read More</a>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>
<section class="section section-on-footer" data-background="images/backgrounds/bg-dots.png">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h2 class="section-title">Contact Info</h2>
      </div>
      <div class="col-lg-8 mx-auto">
        <div class="bg-white rounded text-center p-5 shadow-down">
          <h4 class="mb-80">Contact Form</h4>
          <form action="#" class="row">
            <div class="col-md-6">
              <input type="text" id="name" name="name" placeholder="Full Name" class="form-control px-0 mb-4" required />
            </div>
            <div class="col-md-6">
              <input type="email" id="email" name="email" placeholder="Email Address" class="form-control px-0 mb-4" required />
            </div>
            <div class="col-12">
              <textarea name="message" id="message" class="form-control px-0 mb-4"
                placeholder="Type Message Here" required></textarea>
            </div>
            <div class="col-lg-6 col-10 mx-auto">
              <button class="btn btn-primary w-100">send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

  </Layout>
)

export default IndexPage
