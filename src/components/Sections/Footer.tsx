import {FC, memo} from 'react';

const Footer: FC = memo(() => (
  <footer className="border-t border-ink/10 py-8 text-sm text-ink-soft">© {new Date().getFullYear()} Hung-Ta Chen</footer>
));

Footer.displayName = 'Footer';
export default Footer;
