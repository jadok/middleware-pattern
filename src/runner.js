const chalk = require('chalk')
const _TAG = (tag, color = 'cyan') => chalk[color](`[${tag}]`)

const lift = (configSetps) => {
  configSetps.reduce((promiseChain, currentTask) => promiseChain
    .then(chainResults =>
      currentTask().then(Array.prototype.concat.bind(chainResults))
    )
  , Promise.resolve([]))
  .catch((err) => {
    console.error(_TAG('runner'), 'Failed to initialize Server: %s', err)
    throw err
    return process.exit(1)
  })
}

export default lift
