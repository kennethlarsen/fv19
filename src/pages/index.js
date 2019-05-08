import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} >
        <div className="main-container" style={{ background: '#fff' }}>
          <h1>Vi fanger trolde til valget 👹</h1>
          <p>
            Vi er ikke helt en avis - heller ikke helt et forskningsprojekt.<br/>
            Vi er en gruppe frivillige borgere, der systematisk indsamler data fra Twitter om folketingsvalget, analyserer det og fanger de trolde, der ønsker at få indflydelse på valgdebatten.
          </p>

          <p>
            Her på siden vil vi løbende publicere vores fund. I kan også følge med på <a href="https://twitter.com/Ftnytdk">Twitter</a>.
          </p>

        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
