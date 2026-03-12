import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socials = [
    { icon: <Github size={20} strokeWidth={1.5} />, href: 'https://github.com/albinmmathew' },
    { icon: <Linkedin size={20} strokeWidth={1.5} />, href: 'https://www.linkedin.com/in/albinmmathew/' },
    { icon: <Mail size={20} strokeWidth={1.5} />, href: 'mailto:albinmathew@gmail.com' },
  ];

  return (
    <footer className="py-12 border-t border-zinc-800/80 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center">
          <div className="flex gap-8 mb-8">
            {socials.map((social, i) => (
              <a 
                key={i} 
                href={social.href}
                className="text-zinc-500 hover:text-zinc-300 transition-colors hover:-translate-y-1 transform duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="text-zinc-600 text-sm font-mono text-center flex flex-col gap-2">
            <p>Designed & Built by Albin Mathew</p>
            <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

