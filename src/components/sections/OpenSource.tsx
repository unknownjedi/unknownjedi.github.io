import React from 'react';
import Section from '../Section';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { GitMerge } from '../icons';
import { OpenSourceItem } from '../../types';

interface OpenSourceProps {
  data: OpenSourceItem[];
}

const OpenSource: React.FC<OpenSourceProps> = ({ data }) => (
  <Section
    id="opensource"
    title="Open Source Contributions"
    icon={<GitMerge />}
  >
    <div className="grid md:grid-cols-2 gap-8">
      {data.map((contribution, index) => (
        <Card key={index} className="animate-fade-in-up">
          <CardHeader>
            <CardTitle>{contribution.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">{contribution.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </Section>
);

export default OpenSource;
