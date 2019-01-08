import t from 'typy';

class Task {
  async execute() {
    return 42;
  }

}

const typeCheckup = tasks => {
  if (!t(tasks).isArray) {
    return false;
  }

  return tasks.reduce((acc, currTask) => {
    console.log(currTask, currTask.toString());

    if (!(currTask instanceof Task)) {
      console.log('failde', currTask, currTask.toString());
    }

    return acc && currTask instanceof Task;
  }, true);
};

const runner = configSetps => new Promise((resolve, reject) => {
  if (!typeCheckup(configSetps)) {
    console.error('The runner is not configure to run a list of tasks.', configSetps);
    return reject(new Error('wrong type'));
  }

  const tasksList = configSetps.reduce((promiseChain, currentTask) => promiseChain.then(chainResults => currentTask.execute().then(Array.prototype.concat.bind(chainResults))), Promise.resolve([]));
  return resolve(tasksList);
});

var index = {
  runner,
  Task,
  typeCheckup
};

export default index;
//# sourceMappingURL=index.ejs.js.map
