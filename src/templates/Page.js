import React from 'react'
import { graphql } from 'gatsby'
import Posts from "../components/pages/posts"
import About from '../components/pages/about'
import Default from "../components/pages/default"

export default function PageTemplate({ data }) {
  const page = data.allWpPage.nodes[0]
  const posts = data.allWpPost;

  switch (page.title) {
    case 'Blog':
      return <Posts {...page} {...posts} />
    case 'About':
      return <About {...page} />
    default:
      return <Default {...page} />;
  }
}

export const query = graphql`
  query($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
    allWpPost {
      edges {
        node {
          id
          title
          slug
          content
          excerpt
          date
          author {
              node {
                  name
              }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`