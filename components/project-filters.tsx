"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "./project-card";

const filters = ["All", "Power Apps", "Power Automate", "Power BI"] as const;

export function ProjectFilters() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visibleProjects = active === "All" ? projects : projects.filter((project) => project.categories.includes(active));
  return <><div className="filter-bar" aria-label="Filter project case studies">{filters.map((filter) => <button type="button" className={active === filter ? "selected" : ""} aria-pressed={active === filter} key={filter} onClick={() => setActive(filter)}>{filter}</button>)}</div><div className="project-grid">{visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></>;
}
