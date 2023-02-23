import * as React from "react";
import PropTypes from 'prop-types';
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage } from "gatsby-plugin-image";
import { Text } from "../stories/text";
import ParagraphView from "../components/paragraphview";

const Article = ({ data }) => {
  const article = data.nodeArticle;
  console.log(article);
  return (
    <Layout>
      <Seo title={article.title} />
      <div>
        <GatsbyImage
          class="background-image"
          alt={article.field_image.alt}
          title={article.field_image.alt}
          image={article.relationships.field_image.localFile.childImageSharp.gatsbyImageData} />
        <div>
          <h1>
            {article.title}
          </h1>
        </div>
      </div>
      <Text text={article.body.processed}></Text>
      {article.relationships.field_header_and_text?.map(paragraph => (
        <ParagraphView
          key={paragraph.drupal_id}
          title={paragraph.field_title}
          body={paragraph.field_teaser.substring(0, 256)}
          url={paragraph.field_cta.uri}
          imageurl={paragraph.relationships.field_image.localFile.publicURL}
          alt={paragraph.field_image.alt}
        ></ParagraphView>
      ))
      }
    </Layout>
  )
}

Article.propTypes = {
  data: PropTypes.object.isRequired,

}

export const query = graphql`
    query($ArticleId: String!) {
        nodeArticle(id: { eq: $ArticleId }) {
            id
            title
            body {
              processed
            }
            field_image {
              alt
            }
            relationships {
              field_image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                    )
                  }
                }
              }
              field_header_and_text {
                drupal_id
                field_body {
                  processed
                }
                field_cta {
                  uri
                }
                field_image {
                  alt
                }
                field_teaser
                field_title
                relationships {
                  field_image {
                    localFile {
                      publicURL
                    }
                  }
                }
              }
            }
        }
    }
`;

export default Article
