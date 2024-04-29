import { Suspense } from "react";

export async function Pend() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <h1>testsuccess</h1>;
}