import * as React from "react"
import PropTypes from 'prop-types';
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Text from "./text";

// import * as styles from "../components/index.module.css"

const ArticlePreview = ({ title, body, url, imageurl, alt }) => (
    <div>
        <Link to={url} target="_blank">
            <h2>{title}</h2>
        </Link>
        <GatsbyImage image={imageurl} alt={alt} title={alt} />
        <Text text={body}></Text>
        <Link to={url} target="_blank">
            Read more...
        </Link>
    </div>

    // <div className={styles.container}>
    //     <GatsbyImage image={imageurl} alt={alt} title={alt}
    //         height={100}
    //         className={styles.backgroundImage}
    //         style={{ position: "absolute" }} />
    //     <div className={styles.content}>
    //         <h1 className={styles.row}>
    //             {title}
    //         </h1>
    //         <div className={styles.row} dangerouslySetInnerHTML={{ __html: body }} />
    //         <Link to={'article' + url} target="_blank" className={styles.button}>
    //             Read more
    //         </Link>
    //     </div>
    // </div>

)

ArticlePreview.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    imageurl: PropTypes.object.isRequired,
    alt: PropTypes.string.isRequired,
}

export default ArticlePreview;