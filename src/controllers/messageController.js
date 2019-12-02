// message controller module
exports.messageController = {
    
    // storage method
    async store(msg, rinfo) {
        console.log(`Server got: ${msg} from ${rinfo.address}:${rinfo.port}`)
    }
}