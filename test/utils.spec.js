import { assert } from 'chai'

import Task from '../src/task'
import typeCheckup from '../src/utils'

describe('utils', () => {
  it('should recognize a list of tasks', () => {
    const tasks = [
      new Task(),
      new Task(),
      new Task()
    ];
    assert(typeCheckup(tasks), 'Defined type check didn\'t work :(')
    assert(typeCheckup() === false);
  })
})
