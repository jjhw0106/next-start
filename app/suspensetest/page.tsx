import { Suspense } from "react";
import { Pend } from "./suspense-test";
import Loading from "./loading";

export default async function test() {
  return <Suspense fallback={<Loading></Loading>}>
    <Pend></Pend>
  </Suspense>
}