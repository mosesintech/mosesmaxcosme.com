import React from 'react'
import { Link, graphql } from 'gatsby'
import moment from 'moment'
import Layout from '../components/layout/layout'
import Seo from '../components/seo'
import SocialShare from '../components/social'

export default function PostTemplate({ data }) {
    const { nodes } = data.allWpPost;
    return (
        <Layout>
            <Seo title={nodes[0].title} />
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
      }
    }
  }
`