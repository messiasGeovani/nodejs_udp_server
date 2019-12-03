const { Socket } = require('../../src/socket')

describe('Socket', () => {

    it('should send a message', async () => {
        const msg = Buffer.from('ola')
        expect(await Socket.send(msg, 8000, 'localhost', err => {
            Socket.close()
        }))
    })

})