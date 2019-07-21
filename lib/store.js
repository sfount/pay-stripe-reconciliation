const jsonfile = require('jsonfile')

const SERVICE_CONFIGURATION_FILE = 'conf/services.json'

const read = async function read() {
  try {
    const services = await jsonfile.readFile(SERVICE_CONFIGURATION_FILE)
    return services
  } catch (e) {
    // file didn't exist, return a base object to start
    return { services: [] }
  }
}

const write = async function write(json) {
  return jsonfile.writeFile(SERVICE_CONFIGURATION_FILE, json)
}

module.exports = { read, write }

