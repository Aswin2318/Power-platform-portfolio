import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProjectFilters } from "@/components/project-filters";
export const metadata: Metadata = { title: "Project case studies", description: "Illustrative Power Apps, Power Automate and Power BI case studies by Aswin M." };
export default function ProjectsPage() { return <><PageHero eyebrow="SELECTED WORK" title={<>Projects designed around <em>useful outcomes.</em></>} description="A collection of illustrative, sanitized portfolio concepts. Dashboard visuals and data are original mockups using synthetic sample values." /><section className="section shell project-gallery"><ProjectFilters /></section></>; }
