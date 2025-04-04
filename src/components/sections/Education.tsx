import React from 'react';
import Section from '../Section';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/Card';
import { GraduationCap } from '../icons';
import {EducationData} from "../../types";

interface EducationProps {
  data: EducationData;
}

const Education: React.FC<EducationProps> = ({ data }) => (
  <Section id="education" title="Education" icon={<GraduationCap />}>
    <Card className="animate-fade-in-up">
      <CardHeader>
        <CardTitle>{data.degree}</CardTitle>
        <CardDescription>{data.institution}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">Period: {data.period}</p>
        <p className="text-gray-300">CGPA: {data.cgpa}</p>
      </CardContent>
    </Card>
  </Section>
);

export default Education;
