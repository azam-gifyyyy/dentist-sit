import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#193B35] text-[#F7F6F1] border-t border-[#F7F6F1]/10 pt-16 pb-12 font-sans-body">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#F7F6F1]/10">
          {/* Brand & Statement */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <span className="block font-serif-display text-2xl text-[#F7F6F1] tracking-wide">
                  MORROW
                </span>
                <span className="block text-[11px] uppercase tracking-[0.25em] text-[#BC8972] font-medium mt-0.5">
                  DENTAL STUDIO
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#F7F6F1]/75 leading-relaxed max-w-sm mb-6">
                A modern boutique dental practice dedicated to thoughtful restorative care, unhurried consultations, and quiet clinical excellence.
              </p>
            </div>
            <div className="text-[11px] text-[#F7F6F1]/50 space-y-1">
              <p>Independent Practice · Dr. Elena Morrow, DDS</p>
              <p>All imagery and clinical procedures showcased for demonstration purposes.</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#BC8972] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F7F6F1]/80">
              <li>
                <a href="#home" className="hover:text-[#F7F6F1] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-[#F7F6F1] transition-colors">
                  Treatments
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-[#F7F6F1] transition-colors">
                  Our Studio
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-[#F7F6F1] transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#appointment" className="hover:text-[#F7F6F1] transition-colors">
                  Book an Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#BC8972] mb-4">
              Studio Location
            </h4>
            <div className="space-y-2 text-xs text-[#F7F6F1]/80 leading-relaxed">
              <p>428 Montgomery Boulevard, Suite 300</p>
              <p>Downtown Medical District</p>
              <p className="pt-2">
                <span className="block text-[#F7F6F1]/50">Phone:</span>
                <a href="tel:5552348901" className="hover:text-[#BC8972] transition-colors">
                  (555) 234-8901
                </a>
              </p>
              <p>
                <span className="block text-[#F7F6F1]/50">Inquiries:</span>
                <a href="mailto:care@morrowdentalstudio.com" className="hover:text-[#BC8972] transition-colors">
                  care@morrowdentalstudio.com
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#BC8972] mb-4">
              Studio Hours
            </h4>
            <div className="space-y-1.5 text-xs text-[#F7F6F1]/80 leading-normal">
              <div className="flex justify-between py-0.5">
                <span>Mon – Thu</span>
                <span className="text-[#F7F6F1]">8:00 – 17:00</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span>Friday</span>
                <span className="text-[#F7F6F1]">8:00 – 14:00</span>
              </div>
              <div className="flex justify-between py-0.5 text-[#F7F6F1]/50">
                <span>Sat – Sun</span>
                <span>Closed</span>
              </div>
              <p className="pt-2 text-[10px] text-[#BC8972]">
                Emergency coverage available on-call for patients of record.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F7F6F1]/50 gap-4">
          <p>© {currentYear} Morrow Dental Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#F7F6F1]/80 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span>·</span>
            <span className="hover:text-[#F7F6F1]/80 transition-colors cursor-pointer">
              Patient Rights & Notice
            </span>
            <span>·</span>
            <span className="hover:text-[#F7F6F1]/80 transition-colors cursor-pointer">
              Accessibility
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
