async function a() {
  let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return data.json();
}
export { a };
