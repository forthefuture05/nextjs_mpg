import React from 'react'
import styles from "./MainSide.module.css"
import Nav from './BigComponents/Navigation/Nav'
import TitleBar from './SmallComponents/TitleBar'
import Footer from './BigComponents/Footer/Footer'
import OneImage from "./SmallComponents/OneImage/OneImage.jsx"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import LinkUnderline from './SmallComponents/LinkUnderline'
import OneDate from './SmallComponents/OneDate/OneDate'
import BasicLink from './SmallComponents/BasicLink'

const MainSide = props => {
    const sidebar = props.sidebar;
    const bilder = sidebar.bilder ? sidebar.bilder : [];
    const termine = sidebar.termine ? sidebar.termine : [];

    return (
        <div className={styles.mainSide}>
            <Nav />

            <div className={styles.grid}>
                <div className={styles.innerGrid}>
                    <main className={styles.main}>
                        {props.children}
                    </main>

                    <aside className={styles.side}>
                        {!props.noPic && <>
                            <TitleBar top="0">Unsere Galerie</TitleBar>

                            {bilder.length > 0 ? <><Swiper
                                slidesPerView={1}
                                spaceBetween={90}
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 4500,
                                    disableOnInteraction: true,
                                }}
                                modules={[Autoplay, Pagination]}
                                className={styles.slider}
                            >{bilder.map(e => {
                                return (
                                    <SwiperSlide key={e.id}>
                                        <OneImage data={e} />
                                    </SwiperSlide>
                                )
                            })}</Swiper><LinkUnderline href="/galerie">Alle ansehen</LinkUnderline></> : <>
                                Ein Fehler ist aufgekommen...
                            </>}
                        </>}


                        <TitleBar top={props.noPic ? "0" : null}>Unsere Termine</TitleBar>

                        {!props.noTermine && <>
                            {termine.length > 0 ? <>
                                {termine.map(e => {
                                    return (
                                        <OneDate data={e} key={e.id} />
                                    )
                                })}
                                <LinkUnderline href="/termine">Alle ansehen</LinkUnderline>
                            </> : <>Etwas ist schiefgelaufen...</>}
                        </>}

                        <div className={styles.aboutUs}>
                            <span>Oberstufensprecher</span>
                            <h3>Warum diese Seite?</h3>
                            <p>Hallo, wir sind eure Oberstufensprecher! Wir haben diese Website ins Leben gerufen, damit wir als Schüler besser informiert sind über Events und uns als Schulgemeinschaft näher kommen können!</p>
                            <div className={styles.linkBox}>
                                <BasicLink href="/aboutus">Mehr erfahren</BasicLink>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default MainSide