import React from 'react'
import styles from "./OneImage.module.css"

const OneImage = props => {
    const image = props.data.attributes;

    return (
        <div className={styles.image}>
            <div className={styles.top}>
                <div className={styles.iconDiv}>
                    <div className={styles.icon} style={{ backgroundImage: `url('${image.Autor.data.attributes.Bild.data.attributes.url}')` }}></div>
                </div>
                <div className={styles.info}>
                    <div>
                        <p>{image.Autor.data.attributes.Name}</p>
                        <span>{image.Autor.data.attributes.Klasse}. Klasse</span>
                    </div>
                </div>
            </div>

            <div className={styles.imagePost} style={{backgroundImage: `url(${image.Bild.data.attributes.url})`}}></div>

            <div className={styles.bottom}>
                <p>{image.Beschreibung}</p>
            </div>
        </div>
    )
}

export default OneImage