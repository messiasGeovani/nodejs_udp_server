// server module import
const socket = require('./socket').Socket

// binding the server on the 8000 port
socket.bind(8000, () => {
    console.log('Server running at 8000')
})