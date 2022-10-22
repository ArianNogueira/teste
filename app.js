const express = require("express")
const app = express()

const PORT = process.env.PORT || 8877

app.get('/equipes', (req, res) => {
    res.json({
        cpu: 'AMD Ryzen 1700',
        gpu: 'Galax GTX 1070',
        mouse: 'Logitech G PRO',
        headset: 'Turtle beach PX22',
        keayborard: 'Alfawise v1'
    })
})

app.get('/about', (req, res) => {
    res.json({
        name: 'Ayron',
        email: 'ayronveigas123@gmail.com',
        urls: [
            {
                type: 'github',
                url: 'https://githutb.com/abnerfs'
            }, 

            {
                type: 'youtube',
                url: 'https://www.youtube.com/'
            },

            {
                type: 'discord',
                url: 'abnerfs#8033'
            }
        ]
    })
})

app.get('/', (req, res) => {
    res.json({
        msg: 'OK'
    })
})

app.listen(PORT, () => {
    console.log('Executanto na porta: ' + PORT)
})