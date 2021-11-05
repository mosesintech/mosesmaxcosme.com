import React from 'react'
import { graphql } from 'gatsby'
import moment from 'moment'
import Layout from '../components/layout/layout'
import Seo from '../components/seo'
import SocialShare from '../components/social'

export default function PostTemplate({ data }) {
    const { nodes } = data.allWpPost;
    const post = nodes[0];
    const date = moment(post.date).format('DD MMMM, YYYY');
    const categories = post.categories;

    return (
        <Layout>
            <Seo title={post.title} />
            <section class="page-title bg-primary position-relative">
              <div class="container">
                <div class="row">
                  <div class="col-12 text-center">
                    <h1 class="text-white font-tertiary">Blog</h1>
                  </div>
                </div>
              </div>
              <img src="/images/illustrations/page-title.png" alt="" class="bg-shape-1 w-100" />
              <img src="/images/illustrations/leaf-pink-round.png" alt="" class="bg-shape-2" />
              <img src="/images/illustrations/dots-cyan.png" alt="" class="bg-shape-3" />
              <img src="/images/illustrations/leaf-orange.png" alt="" class="bg-shape-4" />
              <img src="/images/illustrations/leaf-yellow.png" alt="" class="bg-shape-5" />
              <img src="/images/illustrations/dots-group-cyan.png" alt="" class="bg-shape-6" />
              <img src="/images/illustrations/leaf-cyan-lg.png" alt="" class="bg-shape-7" />
            </section>
            <section class="section">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <h3 class="font-tertiary mb-3">{post.title}</h3>
                    <p class="font-secondary mb-5">Published on {date} by <span class="text-primary">{post.author.node.name}</span> in {categories.nodes.map(cat => {
                      return (
                        <span>{cat.name}</span>
                      )
                    })}</p>
                    <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '3rem 0'}}>
                      <img src={post.featuredImage.node.sourceUrl} style={{width: '85%'}} alt={post.title} />
                    </span>
                    <SocialShare />
                    <div class="content" dangerouslySetInnerHTML={{__html: post.content}}/>
                    <SocialShare />                    
                  </div>
                </div>
              </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        slug
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
            nodes {
                slug
                name
            }
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
`