import * as React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <StaticQuery 
    query={graphql`
        query {
          allWpMenu(filter: {id: {eq: "dGVybToy"}}) {
            edges {
              node {
                menuItems {
                  nodes {
                    label
                  }
                }
              }
            }
          }
        }
    `}
    render={data => (
      <header class="navigation fixed-top">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <Link class="navbar-brand font-tertiary h3" to="/">
            <h3 style={{color:'#FFF'}}>{siteTitle}</h3>
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
            aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse text-center" id="navigation">
            <ul class="navbar-nav ml-auto">
              {data.allWpMenu.edges[0].node.menuItems.nodes.map(item => {
                return (
                  <li class="nav-item">
                    <Link class="nav-link" to={`/${item.label.toLowerCase()}`}>
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
      </header>
    )} 
    />
)

export default Header
