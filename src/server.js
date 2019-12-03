// server module import
const { Socket } = require('./socket')

// binding the server on the 8000 port
Socket.bind(8000, () => {
    console.log('Server running at 8000')
})