import { assert } from 'chai'
import Task from '../src/task'

describe('Task', () => {
  it('should recognize a list of tasks', () => {
    const tasks = [
      new Task(),
      new Task(),
      new Task()
    ];
    const sampleTask = new Task()
    assert(sampleTask.typeCheckup(tasks), 'Defined type check didn\'t work :(')
    assert(sampleTask.typeCheckup() === false);
  })
})
