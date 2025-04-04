export interface WorkExperienceItem {
  company: string;
  role: string;
  period: string;
  tasks: string[];
  techStack: string[];
}

export interface EducationData {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
}

export interface HeroData {
  name: string;
  title: string;
  intro: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
  };
}

export interface OpenSourceItem {
  name: string;
  description: string;
}

export interface PersonalProjectItem {
  name: string;
  period: string;
  description: string;
  techStack?: string[]; // Optional tech stack
}

export interface PortfolioData {
  name: string;
  title: string;
  intro: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
  };
  workExperience: WorkExperienceItem[];
  education: EducationData;
  skills: string[];
  openSource: OpenSourceItem[];
  personalProjects: PersonalProjectItem[];
}
