import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import {
  ContactData,
  EducationItem,
  ExperienceItem,
  HeroData,
  HomepageMeta,
  ProjectItem,
  Social,
  SkillGroup,
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
  role: 'Software Engineer at Amazon',
  summary:
    "I'm a software engineer in Amazon Stores, on the Seller Fees team within Selling Partner Services. " +
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
    title: 'Software Engineer, Stores – Selling Partner Services (Seller Fees)',
    date: '2024 – Present',
    location: 'Seattle, WA',
    // TODO: replace with 2–3 impact bullets (scope, scale, measurable results) you can share publicly.
    bullets: [
      "Build and operate backend services in the Seller Fees organization, which supports how fees are calculated and applied for Amazon's selling partners.",
    ],
  },
  {
    company: 'Ra Labs',
    title: 'Software Engineer Intern',
    date: 'May 2024 – Aug 2024',
    location: 'Remote, United States',
    bullets: [
      'Architected a multi-agent analytics system on MetaGPT and the OpenAI API.',
      'Built a retrieval-augmented generation (RAG) layer with LlamaIndex so a code-generation agent could index and retrieve relevant code, improving the accuracy of generated code.',
      'Developed React/TypeScript UI improvements and Flask server features.',
    ],
    tags: ['Python', 'Flask', 'React', 'TypeScript', 'LlamaIndex'],
  },
  {
    company: 'LiTai Technology',
    title: 'Software Engineer Intern',
    date: 'Jul 2023 – Sep 2023',
    location: 'Taipei, Taiwan',
    bullets: [
      'Developed C#/.NET software that connects hardware with payment systems, focused on transaction security and processing speed.',
    ],
    tags: ['C#', '.NET'],
  },
];

export const education: EducationItem[] = [
  {
    school: 'University of California, Davis',
    degree: 'M.S. Statistics, Data Science Track',
    date: '2022 – 2024',
    location: 'Davis, CA',
  },
  {
    school: 'National Chiao Tung University',
    degree: 'B.S. Electrical & Computer Engineering',
    date: '2019 – 2022',
    location: 'Hsinchu, Taiwan',
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
  {name: 'Languages', skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C#']},
  {name: 'Backend', skills: ['Django', 'Flask', 'FastAPI', 'NestJS']},
  {name: 'Data & Cloud', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'AWS']},
  {name: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS']},
  {
    name: 'ML & AI',
    skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'OpenAI API', 'LlamaIndex', 'LangChain'],
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
