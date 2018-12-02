const typeChecker = require('./utils')

const runner = (configSetps) => new Promise((resolve, reject) => {
  if (!typeChecker(configSetps)) {
    console.error('The runner is not configure to run a list of tasks.', configSetps)
    return reject(new Error('wrong type'))
  }
  const tasksList = configSetps.reduce((promiseChain, currentTask) =>
    promiseChain
      .then(chainResults =>
        currentTask.execute().then(Array.prototype.concat.bind(chainResults))
      ), Promise.resolve([]))
  return resolve(tasksList)
})

module.exports = runner
