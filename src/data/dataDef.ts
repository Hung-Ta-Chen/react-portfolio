import {FC, ForwardRefExoticComponent, SVGProps} from 'react';

import {IconProps} from '../components/Icon/Icon';

export interface HomepageMeta {
  title: string;
  description: string;
}

export interface HeroData {
  name: string;
  role: string;
  summary: string;
  actions: {href: string; text: string; primary?: boolean; disabled?: boolean}[];
}

export interface BulletPoint {
  label?: string;
  text: string;
}

export interface BulletGroup {
  heading: string;
  link?: {text: string; href: string};
  summary?: string;
  bullets: BulletPoint[];
}

export interface ExperienceItem {
  company: string;
  url?: string;
  note?: string;
  title: string;
  date: string;
  location: string;
  bullets: string[];
  groups?: BulletGroup[];
  tags?: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  date: string;
  location: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  url: string;
  tags: string[];
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface ContactData {
  headerText: string;
  description: string;
  email: string;
}

export interface Social {
  label: string;
  Icon: FC<IconProps> | ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
  href: string;
}
