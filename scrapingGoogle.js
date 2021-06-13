const cheerio = require('cheerio');
const request = require('request-promise')


const init = async () => {
    try {
        const $ = await request({
            uri: 'https://www.godominicanrepublic.com/es/playas/',
            transform: body => cheerio.load(body)
        })

        let imagenes = []
        $('.fwpl-row .featuredimage').each((i, el) => {
            imagenes.push({
                st: $(el).text().substr(35)
            })
        })

        imagenes.map(res => {
            console.log(res);
        })


        // const websiteTitle = $('.fwpl-row').each((i, el) => {
        //     console.log(i, $(el).text());
        // })

    } catch (error) {
        console.log(error, 'ha ocurrido un errorrr');
    }
}


init()