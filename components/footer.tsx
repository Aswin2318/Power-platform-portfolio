import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return <footer className="site-footer"><div className="shell footer-inner"><Logo /><p>Built with clarity. Focused on useful outcomes.</p><Link href="#top">Back to top ↑</Link></div></footer>;
}
