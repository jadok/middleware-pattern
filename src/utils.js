import t from 'typy'

import Task from './task.js'

const typeCheckup = (tasks) => (
  !t(tasks).isArray ?
    false
    : tasks.reduce((acc, currTask) => acc && currTask instanceof Task, true)
)

export default typeCheckup
