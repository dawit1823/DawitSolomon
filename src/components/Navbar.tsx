import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

interface NavbarProps {
  onNavigateContact: () => void;
}

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Skills', href: '#skills' },
  { label: 'Automation', href: '#automation' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onNavigateContact }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAFAFA]/92 backdrop-blur-md border-b border-[#E4E4E7]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-[#09090B] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-sm"
        >
          {PORTFOLIO_PROFILE.name}
        </a>

        {/* Zone 2: 4 concise single-line text navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#52525B]"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#09090B] hover:underline underline-offset-4 decoration-[#2563EB] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-sm py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#09090B] hover:bg-[#F4F4F5] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#E4E4E7] bg-[#FFFFFF] px-6 py-4 space-y-2">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-base font-medium text-[#18181B] hover:text-[#2563EB] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onNavigateContact();
              }}
              className="w-full py-3 px-4 text-sm font-medium text-white bg-[#09090B] hover:bg-[#2563EB] rounded-lg transition-colors cursor-pointer"
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
