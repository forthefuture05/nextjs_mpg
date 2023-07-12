import React from 'react'
import styles from "./OneDate.module.css"
import LinkUnderline from '../LinkUnderline'

const OneDate = props => {
    const termin = props.data.attributes;

    return (
        <div className={styles.dateBox}>
            <div className={styles.date}>
                <div>{new Date(termin.Datum).toLocaleDateString("default", {
                        day: "2-digit"
                    })}</div>
                <span>{new Date(termin.Datum).toLocaleDateString("default", {
                        month: "long"
                    })}</span>
            </div>

            <div className={styles.info}>
                <div>
                    <p>{termin.Bezeichnung}</p>

                    <LinkUnderline top="1" href={`/termine/${termin.Slug}`}>Mehr</LinkUnderline>
                </div>
            </div>
        </div>
    )
}

export default OneDate