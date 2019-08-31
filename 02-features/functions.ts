const add = (a: number, b: number): number => a + b;
// const addStr = (a: number, b: string): number => a + b;  <== Error because it returns a string

const substract = (a: number, b: number) => {
  a - b;
};
// const c: number = substract(10, 2); <== Error beacuse TS inferes void since substract is returning nothing

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = (a: number, b: number): number => {
  return a * b;
};

async function asyncAdd(a: number, b: number): Promise<number> {
  return a + b;
}

function asyncSubstract(a: number, b: number): Promise<number> {
  return Promise.resolve(a - b);
}

function shit(shouldReturn): never {
  throw new Error();
}

function destructuring({
  data: todo
}: {
  data: { id: number; title: string; completed: boolean };
}): void {
  console.log(`
  id: ${todo.id}
  title: ${todo.title}
  completed: ${todo.completed}
`);
}
