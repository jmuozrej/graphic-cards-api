const express = require('express')
const app = express()               

const port = process.env.PORT || 8080

const graphics = [
    {
        id: 0,
        name: 'NVIDIA',
        price: 100,
        model: '4090',
        ram: 'GDDR6'
    },
    {
        id: 1,
        name: 'NVIDIA',
        price: 200,
        model: '4080',
        ram: 'GDDR5'
    },
    {
        id: 2,
        name: 'NVIDIA',
        price: 300,
        model: '1080',
        ram: 'GDDR4'
    },
    {
        id: 3,
        name: 'NVIDIA',
        price: 400,
        model: '1070',
        ram: 'GDDR4'
    },
    {
        id: 4,
        name: 'NVIDIA',
        price: 500,
        model: '4080',
        ram: 'GDDR6'
    },
    {
        id: 5,
        name: 'NVIDIA',
        price: 600,
        model: '2080',
        ram: 'GDDR5'
    },
    {
        id: 6,
        name: 'AMD',
        price: 100,
        model: '6650',
        ram: 'GDDR4'
    },
    {
        id: 7,
        name: 'AMD',
        price: 200,
        model: '6750',
        ram: 'GDDR5'
    },
    {
        id: 8,
        name: 'AMD',
        price: 300,
        model: '6600',
        ram: 'GDDR5'
    },
    {
        id: 9,
        name: 'AMD',
        price: 400,
        model: '6700',
        ram: 'GDDR6'
    },
    {
        id: 10,
        name: 'AMD',
        price: 500,
        model: '6800',
        ram: 'GDDR5'
    },
    {
        id: 11,
        name: 'AMD',
        price: 600,
        model: '6600',
        ram: 'GDDR4'
    }
]

app.get('/graphics', function(req, res) {
  res.json(graphics)   
})


app.listen(port)
console.log('API listening on port ' + port)