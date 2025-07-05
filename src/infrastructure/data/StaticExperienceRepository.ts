import { Experience } from '@/domain/entities/Experience';

export const experiences: Experience[] = [
  {
    title: 'Software Development Engineer I',
    company: 'Reliance Jio Platforms Ltd',
    dates: 'Sept 2024 – Present',
    highlights: [
      'Led the migration of the MPower app to Ask Smarty: 40+ features, 100K+ downloads, 80% fewer post-launch bugs.',
      'Developed the Place of Business GST Registration Portal: processed 5,000+ GSTINs with full automation, saving compliance penalties.',
      'Built the Supplier Registration Portal onboarding thousands of vendors with dynamic forms and secure multi-stage approvals.'
    ],
    impact: '100K+ Users · 5,000+ GSTINs Registered',
  },
  {
    title: 'Software Developer',
    company: 'Reliance Jio Platforms Ltd',
    dates: 'June 2022 – Aug 2024',
    highlights: [
      'Supported the MPower migration by managing cross-team architecture for performance and scalability.',
      'Enhanced vendor onboarding modules with automated bank & government checks, reducing manual work by 60%.'
    ],
    impact: 'Improved onboarding speed · Automation driven',
  },
  {
    title: 'Graduate Engineering Trainee',
    company: 'Reliance Jio Platforms Ltd',
    dates: 'Dec 2020 – May 2022',
    highlights: [
      'Engineered the FruitEcomm Android app from scratch, boosting user traffic by 30%.',
      'Maintained supply chain and logistics apps, improving performance and ensuring reliable operations.'
    ],
    impact: '30% traffic growth',
  },
];
