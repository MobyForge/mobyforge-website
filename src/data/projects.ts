// 📝 EDIT THIS FILE TO ADD/UPDATE PROJECTS
// Just add a new object to the array after completing a project.

export type Project = {
  id: string;
  title: string;
  client: string;
  category: "Web Development" | "Cloud Infrastructure" | "Automation";
  description: string;
  tags: string[];
  year: string;
  link?: string; // optional live URL
};

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform Revamp",
    client: "Retail Client",
    category: "Web Development",
    description:
      "Built a high-performance storefront with custom checkout flow, boosting conversions by 38%.",
    tags: ["React", "Node.js", "Stripe"],
    year: "2025",
  },
  {
    id: "2",
    title: "AWS Multi-Region Deployment",
    client: "SaaS Startup",
    category: "Cloud Infrastructure",
    description:
      "Architected a scalable AWS setup with auto-scaling, CI/CD pipelines, and 99.99% uptime SLA.",
    tags: ["AWS", "Terraform", "Docker"],
    year: "2025",
  },
  {
    id: "3",
    title: "WhatsApp Order Bot",
    client: "Local Restaurant Chain",
    category: "Automation",
    description:
      "Automated order intake and customer support over WhatsApp, handling 500+ orders/day.",
    tags: ["WhatsApp API", "Node.js", "Webhooks"],
    year: "2025",
  },
];
