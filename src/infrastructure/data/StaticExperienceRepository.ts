import { Experience } from '@/domain/entities/Experience';

export const experiences: Experience[] = [
  {
    title: 'Software Development Engineer I',
    company: 'Reliance Jio Platforms Ltd',
    dates: 'Sept 2024 – Present',
    highlights: [
      'Involved in the full migration of Supply Chain projects, delivering 40+ new features with 100K+ downloads and an 80% drop in post-launch bugs.',
      'Architected and built the GST Registration Onboarding Portal, automating 5,000+ GSTINs and reducing compliance risk by removing manual data errors.',
      'Developed the web portal for onboarding thousands of vendors with dynamic forms, secure multi-stage approvals, and audit trails.',
      'Involved in Research and Development of migration from SAP TIBCO to open source using microservice and Kafka architecture.'
    ],
    impact: '100K+ users · 40+ features · 5,000+ GSTINs automated · 50% faster releases',
  },
  {
    title: 'Software Developer',
    company: 'Reliance Jio Platforms Ltd',
    dates: 'June 2022 – Aug 2024',
    highlights: [
      'Collaborated with cross-functional teams to scale core modules for high availability, supporting 10k+ daily active users.',
      'Enhanced vendor onboarding by automating bank and compliance checks, reducing manual tasks by 60% and boosting approval speed.',
      'Led integration of REST APIs and external payment gateways, improving transaction success rates by 25%.',
      'Improved CI/CD pipelines for multiple microservices, reducing integration bugs and accelerating testing cycles.'
    ],
    impact: '80K+ DAUs · 60% effort saved · 25% higher transaction success',
  },
  {
    title: 'Graduate Engineering Trainee',
    company: 'Reliance Jio Platforms Ltd',
    dates: 'Dec 2020 – May 2022',
    highlights: [
      'Developed and launched the inventory management Android app from scratch, driving a 30% increase in traffic within the first 6 months.',
      'Maintained supply chain and logistics apps, optimizing query performance and ensuring 95% system uptime.',
      'Built reusable Flutter widgets and modules, accelerating UI development by 40% across internal mobile apps.',
    ],
    impact: '30% user growth · 99.9% uptime · 40% faster dev cycles',
  },
];
