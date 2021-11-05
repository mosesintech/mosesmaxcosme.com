import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import moment from 'moment'

const year = moment(new Date()).format('YYYY');

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Full Stack Developer | Wordpress | React" />
    <section class="hero-area bg-primary" id="parallax">
      <div class="container">
        <div class="row">
          <div class="col-lg-11 mx-auto">
            <h1 class="text-white font-tertiary headliner">
              Full Stack<br />
              Developer<br /><hr style={{border: '4px solid black', width: '30%', margin: '0', padding: '0', textAlign: 'left'}}/>
              Wordpress<br />
              React<br />
              Node
            </h1>
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
        <li class="mb-3">
          <a class="text-white" href="https://instagram.com/mosesintech" target="_blank" rel="noreferrer noopener">
            <i class="ti-instagram"></i>
          </a>
        </li>
        <li class="mb-3">
          <a class="text-white" href="https://twitter.com/mosesintech" target="_blank" rel="noreferrer noopener">
            <i class="ti-twitter"></i>
          </a>
        </li>
        <li class="mb-3">
          <a class="text-white" href="https://www.linkedin.com/in/moses-maximino-cosme-ii/" target="_blank" rel="noreferrer noopener">
            <i class="ti-linkedin"></i>
          </a>
        </li>
      </ul>
    </section>
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto text-center">
            <p class="font-secondary paragraph-lg text-dark" dangerouslySetInnerHTML={{__html: data.wpPage.content}}/>
            <Link to="/about" class="btn btn-transparent">know more</Link>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-lg-12 text-center">
            <h2 class="section-title">Expertise</h2>
          </div>
          <div class="col-lg-3 col-md-4 text-center">
            <img src="images/experience/icon-1.png" alt="icon" />
            <p class="mb-0">2008 - {year}</p>
            <h4>Web Design</h4>
          </div>
          <div class="col-lg-3 col-md-4 text-center">
            <img src="images/experience/icon-2.png" alt="icon" />
            <p class="mb-0">2008 - {year}</p>
            <h4>WordPress Development</h4>
          </div>
          <div class="col-lg-3 col-md-4 text-center">
            <img src="images/experience/icon-3.png" alt="icon" />
            <p class="mb-0">2018 - {year}</p>
            <h4>React | Node | PHP</h4>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="section-title">Blog</h2>
          </div>
          {data.allWpPost.edges.map(post => {
            return (
              <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                <Link to={`/blog/${post.node.slug}`}>
                  <article class="card shadow">
                    <img 
                      class="rounded card-img-top" 
                      src={post.node.featuredImage.node.sourceUrl}
                      alt={post.node.title}
                      style={{objectFit:'scale-down', width:'350px', height:'260px'}}
                    />
                    <div class="card-body">
                      <h4 class="card-title">
                        <a class="text-dark" href="blog-single.html">
                          {post.node.title}
                        </a>
                      </h4>
                      <p class="cars-text" dangerouslySetInnerHTML={{__html: post.node.excerpt}}/>
                    </div>
                  </article>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    wpPage(id: {eq: "cG9zdDo3"}) {
      content
    }
    allWpPost(limit: 3, sort: { fields: [date], order: DESC  }) {
      edges {
        node {
          id
          title
          excerpt
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;