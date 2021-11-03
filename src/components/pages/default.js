import React from 'react'
import Layout from '../layout/layout'
import Seo from '../seo'

const Default = ({ title, content }) => {
    return (
        <Layout>
            <Seo title={title} />
        </Layout>
    )
}

export default Default