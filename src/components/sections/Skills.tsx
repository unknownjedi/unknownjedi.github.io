import React from 'react';
import Section from '../Section';
import { Card, CardContent } from '../ui/Card';
import Badge from '../ui/Badge';
import { Code } from '../icons';

interface SkillsProps {
  data: string[];
}

const Skills: React.FC<SkillsProps> = ({ data }) => (
  <Section id="skills" title="Skills" icon={<Code />}>
    <Card className="animate-fade-in-up">
      <CardContent className="flex flex-wrap gap-3">
        {data.map((skill, index) => (
          <Badge key={index} className="text-base px-4 py-1">
            {skill}
          </Badge>
        ))}
      </CardContent>
    </Card>
  </Section>
);

export default Skills;
