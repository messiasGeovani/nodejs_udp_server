const dgram = require('dgram')
const socket = dgram.createSocket('udp4')

const messageController = require('./controllers/messageController')

socket.on('listenning', async () => {
    const address = server.address()
    console.log(`Server listenning ${address.address}:${address.port}`)
})

socket.on('message', messageController.store)

socket.on('error', err => {
    console.log(`Server error: ${err.stack}`)
    socket.close()
})

exports.Socket = socket