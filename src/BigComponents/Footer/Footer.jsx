import React from 'react'
import styles from "./Footer.module.css"
import Image from 'next/image'
import Link from 'next/link'
import LinkUnderline from '@/src/SmallComponents/LinkUnderline'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.ctn}>
                <div className={styles.image}>
                    <Image src="/images/logo.png" width="270" height="74" />
                </div>
                <div className={styles.links}>
                    <ul>
                        <li><LinkUnderline top="0" href="/impressum">Impressum</LinkUnderline></li>
                        <li><LinkUnderline top="0" href="/datenschutz">Datenschutzerklärung</LinkUnderline></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer