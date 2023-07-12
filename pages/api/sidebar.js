export default async function handler(req, res) {

    /** Get Images for the sidebar! */

    try {
        const resBilder = await fetch(`${process.env.STRAPI_URL}/api/bilder?pagination[start]=0&pagination[limit]=6&populate[Bild][true]&populate[Autor][populate][Bild][true]&sort=publishedAt:desc`)
        const bilder = await resBilder.json()

        const resTermine = await fetch(`${process.env.STRAPI_URL}/api/termine?pagination[start]=0&pagination[limit]=3&sort=Datum:desc`)
        const termine = await resTermine.json()

        const sidebar = {
            bilder: bilder.data,
            termine: termine.data
        }

        res.status(200).json(sidebar);
    } catch (error) {
        res.status(404).json({message: "Something went wrong!"})
    }

}