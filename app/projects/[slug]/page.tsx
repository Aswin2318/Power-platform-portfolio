import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/icons";
import { ProjectPreview } from "@/components/project-preview";
import { projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectCaseStudy({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((entry) => entry.slug === slug);
  const project = projects[projectIndex];
  if (!project) notFound();
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return <><section className="case-hero"><div className="shell"><Link className="back-link" href="/projects">← Back to all projects</Link><p className="eyebrow"><i /> {project.eyebrow}</p><h1>{project.title}</h1><p>{project.summary}</p><ul className="tag-list case-tags" aria-label="Technology stack">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul><p className="demo-note">Illustrative portfolio concept · Original dashboard mockup · Synthetic demonstration data</p></div></section><section className="case-preview"><div className="shell"><ProjectPreview project={project} /></div></section><section className="section shell case-layout"><div className="case-intro"><p className="section-kicker">PROJECT OVERVIEW / {project.number}</p><h2>A deliberate path from <em>challenge to clarity.</em></h2></div><div className="case-copy"><section><h3>Business challenge</h3><p>{project.problem}</p></section><section><h3>Solution</h3><p>{project.solution}</p></section></div></section><section className="case-section"><div className="shell"><div className="case-two-column"><section><p className="section-kicker">MY CONTRIBUTION</p><h2>The thinking behind <em>the solution.</em></h2><ul className="check-list">{project.contribution.map((item) => <li key={item}>{item}</li>)}</ul><p className="section-kicker case-features-label">KEY FEATURES</p><ul className="check-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></section><section className="architecture-card"><p>ILLUSTRATIVE ARCHITECTURE</p><ol>{project.architecture.map((layer, index) => <li key={layer}><span>0{index + 1}</span>{layer}</li>)}</ol><small>Adapt governance, security and integration details to the actual environment.</small></section></div></div></section><section className="section shell detail-grid"><section><p className="section-kicker">DATA MODEL</p><h2>Structure that supports <em>reliable insight.</em></h2><p>{project.dataModel}</p></section><section><p className="section-kicker">IMPLEMENTATION</p><h2>Technical <em>considerations.</em></h2><ul className="check-list">{project.implementation.map((item) => <li key={item}>{item}</li>)}</ul></section><section><p className="section-kicker">TESTING & VALIDATION</p><h2>Details that <em>deserve attention.</em></h2><ul className="check-list">{project.testing.map((item) => <li key={item}>{item}</li>)}</ul></section></section><section className="outcome-section"><div className="shell"><p className="section-kicker">OUTCOMES & LESSONS</p><h2>Clear about the <em>scope and evidence.</em></h2><p>{project.outcome}</p><div className="case-navigation"><Link className="button button-light" href="/projects">Back to gallery</Link><Link className="next-project" href={`/projects/${nextProject.slug}`}><span>Next project</span><b>{nextProject.shortTitle}</b><ArrowIcon /></Link></div></div></section></>;
}
