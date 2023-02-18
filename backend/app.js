const request = require('postman-request')
const keys = require('../config.js')


const url = `https://rickandmortyapi.com/api/character`
const data = request({url, json:true}, (error, response) => {
    console.log(response)
})

