import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProjectFilters } from "@/components/project-filters";
export const metadata: Metadata = { title: "Project case studies", description: "Sanitized Power Apps, Power Automate and Power BI case studies by Aswin M." };
export default function ProjectsPage() { return <><PageHero eyebrow="SELECTED WORK" title={<>Projects designed around <em>useful outcomes.</em></>} description="Eight case studies of Power Platform and analytics work. Recreated previews use synthetic data; source screenshots appear in document order, with personal or internal record details omitted from public copies." /><section className="section shell project-gallery"><ProjectFilters /></section></>; }
