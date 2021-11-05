import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layout/layout'
import Seo from '../seo'
import moment from 'moment'

const Posts = ({ title, content, edges }) => {
    return (
        <Layout>
            <Seo title={title} />
            <section class="page-title bg-primary position-relative">
                <div class="container">
                    <div class="row">
                    <div class="col-12 text-center">
                        <h1 class="text-white font-tertiary">{title}</h1>
                    </div>
                    </div>
                </div>
                <img src="images/illustrations/page-title.png" alt="illustrations" class="bg-shape-1 w-100" />
                <img src="images/illustrations/leaf-pink-round.png" alt="illustrations" class="bg-shape-2" />
                <img src="images/illustrations/dots-cyan.png" alt="illustrations" class="bg-shape-3" />
                <img src="images/illustrations/leaf-orange.png" alt="illustrations" class="bg-shape-4" />
                <img src="images/illustrations/leaf-yellow.png" alt="illustrations" class="bg-shape-5" />
                <img src="images/illustrations/dots-group-cyan.png" alt="illustrations" class="bg-shape-6" />
                <img src="images/illustrations/leaf-cyan-lg.png" alt="illustrations" class="bg-shape-7" />
                </section>
                <section class="section">
                <div class="container">
                    <div class="row">
                    {edges.map(post => {
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
}

export default Posts