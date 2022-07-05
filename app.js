import express, { response } from 'express';
const app = express()
const port = process.env.PORT || 3005
import handlebars from 'handlebars';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import path from 'path'
import fetch from 'node-fetch';


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//VIEW ENGINE - HANDLEBARS
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//ARQUIVOS ESTÁTICOS
app.use(express.static('public'))

//ROTAS
app.get('/', (req, res) => {
    res.render('home')
})
app.post('/pokemon', (req, res) => {
    var pokeNameSearch = req.body.search.toLowerCase()
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNameSearch}`)
        .then(api => api.json())
        .then(response => {    
            console.log(response)
            res.render('poke', { response })
        })
        .catch(err => {
            console.log('ESSE POKEMON NÃO EXISTE: ' + err)
            res.render('home')
        })

})
app.listen(port, () => {
    console.info(`Executing: http://localhost:${port}`)
})