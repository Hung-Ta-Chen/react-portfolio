import {FC, memo} from 'react';

const Footer: FC = memo(() => (
  <footer className="border-t border-zinc-200 py-8 text-sm text-zinc-500">
    © {new Date().getFullYear()} Hung-Ta Chen
  </footer>
));

Footer.displayName = 'Footer';
export default Footer;
