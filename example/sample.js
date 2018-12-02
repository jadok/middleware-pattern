var { runner, Task } = require('..')

class SampleTask extends Task {
  async execute() {
    return 45;
  }
}

class FailingTask extends Task {
  async execute() {
    throw new Error('Crying ' + this.constructor.name)
  }
}

runner([
  new SampleTask()
])
  .then((res) => console.log(res))

runner([
  new FailingTask()
])
  .then(v => console.log('should not happen', v))
  .catch(err => console.error(err))
