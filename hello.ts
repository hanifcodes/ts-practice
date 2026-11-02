type Task = { id: number; text: string; done: boolean };

const tasks: Task[] = [];

function addTask(text: string): void {
  tasks.push({ id: Date.now(), text, done: false });
}

addTask("Buy bread");
console.log(tasks);

   addTask(42);