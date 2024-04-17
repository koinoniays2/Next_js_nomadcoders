"use client"
import sytles from "../style/navigation.module.css" // 스타일 import
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    // 스타일 import 후 className 지정(class명 충돌 방지)
    <nav className={sytles.nav}> 
      <ul>
        <li>
          <Link href="/">Home</Link>{path === "/" ? "🎈" : ""}
        </li>
        <li>
          <Link href="/about-us">About</Link>{path === "/about-us" ? "🎈" : ""}
        </li>
      </ul>
    </nav>
  )
}