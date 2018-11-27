import { expect } from 'chai'

import Task from '../src/task'
import runner from '../src/runner'

describe('Runner', () => {
  it('should run a list of tasks', (done) => {
    const tasks = [
      new Task(),
      new Task()
    ]
    runner(tasks)
      .catch((err) => {
        expect(true, err).to.equal(false)
        done()
      })
      .then((val) => {
        expect(val, 'should run the list of tasks').to.deep.equal([42, 42])
        done()
      })

  })

  it('should not run a list of objects', (done) => {
    const objects = [
      new Object()
    ]
    runner(objects)
      .then(() => {
        expect(false, 'runner should not be running').to.equal(true)
        done()
      })
      .catch((err) => {
        expect(true, err).to.equal(true)
        done()
      })
  })
})
