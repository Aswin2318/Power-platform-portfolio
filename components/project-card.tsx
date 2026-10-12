import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ArrowIcon } from "./icons";
import { ProjectPreview } from "./project-preview";

export function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card"><div className="project-art"><span className="project-index">{project.number} / {project.eyebrow}</span><ProjectPreview project={project} compact /></div><div className="project-copy"><p className="project-eyebrow">{project.eyebrow}</p><h3>{project.shortTitle}</h3><p className="project-problem">{project.summary}</p><p className="project-solution">{project.cardSolution}</p><ul className="tag-list" aria-label={`Technologies used in ${project.shortTitle}`}>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul><Link className="case-study-link" href={`/projects/${project.slug}`}>View case study <ArrowIcon /></Link></div></article>;
}
