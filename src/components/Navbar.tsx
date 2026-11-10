import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Our Studio', href: '#studio' },
    { label: 'Our Approach', href: '#approach' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F6F1]/95 backdrop-blur-md py-4 border-b border-[#193B35]/10 shadow-[0_4px_24px_rgba(25,59,53,0.04)]'
          : 'bg-[#F7F6F1] py-5 border-b border-[#193B35]/8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between gap-8">
        {/* Brand Zone: Clean wordmark in DM Serif Display */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="group text-left leading-none tracking-tight shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193B35]"
        >
          <span className="block font-serif-display text-lg sm:text-xl text-[#193B35] font-normal tracking-wide">
            MORROW
          </span>
          <span className="block font-sans-body text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#242B28]/70 group-hover:text-[#193B35] transition-colors mt-0.5">
            DENTAL STUDIO
          </span>
        </a>

        {/* Center Zone: 4 clean single-line navigation links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8 text-[13px] tracking-wide text-[#242B28]/80 font-medium"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#193B35] transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#193B35] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Zone: Primary CTA Action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            type="button"
            onClick={onBookClick}
            className="px-5 py-2.5 bg-[#193B35] text-[#F7F6F1] text-[13px] font-medium tracking-wide rounded-none hover:bg-[#122B27] active:scale-[0.99] transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193B35] focus-visible:ring-offset-2 border border-[#193B35]"
          >
            Book an Appointment
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          className="md:hidden p-2 text-[#193B35] hover:text-[#122B27] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193B35] rounded-sm"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F6F1] border-b border-[#193B35]/12 px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#242B28]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="py-1 text-[#242B28] hover:text-[#193B35] border-b border-[#193B35]/8 pb-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 bg-[#193B35] text-[#F7F6F1] text-sm font-medium tracking-wide hover:bg-[#122B27] transition-colors"
              >
                Book an Appointment
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
