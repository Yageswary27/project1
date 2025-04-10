export type ProjectStatus = "Active" | "Archived";

export interface Project {
  name: string;
  url: string;
  type: string;
  scanTypes: string[];
  lastScan: string;
  score: number;
  status: ProjectStatus;
  favicon?: string;
}
