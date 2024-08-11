import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import KaggleIcon from '../components/Icon/KaggleIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import YouTubeIcon from '../components/Icon/YouTubeIcon';
import portfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import portfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import portfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import portfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import portfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import portfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import portfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import portfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import portfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import portfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import profilepic from '../images/profilepic.jpg';
import heroImage from '../images/tech_bg.webp';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Hung-Ta Chen's Website",
  description: "Hung-Ta Chen's Portfolio Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Hung-Ta Chen.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Davis, CA based <strong className="text-stone-100">Software Engineer</strong>, currently exploring
        opportunities to contribute in areas of software development and machine learning.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Hungta-Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hello! I'm Hung-Ta Chen, a recent graduate with a Master's in Statistics from UC Davis, specializing in Data Science. `+
              `With a strong foundation in electrical and computer engineering from Taiwan, I am passionate about leveraging data to build innovative software and machine learning solutions. `+
              `When I'm not programming, I enjoy martial arts and exploring culinary arts. I'm keen to engage in projects that challenge me and expand my horizons.`,
  aboutItems: [
    {label: 'Location', text: 'Davis, CA', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Taiwan', Icon: FlagIcon},
    {label: 'Interests', text: 'Coding, Wrestling, BJJ, Cooking', Icon: SparklesIcon},
    {label: 'Study', text: 'UC Davis', Icon: AcademicCapIcon},
    {label: 'Employment', text: '', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'JavaScript',
        level: 7,
      },
      {
        name: 'TypeScript',
        level: 7,
      },
      {
        name: 'Java',
        level: 7,
      },
      {
        name: 'C#',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend Technologies',
    skills: [
      {
        name: 'Flask',
        level: 7,
      },
      {
        name: 'Django',
        level: 7,
      },
      {
        name: 'FastAPI',
        level: 5,
      },
      {
        name: 'NestJS',
        level: 7,
      },
      {
        name: 'Spring Boot',
        level: 3,
      },
    ],
  },
  {
    name: 'Database Management',
    skills: [
      {
        name: 'PostgreSQL',
        level: 7,
      },
      {
        name: 'MySQL',
        level: 6,
      },
      {
        name: 'MongoDB',
        level: 6,
      },
      {
        name: 'Redis',
        level: 5,
      },
    ],
  },
  {
    name: 'Frontend Technologies',
    skills: [
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Redux',
        level: 4,
      },
      {
        name: 'HTML',
        level: 7,
      },
      {
        name: 'CSS',
        level: 5,
      },
    ],
  },
  {
    name: 'Machine Learning Frameworks',
    skills: [
      {
        name: 'PyTorch',
        level: 7,
      },
      {
        name: 'Scikit-learn',
        level: 6,
      },
      {
        name: 'TensorFlow',
        level: 6,
      },
    ],
  },
  {
    name: 'AI & Data Science Tools',
    skills: [
      {
        name: 'OpenAI API',
        level: 7,
      },
      {
        name: 'LlamaIndex',
        level: 6,
      },
      {
        name: 'LangChain',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Accessify',
    description: 'Interactive mapping application to improve accessibility information with React, Flask, and PostgreSQL.',
    url: 'https://github.com/Hung-Ta-Chen/Accessify', 
    image: portfolioImage1,
  },
  {
    title: 'UFC Playground',
    description: 'UFC stats and predictions platform, built with React.js and Django, deployed on AWS.',
    url: 'https://github.com/Hung-Ta-Chen/UFC-Playground',
    image: portfolioImage2,
  },
  {
    title: 'English Vocabulary Learning App',
    description: 'Mobile app for learning English vocabulary using React Native with spaced repetition.',
    url: 'https://github.com/Hung-Ta-Chen/English-Vocabulary-Learning-App',
    image: portfolioImage3,
  },
  {
    title: 'AI-Powered Coding Problem Classifier',
    description: 'BERT-based model to classify coding problems, achieving a high F1 score.',
    url: 'https://github.com/Hung-Ta-Chen/AI-Powered-Coding-Problem-Classifier',
    image: portfolioImage4,
  },
  {
    title: 'Food Waste Reduction App',
    description: 'Django-based app to reduce food waste, utilizing Clarifai AI and RESTful APIs.',
    url: 'https://github.com/Hung-Ta-Chen/Food-Waste-Reduction-App',
    image: portfolioImage5,
  },
  {
    title: 'Real-Time UAV Object Detection',
    description: 'System using YOLOv5 for real-time object detection on UAVs.',
    url: 'https://github.com/Hung-Ta-Chen/Real-Time-UAV-Object-Detection',
    image: portfolioImage6,
  },
  {
    title: 'Machine Translation System Using PyTorch',
    description: 'English-Russian translation model using Transformer architecture in PyTorch.',
    url: 'https://github.com/Hung-Ta-Chen/Machine-Translation-System-Using-PyTorch',
    image: portfolioImage7,
  },
  {
    title: 'Lane Following Robot',
    description: 'Lane following robot using PyTorch for autonomous navigation.',
    url: 'https://github.com/Hung-Ta-Chen/Lane-Following-Robot',
    image: portfolioImage8,
  },
  {
    title: 'Action Game Project',
    description: 'Classic action game developed using SDL2 in C.',
    url: 'https://github.com/Hung-Ta-Chen/Action-Game-Project',
    image: portfolioImage9,
  },
  {
    title: 'Job Application Counter',
    description: 'Web app to track job applications and provide analytics using React and Node.js.',
    url: 'https://github.com/Hung-Ta-Chen/Job-Application-Counter',
    image: portfolioImage10,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sep. 2022 – Jun. 2024',
    location: 'University of California – Davis, Davis, CA',
    title: 'Master of Science in Statistics – Data Science Track',
    content: (
      <p>
        At UC Davis, I focused on the Data Science track within the Statistics program, 
        developing expertise in machine learning, statistical methods, and data analysis. 
        Projects and coursework involved advanced statistical models, machine learning algorithms, 
        and hands-on data science applications, preparing me for complex problem-solving in tech industries.
      </p>
    ),
  },
  {
    date: 'Sep. 2019 – Jan. 2022',
    location: 'National Chiao Tung University, Hsinchu, Taiwan',
    title: 'Bachelor of Science in Electrical & Computer Engineering',
    content: (
      <p>
        During my undergraduate studies, I immersed myself in the fundamentals of computer engineering 
        with a strong emphasis on software development and Deep Learning. I engaged in various projects 
        that applied programming skills and object-oriented concepts to build software and hardware solutions, 
        furthering my passion for technology and innovation.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2024 - Aug 2024',
    location: 'Ra Labs, United States',
    title: 'Software Engineer Intern',
    content: (
      <p>
        During my internship at Ra Labs, I assumed the role of principal architect for an advanced multi-agent system powered by MetaGPT and the OpenAI API, aimed at revolutionizing AI-driven analytics. I successfully integrated a retrieval-augmented generation (RAG) system using LlamaIndex, specifically tailored to empower a code generator agent with the capability to efficiently index and retrieve relevant code snippets. This significantly improved the accuracy and relevance of the generated code. Additionally, my work involved refining user interfaces with React and TypeScript, as well as developing on the Flask server.
      </p>
    ),
  },
  {
    date: 'Jul 2023 - Sep 2023',
    location: 'LiTai Technology, Taipei, Taiwan',
    title: 'Software Engineer Intern',
    content: (
      <p>
        At LiTai Technology, I engineered solutions that bridged hardware with software for sophisticated payment systems, focusing on enhancing security and processing speeds. My efforts were pivotal in developing software that streamlined and secured transaction processing, utilizing C# and .NET frameworks.
      </p>
    ),
  },
  {
    date: 'Sep 2020 - Jan 2021',
    location: 'National Chiao Tung University, Hsinchu, Taiwan',
    title: 'Undergraduate Research Assistant',
    content: (
      <p>
        During my experience as a undergrad research assistant, I contributed to significant advancements in virtual garment technology using deep learning techniques. My role involved developing models that greatly improved the accuracy of garment overlays in virtual environments. This project required sophisticated image processing and machine learning techniques, enhancing the outcomes and practical applications of AI in fashion technology.
      </p>
    ),
  },
];


/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: '',
      text: '',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: '',
      text: '',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me using the links below or directly send a message!",
  items: [
    {
      type: ContactType.Email,
      text: 'hungtachen0121@gmail.com',
      href: 'mailto:hungtachen0121@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Davis CA, US',
      href: 'https://www.google.com/maps/place/Davis,+CA/@38.5567881,-121.8173447,12z',
    },
    {
      type: ContactType.Github,
      text: 'Hung-Ta-Chen',
      href: 'https://github.com/Hung-Ta-Chen',
    },
    {
      type: ContactType.Instagram,
      text: '@daniel__rolling',
      href: 'https://www.instagram.com/daniel__rolling/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Hung-Ta-Chen'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/hungta-chen/'},
  {label: 'YouTube', Icon: YouTubeIcon, href: 'https://www.youtube.com/@Hung-TaChen'},
  {label: 'Kaggle', Icon: KaggleIcon, href: 'https://www.kaggle.com/hungtachen'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/daniel__rolling/'},
];
