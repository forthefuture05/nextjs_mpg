import React from 'react'
import styles from "./OneArticle.module.css"
import BasicLink from '../BasicLink'

const OneArticle = (props) => {
    const article = props.data.attributes

    return (
        <div className={styles.article}>
            <div className={styles.image} style={{ backgroundImage: `url('${article.Bild.data.attributes.url}')` }}></div>

            <div className={styles.content}>
                <div>
                    <h3>{article.Titel}</h3>
                    <span>{new Date(article.publishedAt).toLocaleDateString("default", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric"
                    })}</span>
                    <p>{article.Beschreibung}</p>

                    <BasicLink href={`/schuelerzeitung/${article.Slug}`}>Lesen</BasicLink>
                </div>
            </div>
        </div>
    )
}

export default OneArticle