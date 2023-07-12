import React from 'react'
import styles from "./Nav.module.css"
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Nav = () => {
    const router = useRouter();
    const currentPath = router.pathname;
    const pathSegments = currentPath.split('/');

    const targetSegment = pathSegments[1];

    return (
        <div className={styles.nav}>
            <div className={styles.innerNav}>
                <div className={styles.logo}>
                    <Image src="/images/logo.png" width="87" height="24" />
                    <Link href="/"></Link>
                </div>

                <div className={styles.links}>
                    <ul>
                        <li className={targetSegment === "" && styles.activeL}>
                            <Link href="/"></Link>
                            <Image src="/images/home.svg" width="25" height="25" />
                        </li>
                        <li className={targetSegment === "stories" && styles.activeL}>
                            <Link href="/stories"></Link>
                            <Image src="/images/stories.svg" width="25" height="25" />
                        </li>
                        <li className={targetSegment === "schuelerzeitung" && styles.activeL}>
                            <Link href="/schuelerzeitung"></Link>
                            <Image src="/images/zeitung.svg" width="25" height="25" />
                        </li>
                        <li className={targetSegment === "termine" && styles.activeL}>
                            <Link href="/termine"></Link>
                            <Image src="/images/termine.svg" width="25" height="25" />
                        </li>
                        <li className={targetSegment === "galerie" && styles.activeL}>
                            <Link href="/galerie"></Link>
                            <Image src="/images/galerie.svg" width="25" height="25" />
                        </li>
                        <li className={targetSegment === "dateien" && styles.activeL}>
                            <Link href="/dateien"></Link>
                            <Image src="/images/dateien.svg" width="25" height="25" />
                        </li>
                    </ul>
                </div>

                <div className={styles.toDash}>
                    <Link href={`https://mpgoberstufe-v2.up.railway.app/admin`} target='_blank'></Link>
                    <Image src="/images/admin.svg" width="25" height="25" />
                </div>
            </div>
        </div>
    )
}

export default Nav