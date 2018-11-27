class Task {
  execute() {
    return new Promise((resolve) => resolve(42))
  }
}

module.exports = Task
