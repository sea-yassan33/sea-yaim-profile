// project一覧
export interface ProjectRow {
  id: number;
  title: string;
  program_language: string[];
  deploy_url?: string;
  github?: string;
  qiita?: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
};

// profile
export interface ProfileItem{
  profile: string;
  languages: string[];
  infrastructures: string[];
  frameworkes:string[];
};