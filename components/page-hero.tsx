import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, description, children }: { eyebrow: string; title: ReactNode; description: string; children?: ReactNode }) {
  return <section className="page-hero"><div className="shell"><p className="eyebrow"><i /> {eyebrow}</p><h1>{title}</h1><p className="page-lede">{description}</p>{children}</div></section>;
}
