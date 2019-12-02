const socket = require('../src/socket').Socket

describe('Server', () => {

    it('should bind the socket on the port 8000', async () => {
        expect(await socket.bind(8000))
    })
})