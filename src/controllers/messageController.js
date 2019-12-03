// file module import
const fs = require('fs')
const path = require('path')

// message controller module
exports.messageController = {
    
    // storage method
    async store(msg, rinfo) {

        const data = {
            message: msg,
            author: rinfo.address + ':' + rinfo.port
        }

        const message = JSON.stringify(data, undefined, 2)

        const storagePath = path.resolve(__dirname, '..', '..', 'tmp', 'messages.json')

        console.log(`Server got: ${data.message} from ${data.author}`)

        await fs.appendFile(storagePath, message, err => {
            if (err) {
                console.log(err)
            } else {
                console.log('The file was saved!')
            }
        })
    }
}