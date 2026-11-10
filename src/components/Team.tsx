import React from 'react';
import { Quote } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F7F6F1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#BC8972]" aria-hidden="true" />
            <span className="text-[11px] sm:text-[12px] font-sans-body uppercase tracking-[0.22em] text-[#193B35]/80 font-medium">
              Clinical Leadership
            </span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.2] text-[#193B35] font-normal [text-wrap:balance]">
            Meet the people behind your care.
          </h2>
        </div>

        {/* Editorial Magazine Profile */}
        <div className="bg-[#E5ECE6]/30 border border-[#193B35]/12 p-8 sm:p-12 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Portrait Photography */}
            <div className="lg:col-span-5">
              <div className="relative border border-[#193B35]/15 bg-[#F7F6F1] p-3 shadow-[0_12px_32px_rgba(25,59,53,0.06)]">
                <div className="overflow-hidden aspect-[3/4] bg-[#193B35]/5">
                  <img
                    src="/src/assets/images/dentist_portrait_lead_1794310884363.jpg"
                    alt="Editorial portrait of Dr. Elena Morrow in the studio library"
                    className="w-full h-full object-cover object-top transform hover:scale-[1.015] transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="pt-3 px-1 flex items-center justify-between text-xs text-[#242B28]/70">
                  <span className="font-serif-display text-[#193B35]">Lead Clinician</span>
                  <span className="text-[11px] font-sans-body">Morrow Dental Studio</span>
                </div>
              </div>
            </div>

            {/* Profile Narrative & Philosophy */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-[0.2em] font-sans-body text-[#BC8972] font-semibold block mb-2">
                  Founder & Principal Dentist
                </span>
                <h3 className="font-serif-display text-3xl sm:text-4xl text-[#193B35] font-normal mb-2">
                  Dr. Elena Morrow
                </h3>
                <p className="text-xs sm:text-sm text-[#242B28]/70 font-sans-body">
                  Doctor of Dental Surgery (DDS) · General & Cosmetic Dentistry
                </p>
              </div>

              {/* Editorial Quote Callout */}
              <div className="relative pl-6 py-2 my-4 border-l-2 border-[#BC8972]">
                <Quote className="w-5 h-5 text-[#BC8972]/60 mb-2" />
                <p className="font-serif-display text-lg sm:text-xl text-[#193B35] leading-relaxed italic">
                  "My goal is not simply to treat teeth, but to understand the person smiling back at me. When someone feels heard and unhurried, apprehension gives way to confidence."
                </p>
              </div>

              {/* Bio Narrative */}
              <div className="space-y-4 text-sm sm:text-[15px] text-[#242B28]/80 leading-relaxed font-sans-body mt-4">
                <p>
                  With over a decade of clinical experience, Dr. Morrow focuses on biomimetic dental restorations and preventative care. She trained extensively in conservative tooth preservation techniques, which prioritize retaining natural tooth structure wherever possible.
                </p>
                <p>
                  Dr. Morrow established the studio to provide a calmer alternative to high-volume corporate dental chains. She personally oversees treatment planning and believes in demystifying dental procedures through open dialogue and digital diagnostics.
                </p>
              </div>

              {/* Clinical Care Pillars */}
              <div className="mt-8 pt-6 border-t border-[#193B35]/12 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#242B28]/80 font-sans-body">
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-[#193B35]/60 font-medium">Practice Focus</span>
                  <span className="font-medium text-[#193B35] mt-0.5 block">Biomimetic Care</span>
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-[#193B35]/60 font-medium">Experience</span>
                  <span className="font-medium text-[#193B35] mt-0.5 block">10+ Years Practice</span>
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-[#193B35]/60 font-medium">Approach</span>
                  <span className="font-medium text-[#193B35] mt-0.5 block">Zero Pressure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
