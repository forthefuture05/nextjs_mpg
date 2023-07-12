import React from 'react'
import styles from "./SmallComponents.module.css"
import Link from 'next/link'

const BasicLink = props => {

    return (
        <div className={styles.link}>
            {props.children}
            <Link href={props.href} />
        </div>
    )
}

export default BasicLink