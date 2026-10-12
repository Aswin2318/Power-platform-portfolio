import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  title: { default: "Aswin M. | Power Platform & BI Developer", template: "%s | Aswin M." },
  description: "Personal portfolio of a Power Platform and Business Intelligence developer working with Power Apps, Power BI, Power Automate, Dataverse, DAX and SQL.",
  applicationName: "Aswin M. Portfolio",
  keywords: ["Power Platform", "Power Apps", "Power BI", "Power Automate", "Dataverse", "DAX", "PostgreSQL", "SQL"],
  robots: { index: true, follow: true },
  openGraph: { type: "website", title: "Aswin M. | Power Platform & BI Developer", description: "Portfolio of illustrative Power Platform and business intelligence projects.", siteName: "Aswin M. Portfolio" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><Navigation /><main id="main-content">{children}</main><Footer /></body></html>;
}
