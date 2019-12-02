// file module import
const fs = require('fs')

// message controller module
exports.messageController = {
    
    // storage method
    async store(msg, rinfo) {
        console.log(`Server got: ${msg} from ${rinfo.address}:${rinfo.port}`)

        await fs.writeFile('/tmp/messages.json', msg.toString(), err => {
            if (err) {
                console.log(err)
            } else {
                console.log('The file was saved!')
            }
        })
    }
}