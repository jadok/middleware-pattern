import t from 'typy'

import Task from './task'

const typeCheckup = (tasks) =>  {
  if (!t(tasks).isArray) {
    return false
  }
  return tasks.reduce((acc, currTask) => {
    return acc && currTask instanceof Task
  }, true)
}

export default typeCheckup
