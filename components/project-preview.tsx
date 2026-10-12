import Image from "next/image";
import type { Project } from "@/lib/projects";
import styles from "./project-preview.module.css";

export function ProjectPreview({ project, compact = false }: { project: Pick<Project, "theme" | "shortTitle" | "categories" | "screenshots">; compact?: boolean }) {
  if (project.screenshots?.length) {
    const screenshots = compact ? project.screenshots.slice(0, 1) : project.screenshots;
    return <div className={compact ? styles.compactGallery : styles.screenshotGallery}>
      {screenshots.map(({ src, alt, width, height, caption }, index) =>
        <figure className={`${styles.screenshot} ${compact ? styles.compact : ""}`} key={src}>
          <Image src={src} alt={alt} width={width} height={height} unoptimized loading={compact ? "lazy" : "eager"} sizes={compact ? "(max-width: 760px) 90vw, 34vw" : `(max-width: 900px) 92vw, ${Math.min(width, 850)}px`} />
          {!compact && <figcaption><span>{String(index + 1).padStart(2, "0")} / {caption}</span></figcaption>}
        </figure>
      )}
    </div>;
  }
  const isCanvasApp = project.categories.includes("Power Apps");
  const values = project.theme === "violet" ? [["Open items", "128"], ["Completed", "92%"], ["Attention", "14"]] : project.theme === "aqua" ? [["Sessions", "8.6k"], ["Active users", "68"], ["Trend", "+12%"]] : [["Total activity", "2.4k"], ["Engagement", "84%"], ["Trend", "+18%"]];
  const previewLabel = isCanvasApp ? "Recreated Canvas App interface" : "Illustrative dashboard mockup";
  return <div className={`dashboard-preview ${project.theme} ${compact ? "is-compact" : ""}`} role="img" aria-label={`${previewLabel} for ${project.shortTitle}; all displayed data is synthetic.`}>
    <div className="dashboard-bar"><span className="window-lights"><i /><i /><i /></span><span>{isCanvasApp ? "APP / OVERVIEW" : "INSIGHT / OVERVIEW"}</span><small>DEMO DATA</small></div>
    <div className="dashboard-body"><aside className="dashboard-rail" aria-hidden="true"><b>a<span>.</span></b><i>▦</i><i>◫</i><i>⌘</i><i>◉</i></aside><div className="dashboard-content"><div className="dashboard-heading"><div><small>WORKSPACE</small><b>{project.shortTitle}</b></div><span>AM</span></div><div className="dashboard-metrics">{values.map(([label, value]) => <div key={label}><small>{label}</small><b>{value}</b><i /></div>)}</div><div className="dashboard-bottom"><div className="chart"><div><b>Activity trend</b><small>Sample period</small></div><svg viewBox="0 0 320 110" preserveAspectRatio="none" aria-hidden="true"><path d="M0 85 C25 78 35 43 58 53 S95 78 120 42 S165 51 190 28 S230 54 255 25 S294 30 320 8 L320 110 L0 110Z" fill="currentColor" opacity=".12"/><path d="M0 85 C25 78 35 43 58 53 S95 78 120 42 S165 51 190 28 S230 54 255 25 S294 30 320 8" fill="none" stroke="currentColor" strokeWidth="3"/></svg><div className="chart-days"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div></div><div className="donut-box"><small>Status split</small><div className="donut"><b>76%<small>sample</small></b></div><small className="legend">● Complete · In progress</small></div></div></div></div>
  </div>;
}
