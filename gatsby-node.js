const path = require('path')
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const PageTemplate = path.resolve('./src/templates/Page.js')
    const PostTemplate = path.resolve('./src/templates/Post.js')
    const CategoryTemplate = path.resolve('./src/templates/Category.js')
    const result = await graphql(`
    query {
        allWpPage {
            nodes {
                slug
                uri
            }
        }
        allWpPost {
            nodes {
                slug
            }
        }
        allWpCategory {
            nodes {
                slug
            }
        }
    }
    `)
    if(result.errors){
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    const { 
        allWpPage, 
        allWpPost, 
        allWpCategory
    } = result.data

    if (allWpPage.nodes.length) {
        allWpPage.nodes.map(page => {
            actions.createPage({
            path: page.uri,
            component: PageTemplate,
            context: {
                slug: page.slug,
            },
            })
        })
    }
    if (allWpPost.nodes.length) {
        allWpPost.nodes.map(post => {
            actions.createPage({
            path: `/blog/${post.slug}`,
            component: PostTemplate,
            context: {
                slug: post.slug,
            },
            })
        })
    }
    if (allWpCategory.nodes.length) {
        allWpCategory.nodes.map(cat => {
            actions.createPage({
            path: `/categories/${cat.slug}`,
            component: CategoryTemplate,
            context: {
                slug: cat.slug,
            },
            })
        })
    }
}