import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import Layout from "../components/layout"
import ArticlePreview from '../components/article-preview'

class TroldeIndex extends React.Component {
  render() {
    const trolls = get(this, 'props.data.allContentfulTrold.edges')

    return (
      <Layout location={this.props.location} >
        <div className="main-container" style={{ background: '#fff' }}>
         <h1>Vores troldekartotek</h1>

          Vigtigt: Læs vores artikel om hvordan vi definerer en "trold": 
          <Link to={`/blog/hvordan-definerer-vi-en-trold`}>Hvordan definerer vi en trold?</Link>
          <hr/>
          <ul class="trolls-list">
            {trolls.map(({ node }) => {
              return (
                <div className="trolls">
                  <h2>@{node.username}</h2>
                  <li key={node.slug}>
                    Twitter URL: <a href={`https://twitter.com/${node.username}`}>{`https://twitter.com/${node.username}`}</a>
                  </li>
                  <li key={node.slug}>
                    Har profilen et botnet-brugernavn? {node.hasBotNetName ? ' ✅ Ja' : ' ⛔ Nej'}
                  </li>
                  <li key={node.slug}>
                    Har profilen et højt antal tweet pr. dag? {node.highTweets ? ' ✅ Ja' : ' ⛔ Nej'}
                  </li>

                  <li key={node.slug}>
                    Har profilen få personlige tweets? {node.fewPersonal ? ' ✅ Ja' : ' ⛔ Nej'}
                  </li>

                  <li key={node.slug}>
                    Har profilen identiske tweets med andre profiler? {node.identicalTweets ? ' ✅ Ja' : ' ⛔ Nej'}
                  </li>

                  <li key={node.slug}>
                    Har profilen delt mange citater fra nyhedshistorier? {node.quoteTweets ? ' ✅ Ja' : ' ⛔ Nej'}
                  </li>
                </div>
              )
            })}
          </ul>
        </div>
      </Layout>
    )
  }
}

export default TroldeIndex

export const pageQuery = graphql`
  query TroldeIndexQuery {
    site {
      siteMetadata {
        title
      }
    }

    allContentfulTrold(filter: {}) {
      edges {
        node {
          username
          hasBotNetName
          highTweets
          fewPersonal
          identicalTweets
          quoteTweets
        }
      }
    }
   
  }
`
