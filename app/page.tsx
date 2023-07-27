import { a } from "./getApi";

export default async function Home() {
  let data = await a();
  console.log(data);
  return <div>{data.title}</div>;
}
