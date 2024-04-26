"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount((count+1));
  }
  console.log(path);
  return <nav><ul>
    <li><Link href='/'>home</Link>{path === "/" ? "👌": ""}</li>
    <li><Link href='/about-us'>About Us</Link>{path === "/about-us" ? "👌": ""}</li>
    <li>{count}</li>
    <button onClick={plus}>plus</button>
  </ul></nav>
}