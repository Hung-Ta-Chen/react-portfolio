import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import {
  ContactData,
  EducationItem,
  ExperienceItem,
  HeroData,
  HomepageMeta,
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
  Skills: 'skills',
  Contact: 'contact',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

export const heroData: HeroData = {
  name: 'Hung-Ta Chen',
  role: 'Software Development Engineer at Amazon',
  summary:
    "I'm a software engineer in Amazon Stores, on the Seller Fees team within Selling Partner Services, where I build LLM-powered fee explanations and an AI fee agent for sellers. " +
    'I have an M.S. in Statistics from UC Davis and a background in electrical and computer engineering, ' +
    'so I like work where backend engineering meets data and machine learning. Based in Seattle.',
  actions: [
    {href: `#${SectionId.Contact}`, text: 'Get in touch', primary: true},
    // Unclickable until the new PDF is ready: remove `disabled` to turn it back on.
    {href: '/assets/Hungta-Resume.pdf', text: 'Download resume', disabled: true},
  ],
};

export const experience: ExperienceItem[] = [
  {
    company: 'Amazon',
    title: 'Software Development Engineer, Stores – Selling Partner Services (Seller Fees)',
    date: 'Dec 2024 – Present',
    location: 'Seattle, WA',
    bullets: [],
    groups: [
      {
        heading: 'LLM Fee Explainer',
        summary:
          'Turns a seller’s fee charge into a plain-language explanation across Manage Your Payments, Revenue Calculator and Seller Assistant. It serves ~625K explanations a day, with 38 fee types live across 29 marketplaces. I own it end to end:',
        bullets: [
          {
            label: 'Control plane',
            text: 'Designed a config-driven platform, with configuration in DynamoDB managed through an internal portal, so a new fee type onboards with configuration only instead of ~4 engineer-weeks of code. Replacing ~36 per-fee prompts with one cacheable template cut serving cost 55–58% per region (~$78K/yr) at ~81% cache hit.',
          },
          {
            label: 'Fee-change workflow',
            text: 'Built an AWS Step Functions workflow that detects fee changes, turns raw rate tables into explainable formulas with a symbolic engine, generates the explanation with an LLM, and runs an AI review agent before human approval and a multi-region rollout. 517 rate-card changes have gone live automatically (94% AI-approved), taking per-change engineering time from 0.5–3 hours to zero. The new O(K·N log N) algorithm replaced an O(N²) one, so a 1,260-row table that used to time out now finishes in ~9 minutes.',
          },
          {
            label: 'Models and reliability',
            text: 'Moved Nova Pro to Haiku 4.5 after an A/B test on 74 real prompts (100% vs 74% quality). Then moved to Claude Sonnet 5.5 with multi-model fallback and circuit breakers. Bedrock cost fell 80–83% (~$71–85K/yr), p90 latency fell 44–47% in every region, and no region has exceeded 0.1% daily faults since the fallback (it was up to 3.1% before).',
          },
          {
            label: 'India expansion',
            text: 'As the sole engineer, brought the Explainer to a marketplace whose fee structure differs from every other region. 10 fee types shipped, reaching 17,217 sellers in 30 days.',
          },
        ],
      },
      {
        heading: 'Fee Agent',
        summary: 'An AI assistant that answers sellers’ fee questions. I own its model and experiment stack:',
        bullets: [
          {
            text: 'Moved it to Claude Sonnet 5.5 in six days behind go/no-go gates, then A/B-tested a low-effort setting. LLM-call p90/p99 fell from 18.3s/29.0s to 10.2s/13.2s, Bedrock cost fell 48% a day (74% per request) while traffic roughly doubled, and truncated answers dropped from 6.0% to 3.6%.',
          },
          {
            text: 'Built an experiment platform with dynamic model selection from Amazon Bedrock, so new models become available to test automatically, with promote/restore controls and review-gated production changes.',
          },
        ],
      },
      {
        heading: 'Also',
        bullets: [
          {
            text: 'Built a daily pipeline-health report now used by 11 Fees teams, with all 64 of our team’s production pipelines meeting the ≤2-day time-to-prod goal (team average 0.1 day, down from 2.5 days in August).',
          },
          {
            text: 'Separately, led a zero-downtime migration of a production fleet to a new AWS region, moving 136M+ DynamoDB items and ~6TB of S3 data and eliminating $9.5K/month in AWS cost.',
          },
        ],
      },
    ],
    tags: ['Java', 'TypeScript', 'Python', 'AWS', 'Amazon Bedrock', 'LLMs'],
  },
  {
    company: 'Cielara AI',
    title: 'Software Engineer',
    date: 'Oct 2024 – Nov 2024',
    location: 'Remote (San Francisco, CA)',
    bullets: [
      'Built backend services in Go to scan AWS and GCP cloud resources and model configuration data into domain schemas for downstream security and analytics use cases.',
      'Improved scan throughput by ~40% with goroutine-based parallelization and batch fetching, cutting end-to-end latency in large multi-account environments.',
    ],
    tags: ['Go', 'AWS', 'GCP'],
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

export const skills: SkillGroup[] = [
  {
    name: 'AI & LLM',
    skills: ['Amazon Bedrock', 'LangGraph', 'LangChain', 'LlamaIndex', 'MCP', 'PyTorch', 'scikit-learn'],
  },
  {name: 'Cloud', skills: ['AWS', 'Lambda', 'ECS', 'Step Functions', 'S3', 'Aurora', 'CDK', 'Docker']},
  {name: 'Data', skills: ['DynamoDB', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Spark', 'SQL']},
  {name: 'Backend', skills: ['Java', 'Spring Boot', 'Python', 'Flask', 'Django', 'Go', 'Scala', 'Node.js']},
  {name: 'Frontend', skills: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS']},
];

export const contact: ContactData = {
  headerText: "Let's talk",
  description: 'Open to interesting problems and good conversations. Send a message here or email me directly.',
  email: 'hungtachen0121@gmail.com',
};

export const socialLinks: Social[] = [
  {label: 'GitHub', Icon: GithubIcon, href: 'https://github.com/Hung-Ta-Chen'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/hungta-chen/'},
];
