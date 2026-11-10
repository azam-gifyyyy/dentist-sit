import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section id="approach" className="py-24 md:py-32 bg-[#E5ECE6]/40 border-y border-[#193B35]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#BC8972]" aria-hidden="true" />
            <span className="text-[11px] sm:text-[12px] font-sans-body uppercase tracking-[0.22em] text-[#193B35]/80 font-medium">
              A Different Kind of Dental Experience
            </span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.2] text-[#193B35] font-normal [text-wrap:balance]">
            Good care should feel personal.
          </h2>
        </div>

        {/* Editorial Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Atmospheric Consultation Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative border border-[#193B35]/15 bg-[#F7F6F1] p-3 sm:p-4 shadow-[0_12px_36px_rgba(25,59,53,0.05)]">
              <div className="overflow-hidden bg-[#193B35]/5 aspect-[4/3]">
                <img
                  src="/src/assets/images/philosophy_consultation_1794310884525.jpg"
                  alt="Unhurried conversation between dentist and patient in the serene consultation lounge"
                  className="w-full h-full object-cover transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="pt-3 px-1 flex items-center justify-between text-xs text-[#242B28]/70">
                <span className="font-sans-body">Quiet Consultation Lounge</span>
                <span className="font-serif-display italic text-[#193B35]">No rush, no pressure</span>
              </div>
            </div>
          </div>

          {/* Right: Thoughtful Philosophy Narrative */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            <p className="text-lg sm:text-xl text-[#193B35] font-serif-display leading-relaxed mb-6">
              "We built Morrow Dental Studio around a simple premise: visiting the dentist shouldn't evoke apprehension or confusion."
            </p>

            <div className="space-y-6 text-[#242B28]/80 text-[15px] sm:text-base leading-relaxed font-sans-body mb-8">
              <p>
                From the moment you step through our doors, your experience is paced with intention. We schedule extended appointments so our team is never hurried between rooms, giving you dedicated time to discuss how you feel and what you want for your oral health.
              </p>
              <p>
                We believe in conservative, preventive dentistry. We do not upsell procedures you don't need or push cosmetic treatments without understanding your natural smile harmony. Every recommendation is grounded in clear clinical rationale, visual clarity, and respect for your choices.
              </p>
            </div>

            {/* Three Thoughtful Pillars with Hairline Dividers */}
            <div className="border-t border-[#193B35]/12 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <span className="block font-serif-display text-xl text-[#BC8972] mb-1">01</span>
                <h4 className="text-sm font-semibold text-[#193B35] mb-1">Listened To First</h4>
                <p className="text-xs text-[#242B28]/75 leading-normal">
                  Your dental history, comfort levels, and preferences guide every conversation.
                </p>
              </div>

              <div>
                <span className="block font-serif-display text-xl text-[#BC8972] mb-1">02</span>
                <h4 className="text-sm font-semibold text-[#193B35] mb-1">Total Transparency</h4>
                <p className="text-xs text-[#242B28]/75 leading-normal">
                  High-definition photography and honest diagnostics with no surprises.
                </p>
              </div>

              <div>
                <span className="block font-serif-display text-xl text-[#BC8972] mb-1">03</span>
                <h4 className="text-sm font-semibold text-[#193B35] mb-1">Restful Spaces</h4>
                <p className="text-xs text-[#242B28]/75 leading-normal">
                  Natural oak, courtyard greenery, and acoustic privacy that ease your mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
