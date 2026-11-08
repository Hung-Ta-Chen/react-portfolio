import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import {
  ContactData,
  EducationItem,
  ExperienceItem,
  HeroData,
  HomepageMeta,
  ProjectItem,
  SkillGroup,
  Social,
} from './dataDef';

export const SITE_URL = 'https://hungtachen.com';

export const homePageMeta: HomepageMeta = {
  title: 'Hung-Ta Chen | Software Engineer',
  description: 'Hung-Ta Chen is a software engineer at Amazon in Seattle, working on Seller Fees in Selling Partner Services.',
};

export const SectionId = {
  Hero: 'hero',
  Experience: 'experience',
  Projects: 'projects',
  Skills: 'skills',
  Contact: 'contact',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

export const heroData: HeroData = {
  name: 'Hung-Ta Chen',
  role: 'Software Development Engineer at Amazon',
  summary:
    "I'm a software engineer in Amazon Stores, on the Seller Fees team within Selling Partner Services, where I build LLM-powered fee explanations for sellers. " +
    'I have an M.S. in Statistics from UC Davis and a background in electrical and computer engineering, ' +
    'so I like work where backend engineering meets data and machine learning. Based in Seattle.',
  actions: [
    {href: '/assets/Hungta-Resume.pdf', text: 'Download resume', primary: true},
    {href: `#${SectionId.Contact}`, text: 'Get in touch'},
  ],
};

export const experience: ExperienceItem[] = [
  {
    company: 'Amazon',
    title: 'Software Development Engineer, Stores – Selling Partner Services (Seller Fees)',
    date: 'Dec 2024 – Present',
    location: 'Seattle, WA',
    bullets: [
      'Own the LLM Fee Explainer, which turns a seller’s fee charge into a plain-language explanation across Manage Your Payments, Revenue Calculator and Seller Assistant, serving over 600K explanations a day.',
      'Designed a config-driven platform that cut onboarding a new fee type from about four engineer-weeks to configuration only; 38 fee types now run on it across 29 marketplaces.',
      'Automated the fee-change workflow end to end: a symbolic engine that simplifies rate tables into explainable formulas, and an AI review agent that approves the changes passing quality checks, so routine rate-card changes go live with no engineering time.',
      'Upgraded the model stack on Amazon Bedrock using A/B tests on real production data, and added multi-model fallback with circuit breakers, cutting p90 latency by about 45% and inference cost by over 80%.',
      'Sole engineer on the India launch (10 fee types), then handed day-to-day operation to the Fee Ops team; also own the model and experiment stack behind the Talos fee agent.',
      'Built a daily pipeline-health report now used by 11 Fees teams, and migrated a production fleet to a new AWS region with zero downtime and no data loss.',
    ],
    tags: ['Java', 'TypeScript', 'Python', 'AWS', 'Amazon Bedrock', 'LLMs'],
  },
  {
    company: 'Cielara AI',
    title: 'Software Engineer',
    date: 'Oct 2024 – Nov 2024',
    location: 'Remote (San Francisco, CA)',
    bullets: ['Worked on Infrastructure Intelligence, an infrastructure analysis product.'],
    tags: ['Go', 'AWS'],
  },
  {
    company: 'Legion AI',
    title: 'Software Engineer Intern',
    date: 'May 2024 – Aug 2024',
    location: 'Remote (New York, NY)',
    bullets: [
      'Built a Flask-based AI agent service using the OpenAI API and MetaGPT, integrated into a NestJS chatbot backend with Redis caching for low-latency, context-aware analytics conversations.',
      'Built a RAG pipeline with LlamaIndex over a Pgvector database so the code-generation agent could fetch relevant examples on demand, improving reliability.',
    ],
    tags: ['Flask', 'NestJS', 'Redis', 'LlamaIndex', 'Docker'],
  },
];

export const education: EducationItem[] = [
  {
    school: 'University of California, Davis',
    degree: 'M.S. Statistics, Data Science Track',
    date: 'Sep 2022 – Jun 2024',
    location: 'Davis, CA',
  },
  {
    school: 'National Chiao Tung University',
    degree: 'B.S. Electrical & Computer Engineering',
    date: 'Sep 2019 – Jan 2022',
    location: 'Hsinchu, Taiwan',
  },
  {
    school: 'National Taiwan University',
    degree: 'B.S. Biochemical Science & Technology',
    date: 'Sep 2017 – Jun 2019',
    location: 'Taipei, Taiwan',
  },
];

export const projects: ProjectItem[] = [
  {
    title: 'Accessify',
    description: 'Interactive map that crowdsources accessibility information for places.',
    url: 'https://github.com/Hung-Ta-Chen/Accessify',
    tags: ['React', 'Flask', 'PostgreSQL'],
  },
  {
    title: 'UFC Playground',
    description: 'UFC stats and fight-prediction platform, deployed on AWS.',
    url: 'https://github.com/Hung-Ta-Chen/UFC-Playground-Backend',
    tags: ['React', 'Django', 'AWS'],
  },
  {
    title: 'Kitchen Companion',
    description: 'Food-management API that helps reduce food waste, using Clarifai image recognition.',
    url: 'https://github.com/Hung-Ta-Chen/KitchenCompanion-API',
    tags: ['Django', 'REST', 'Clarifai'],
  },
  {
    title: 'Real-Time UAV Object Detection',
    description: 'Real-time object detection pipeline for drone footage built on YOLOv5.',
    url: 'https://github.com/Hung-Ta-Chen/UAV-object-detection-with-YOLO',
    tags: ['PyTorch', 'YOLOv5', 'Computer Vision'],
  },
  {
    title: 'Coding Problem Classifier',
    description: 'BERT-based model that classifies coding problems by topic.',
    url: 'https://github.com/Hung-Ta-Chen/AI-Powered-Coding-Problem-Classifier',
    tags: ['PyTorch', 'BERT', 'NLP'],
  },
  {
    title: 'Russian–English Translation',
    description: 'Encoder-decoder Transformer with multi-head attention, implemented in PyTorch.',
    url: 'https://www.kaggle.com/code/hungtachen/russian-to-english-with-encoder-decoder-mha',
    tags: ['PyTorch', 'Transformers', 'NLP'],
  },
];

export const skills: SkillGroup[] = [
  {name: 'Languages', skills: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL']},
  {name: 'Backend', skills: ['Django', 'Flask', 'FastAPI', 'NestJS']},
  {name: 'Data & Cloud', skills: ['AWS (Lambda, ECS, Step Functions, DynamoDB, CDK)', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis']},
  {name: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS']},
  {
    name: 'ML & AI',
    skills: ['Amazon Bedrock', 'LangGraph', 'LlamaIndex', 'LangChain', 'MCP', 'PyTorch', 'scikit-learn'],
  },
];

export const contact: ContactData = {
  headerText: "Let's talk",
  description: 'Open to interesting problems and good conversations. Email is the best way to reach me.',
  email: 'hungtachen0121@gmail.com',
};

export const socialLinks: Social[] = [
  {label: 'GitHub', Icon: GithubIcon, href: 'https://github.com/Hung-Ta-Chen'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/hungta-chen/'},
];
