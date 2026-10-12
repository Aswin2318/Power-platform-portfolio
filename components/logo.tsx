import Image from "next/image";
import Link from "next/link";
import styles from "./logo.module.css";

export function Logo() {
  return <Link className="brand" href="/" aria-label="Aswin M. home"><span className={styles.avatar} aria-hidden="true"><Image src="/images/aswin-profile-portrait.jpg" alt="" fill sizes="35px" loading="eager" /></span> ASWIN<span className="brand-dot">.</span></Link>;
}
