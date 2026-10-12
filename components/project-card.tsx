import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ArrowIcon } from "./icons";
import { ProjectPreview } from "./project-preview";

export function ProjectCard({ project }: { project: Project }) {
  const artworkColor = project.theme === "violet" ? "#17112e" : project.theme === "aqua" ? "#0c262a" : "#0d1a2c";
  return <article className="project-card"><div className="project-art" style={{ background: artworkColor }}><span className="project-index">{project.number} / {project.eyebrow}</span><ProjectPreview project={project} compact /></div><div className="project-copy"><p className="project-eyebrow">{project.eyebrow}</p><h3>{project.shortTitle}</h3><p className="project-problem">{project.summary}</p><p className="project-solution">{project.cardSolution}</p><ul className="tag-list" aria-label={`Technologies used in ${project.shortTitle}`}>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul><Link className="case-study-link" href={`/projects/${project.slug}`}>View case study <ArrowIcon /></Link></div></article>;
}
