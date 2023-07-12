import React from 'react'
import styles from "./PageNumeration.module.css"
import Link from 'next/link'
import LinkUnderline from '../LinkUnderline'

const PageNumeration = ({elements, currentPage, setCurrentPage, totalPages}) => {
    return (
        <div className={styles.navigation}>
            {elements.length === 0 && <>Es ist ein Fehler aufgekommen...</>}
            {currentPage > 1 && (
                <span className={styles.arrow} onClick={() => setCurrentPage(currentPage - 1)}>
                    <LinkUnderline href="#" top="0">Vorherige</LinkUnderline>
                </span>
            )}

            {elements.length > 0 && <div className={styles.text}>Seite <span>{currentPage}</span> von {totalPages}</div>}

            {currentPage < totalPages && (
                <span className={styles.arrow} onClick={() => setCurrentPage(currentPage + 1)}>
                    <LinkUnderline href="#" top="0">Nächste</LinkUnderline>
                </span>
            )}
        </div>
    )
}

export default PageNumeration