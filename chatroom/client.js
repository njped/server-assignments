const net = require('net')
const fs = require('fs')

const client = net.createConnection(4000, () => {
  console.log('Connected')
})

client.setEncoding('utf-8')

client.on('data', (message) => {
  console.log(message)
})

process.stdin.on('data', (userInput) => {
  client.write(userInput)
})

client.on('end', () => {
  console.log('Disconnected')
})
