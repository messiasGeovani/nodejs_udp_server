exports.messageController = {
    async store(msg, rinfo) {
        console.log(`Server got: ${msg} from ${rinfo.address}:${rinfo.port}`)
    }
}