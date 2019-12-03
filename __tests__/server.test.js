const { Socket } = require('../src/socket')

describe('Server', () => {

    it('should bind the socket on the port 8000', async () => {
        expect(await Socket.bind(8000))
    })
})