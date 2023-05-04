const net = require('net')
let guestCounter = 0

const server = net.createServer(client => {
  client.setEncoding('utf-8')
  client.write("Welcome to the chat room " + findGuests())
  client.on('data', clientData => {
    console.log(findGuests() + ': ' + clientData)
  })

}).listen(4000, () => {
  console.log('listening to port 3000')
})

server.on('error', (err) => {
  throw err
})

function findGuests() {
  guestCounter++
  return `Guest${guestCounter}`
}