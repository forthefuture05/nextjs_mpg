import React from 'react'
import styles from "./OneArticle.module.css"

const NoArticle = () => {
    return (
        <div className={styles.noArticle}>
            <h3>Es ist ein Fehler vorgefallen...</h3>
        </div>
    )
}

export default NoArticle