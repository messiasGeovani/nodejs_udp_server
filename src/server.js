const socket = require('./socket').Socket

socket.bind(8000, () => {
    console.log('Server running at 8000')
})