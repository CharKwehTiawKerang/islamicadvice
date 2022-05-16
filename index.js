const PORT = process.env.PORT || 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')

const app = express()


const paragraphs = [
    {
        name: 'harizasyraf',
        address: 'https://harizasyraf.netlify.app/',
        base: 'https://harizasyraf.netlify.app/'
    },
    {
        name: 'robbyleonardi',
        address: 'http://www.rleonardi.com/',
        base: ''
    },
    {
        name: 'jack',
        address: 'https://jacekjeznach.com/',
        base: ''
    }
]

const wordlink = []


paragraphs.forEach(paragraph => {
    axios.get(paragraph.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)

            $('a:contains("a")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                wordlink.push({
                    title,
                    url: paragraph.base + url,
                    source: paragraph.name
                })
            })
        }) 
})


app.get('/', (req, res) => {
    res.json('Welcome to my weather API')
})


app.get('/portfolio', (req, res) => {
    res.json(wordlink)
})


app.get('/portfolio/:portfolioID', (req, res) => {
    const portfolioID = req.params.portfolioID

    const paragraphAddress = paragraphs.filter(paragraph => paragraph.name == portfolioID)[0].address
    const paragraphBase = paragraphs.filter(paragraph => paragraph.name == portfolioID)[0].base

    axios.get(paragraphAddress)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const specificWordlink = []

            $('a:contains("a")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                specificWordlink.push({
                    title,
                    url: paragraphBase + url,
                    source: portfolioID
                })
            })
            res.json(specificWordlink)
        }).catch(err => console.log(err)) 
})


app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))