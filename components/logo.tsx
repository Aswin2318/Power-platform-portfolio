import Link from "next/link";

export function Logo() {
  return <Link className="brand" href="/" aria-label="Aswin M. home"><span>{"</>"}</span> ASWIN<span className="brand-dot">.</span></Link>;
}
