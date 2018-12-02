const t = require('typy')

const Task = require('./task')

const typeCheckup = (tasks) =>  {
  if (!t(tasks).isArray) {
    return false
  }
  return tasks.reduce((acc, currTask) => {
    return acc && currTask instanceof Task
  }, true)
}

module.exports = typeCheckup
