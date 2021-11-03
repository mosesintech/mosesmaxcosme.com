import React from 'react'
import { Link, graphql } from 'gatsby'
import moment from 'moment'
import Layout from '../components/layout/layout'
import Seo from '../components/seo'

const CategoryTemplate = ({ data }) => {
    const {
        name,
        description,
        posts
    } = data.wpCategory;
    return (
        <Layout>
            <Seo title={name} />
        </Layout>
    )
}

export default CategoryTemplate

export const query = graphql`
    query($slug: String!) {
        wpCategory(slug: {eq: $slug}) {
            name
            description
            posts {
                nodes {
                    title
                    excerpt
                    slug
                    date
                    categories {
                        nodes {
                            name
                            slug
                        }
                    }
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