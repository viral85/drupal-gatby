import * as React from "react"
import PropTypes from 'prop-types';
import { Link } from "gatsby";
import * as styles from "../components/index.module.css"
import { Text } from "../stories/text";
const ParagraphView = ({ title, body, url, imageurl, alt }) => (
    //     <div className={styles.container}>
    // <GatsbyImage image={imageurl} alt={alt} title={alt}
    //     height={100}
    //     className={styles.backgroundImage}
    //     style={{ position: "absolute" }} />
    //     <div className={styles.content}>
    //         <h1 className={styles.row}>
    //             {title}
    //         </h1>
    //         <Text text={body}></Text>
    //     </div>
    // </div>
    <div className={styles.container}>
        <div className={styles.paragraph_header} style={{ backgroundImage: `url(${imageurl})` }}>
            <div className={styles.description}>
                <h2>{title}</h2>
                <Text text={body}></Text>
                <Link to={url} target="_blank">
                    Read more...
                </Link>
            </div>
        </div>
    </div>
)
ParagraphView.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    imageurl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}
export default ParagraphView;