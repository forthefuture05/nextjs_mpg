import React from 'react'
import styles from "./OneStory.module.css";
import Image from 'next/image';
import BasicLink from '../BasicLink';

const OneStory = props => {
    const story = props.data.attributes;

    return (
        <div className={`${styles.story} ${props.small && styles.small}`} style={{marginBottom: `${props.bottom}px`}}>

            <div className={styles.top}>
                <div className={styles.user}>
                    <div className={styles.iconDiv}>
                        <div className={styles.icon} style={{ backgroundImage: `url('${story.Autor.data.attributes.Bild.data.attributes.url}')` }}></div>
                    </div>
                    <div className={styles.info}>
                        <div>
                            <p>{story.Autor.data.attributes.Name}</p>
                            <span>{story.Autor.data.attributes.Klasse}. Klasse</span>
                        </div>
                    </div>
                </div>

                <div className={styles.copyLink}>
                    <Image src="/images/copyLink.svg" width="26" height="26" />
                </div>
            </div>

            <div className={styles.image} style={{ backgroundImage: `url('${story.Bild.data.attributes.url}')` }}></div>

            <div className={styles.bottom}>
                <span>{new Date(story.publishedAt).toLocaleDateString("default", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric"
                })}</span>
                <h3>{story.Titel}</h3>
                {!props.small && <p>{story.Beschreibung}</p>}

                <BasicLink href={`/stories/${story.Slug}`}>Lesen</BasicLink>
            </div>
        </div>
    )
}

export default OneStory