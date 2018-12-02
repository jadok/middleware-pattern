declare module "middleware-pattern" {
  class Task {
    execute(): Promise<any>
  }

  export function runner(tasks: Array<Task>): Promise<any>
}
