const cheerio = require('cheerio');
const request = require('request-promise')


const init = async () => {
    try {
        const $ = await request({
            uri: 'https://quotes.toscrape.com/',
            transform: body => cheerio.load(body)
        })

        const websiteTitle = $('title')
        console.log(websiteTitle.html());

        // * limpiar todos los espacios en blanco
        const websiteHeading = $('h1')
        console.log(websiteHeading.text().trim());


        // * filtrar la etiquet a dentro de .quoote
        const quote = $('.quote').find('a')
        console.log(quote.html());


        // * acceder al tercer elemento de .quote
        const third_quote = $('.quote').next().next()
        // console.log(third_quote.html());

        /**
         * * traer todoos los post
         * Con .parent() volvemos hacia atras para obtener el siguiente .row con .next
         */
        const containerClass = $('.row .col-md-8 ').parent().next()
        // console.log(containerClass.html());


        // * traer todos los titulos de los posts
        const quotess = $('.quote span.text').each((i, el) => {
            console.log(i, $(el).html());
        })


    } catch (error) {
        console.log(error, 'error');
    }
}

init()