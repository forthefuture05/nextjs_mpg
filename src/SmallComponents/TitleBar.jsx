import React from 'react'
import styles from "./SmallComponents.module.css"

const TitleBar = props => {
    return (
        <div className={styles.titleBar} style={{marginTop: `${props.top}px`}}>
            <h2>{props.children}</h2>
        </div>
    )
}

export default TitleBar