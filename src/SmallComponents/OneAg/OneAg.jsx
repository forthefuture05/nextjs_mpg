import React from 'react'
import styles from "./OneAg.module.css"
import BasicLink from '../BasicLink'

const OneAg = props => {
    const ag = props.data.attributes;

    return (
        <div className={styles.ag}>
            <h3>{ag.Name}</h3>
            <p>{ag.Beschreibung}</p>

            <div className={styles.linkCtn}>
                <div><BasicLink href={`/dateien/ags/${ag.Slug}`}>Mehr erfahren</BasicLink></div>
            </div>
        </div>
    )
}

export default OneAg