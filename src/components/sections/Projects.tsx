import React from 'react';
import Section from '../Section';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../ui/Card';
import Badge from '../ui/Badge';
import { Layers } from '../icons';
import { PersonalProjectItem } from '../../types';

interface ProjectsProps {
  data: PersonalProjectItem[];
}

const Projects: React.FC<ProjectsProps> = ({ data }) => (
  <Section id="projects" title="Personal Projects" icon={<Layers />}>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((project, index) => (
        <Card key={index} className="flex flex-col animate-fade-in-up">
          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
            <CardDescription>{project.period}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-gray-300 mb-4">{project.description}</p>
          </CardContent>
          {project.techStack && project.techStack.length > 0 && (
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <Badge key={i} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  </Section>
);

export default Projects;
