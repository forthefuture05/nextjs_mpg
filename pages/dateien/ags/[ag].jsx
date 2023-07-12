import MainSide from '@/src/MainSide'
import TitleBar from '@/src/SmallComponents/TitleBar'
import Head from 'next/head';
import React from 'react'

export default function ag(props) {
    const sidebar = props.sidebar;


    return (
        <>
            <Head>
                <title>MPG Oberstufe - Eine Seite von Schüler für Schüler</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MainSide sidebar={sidebar}>
                <TitleBar top="0">Seite noch nicht erstellt</TitleBar>

                <h1>In Bearbeitung....</h1>
            </MainSide>
        </>
    )
}

export async function getServerSideProps() {
    const res2 = await fetch(`${process.env.HOSTING_DOMAIN}/api/sidebar`);
    const sidebar = await res2.json()

    return {
        props: {
            sidebar
        },
    }
}