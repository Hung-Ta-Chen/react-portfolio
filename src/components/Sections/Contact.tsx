import {EnvelopeIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Contact: FC = memo(() => {
  const {headerText, description, email} = contact;
  return (
    <Section sectionId={SectionId.Contact} title="Contact">
      <h3 className="text-2xl font-bold tracking-tight text-zinc-900">{headerText}</h3>
      <p className="mt-3 max-w-xl text-zinc-600">{description}</p>
      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
        <a
          className="inline-flex items-center gap-x-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
          href={`mailto:${email}`}>
          <EnvelopeIcon className="h-4 w-4" />
          {email}
        </a>
        <div className="flex items-center gap-x-1">
          <Socials />
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
