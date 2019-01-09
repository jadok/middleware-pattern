import { assert } from 'chai'

import Task from '../src/task'

describe('Task', () => {
  it('should execute a default Task', async () => {
    const t = new Task()
    t.execute().then(val => assert(val === 42, 'wrong default value'))
  })
})
