import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layout/layout'
import Seo from '../seo'
import moment from 'moment'

const Posts = ({ title, content, edges }) => {
    return (
        <Layout>
            <Seo title={title} />
        </Layout>
    )
}

export default Posts