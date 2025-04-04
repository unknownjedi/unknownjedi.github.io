import { PortfolioData } from '../types';

const portfolioData: PortfolioData = {
  name: 'Jayanth S P',
  title: 'Software Developer',
  intro: 'Adept software engineer, committed to excellence in every project.',
  contact: {
    email: 'jayanth27398@gmail.com',
    phone: '+919445838799',
    location: 'Bangalore, India',
    github: 'unknownjedi',
    linkedin: 'jayanth-sp',
  },
  workExperience: [
    {
      company: 'Microsoft',
      role: 'Software Engineer',
      period: '11/2021 - Present',
      tasks: [
        'Designed schemas, developed plugins, conducted testing, and implemented telemetry tracking to enhance Bulk Management functionality within the Customer Service application, resulting in a cost savings of $40 million.',
        'Created the Viva Goals activity feed page, improving team engagement by 80% and enhancing goal alignment.',
        'Migrated critical AngularJS components to React, increasing frontend performance and maintainability.',
        'Developed bulk OKR import feature.',
        'Developed automated digest messaging with integrated email and MS Teams notifications.',
        'Developed a Python script for JSON-to-YAML conversion, streamlining backend localization.',
      ],
      techStack: [
        'React',
        'TypeScript',
        'AngularJS',
        'RubyOnRails',
        'Python',
        'dotnet',
      ],
    },
    {
      company: 'Ally.io',
      role: 'Software Engineer',
      period: '01/2021 - 11/2021',
      tasks: [
        'Developed and deployed a MERN application to monitor and report on developer productivity based on GitHub activity.',
        'Integrated localization support via the i18n library.',
        'Enhanced user experience by implementing a guided app tour feature.',
      ],
      techStack: ['React', 'AngularJS', 'NodeJS', 'RubyOnRails'],
    },
  ],
  education: {
    degree: 'MSc Information Technology',
    institution: 'CEG, Anna University',
    period: '08/2016 - 07/2021',
    cgpa: '8.46',
  },
  skills: [
    'React',
    'NodeJS',
    'Python',
    'Flutter',
    'TypeScript',
    'Ruby on Rails',
    'Docker',
    'dotnet',
    'MongoDB',
    'Postgresql',
    'Redux',
    'Java',
    'Azure',
    'AWS',
  ],
  openSource: [
    {
      name: 'Octonode',
      description:
        'A node lib to access Github V3 API. Fixed an issue in the API that lists pull request reviewers.',
    },
    {
      name: 'Zed',
      description:
        'An open-source code editor. Added support for Azure OpenAI API for the assistant feature.',
    },
  ],
  personalProjects: [
    {
      name: 'DesignXR',
      period: '03/2024 - 07/2024',
      description:
        'React application for managing projects and orders from the DesignXR Windows app. Deployed on Vercel, AWS Lambda, and Cloudflare.',
      techStack: ['React', 'AWS Lambda', 'Vercel', 'Cloudflare'],
    },
    {
      name: 'Local Network Player (Flutter)',
      period: '05/2020 - 10/2020',
      description:
        'Video player app to list/play local device videos and share them across the local network via a localhost URL.',
      techStack: ['Flutter'],
    },
    {
      name: 'CGPA Calculator (React)',
      period: '05/2020 - 05/2020',
      description:
        'React application for students to calculate CGPA and save/load data via JSON.',
      techStack: ['React'],
    },
    {
      name: 'MCS app (Android - Java)',
      period: '05/2018 - 08/2018',
      description:
        'Android app for MCS club with forum, announcements, and profiles.',
      techStack: ['Android', 'Java'],
    },
    {
      name: 'Mathrix website / App',
      period: '03/2020 - 03/2020',
      description:
        'React website for symposium event showcasing and registration, plus a Flutter app for organizers.',
      techStack: ['React', 'Flutter'],
    },
  ],
};

export default portfolioData;
