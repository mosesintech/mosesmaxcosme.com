import React from 'react'
import Layout from '../layout/layout'
import Seo from '../seo'

const About = ({ title, content, featuredImage }) => {
    return (
        <>
        <Layout>
        <Seo title={title} />
        <section class="page-title-alt bg-primary position-relative">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-white font-tertiary">About Me</h1>
                    </div>
                </div>
            </div>
            <img src="images/illustrations/leaf-bg-top.png" alt="illustrations" class="bg-shape-1 w-100" />
            <img src="images/illustrations/dots-group-sm.png" alt="illustrations" class="bg-shape-2" />
            <img src="images/illustrations/leaf-yellow.png" alt="illustrations" class="bg-shape-3" />
            <img src="images/illustrations/leaf-orange.png" alt="illustrations" class="bg-shape-4" />
            <img src="images/illustrations/dots-group-cyan.png" alt="illustrations" class="bg-shape-5" />
            <img src="images/illustrations/leaf-cyan-lg.png" alt="illustrations" class="bg-shape-6" />
        </section>
        <section class="section pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-8" dangerouslySetInnerHTML={{__html: content}} />
                    <div class="col-md-4 text-center drag-lg-top">
                        <div class="shadow-down mb-4">
                        <img 
                            src={featuredImage.node.sourceUrl}
                            alt="Moses Maximino Cosme II | Full Stack Web Developer" 
                            class="img-fluid w-100 rounded-lg border-thick border-white" 
                        />
                        </div>
                        <h4>Moses Maximino Cosme II</h4>
                    </div>
                </div>
            </div>
            </section>
        </Layout>
        </>
    )
}

export default About