"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowIcon } from "./icons";
import { Logo } from "./logo";

const links = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Expertise" },
  { href: "/projects", label: "Projects" },
  { href: "/#approach", label: "Approach" }
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <header className="site-header"><div className="shell nav-inner"><Logo /><button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button><nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">{links.map((link) => <Link className={pathname === link.href ? "active" : ""} href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}</nav><Link className="header-cta" href="/contact">Let&apos;s connect <ArrowIcon /></Link></div></header>;
}
