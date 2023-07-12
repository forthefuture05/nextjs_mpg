import Link from 'next/link'
import React from 'react'
import styles from "./SmallComponents.module.css"

const LinkUnderline = props => {

    return (
        <div className={styles.linkUnderline} style={{marginTop: `${props.top}px`}}>
            <Link href={props.href}>{props.children}</Link>
        </div>
    )
}

export default LinkUnderline