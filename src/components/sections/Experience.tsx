import React from 'react';
import Section from '../Section';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import Badge from '../ui/Badge';
import { Briefcase } from '../icons';
import { WorkExperienceItem } from '../../types';

interface ExperienceProps {
  data: WorkExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ data }) => (
  <Section id="experience" title="Work Experience" icon={<Briefcase />}>
    <div className="space-y-12">
      {data.map((job, index) => (
        <Card key={index} className="animate-fade-in-up">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-1 gap-2 sm:gap-0">
              <CardTitle>
                {job.role} @ {job.company}
              </CardTitle>
              <span className="text-sm text-gray-500 whitespace-nowrap sm:pl-4">
                {job.period}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
              {job.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {job.techStack.map((tech, i) => (
                <Badge key={i} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </Section>
);

export default Experience;
