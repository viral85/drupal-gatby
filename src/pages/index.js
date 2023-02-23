import * as React from "react"
import PropTypes from 'prop-types';
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ArticlePreview from "../components/article-preview";

const IndexPage = ({ data }) => {
  const articles = data.allNodeArticle.nodes;
  return (
    <Layout>
      <Seo title="Home" />
      {articles.map(article => (
        <ArticlePreview
          key={article.id}
          title={article.title}
          body={article.body.summary ? article.body.summary.substring(0, 256) : article.body.processes.substring(0, 256)}
          url={article.path.alias}
          imageurl={article.relationships.field_image.localFile.childImageSharp.gatsbyImageData}
          alt={article.field_image.alt}
        ></ArticlePreview>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allNodeArticle(sort: {created: DESC}) {
      nodes {
        id
        title
        body {
          processed
          summary
        }
        path {
          alias
        }
        field_image {
          alt
        }
        relationships {
          field_image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`
IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage;