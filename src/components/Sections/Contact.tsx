import {EnvelopeIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';
import ContactForm from './ContactForm';

const Contact: FC = memo(() => {
  const {headerText, description, email} = contact;
  return (
    <Section sectionId={SectionId.Contact}>
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">{headerText}</h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">{description}</p>
          <a
            className="mt-7 inline-flex items-center gap-x-2 rounded-md font-medium text-ink underline decoration-gold decoration-2 underline-offset-[6px] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            href={`mailto:${email}`}>
            <EnvelopeIcon className="h-5 w-5" />
            {email}
          </a>
          <div className="-ml-2 mt-4 flex items-center gap-x-1">
            <Socials />
          </div>
        </div>
        <ContactForm email={email} />
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
