// dgram module
const dgram = require('dgram')
// udp server config
const socket = dgram.createSocket('udp4')

// message controller module import
const { messageController } = require('./controllers/messageController')

// listenning route config
socket.on('listenning', async () => {
    // server adress information
    const address = server.address()
    console.log(`Server listenning ${address.address}:${address.port}`)
})

// message module config
socket.on('message', messageController.store)

// error case config
socket.on('error', err => {
    console.log(`Server error: ${err.stack}`)
    // stopping the server
    socket.close()
})

exports.Socket = socket