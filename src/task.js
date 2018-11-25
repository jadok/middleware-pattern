import t from 'typy'

class Task {
  execute() {
    return new Promise((resolve) => {
      console.log('It should do something')
      resolve()
    })
  }

  typeCheckup(tasks) {
    if (!t(tasks).isArray) {
      return false
    }
    return tasks.reduce((acc, currTask) => {
      return acc && currTask instanceof Task
    }, true)
  }
}

export default Task
