import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onExploreTreatments: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreTreatments }) => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F7F6F1]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column (Editorial Headline & Content) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Unboxed uppercase kicker */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[1px] bg-[#BC8972]" aria-hidden="true" />
              <span className="text-[11px] sm:text-[12px] font-sans-body uppercase tracking-[0.24em] text-[#193B35]/85 font-medium">
                Thoughtful Dental Care
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.12] text-[#193B35] font-normal tracking-[-0.015em] mb-6 [text-wrap:balance]">
              A better smile starts with feeling at ease.
            </h1>

            {/* Short narrative description */}
            <p className="text-base sm:text-lg text-[#242B28]/80 leading-relaxed max-w-xl mb-10 font-sans-body font-normal">
              Modern dentistry, honest guidance and a more considered approach to caring for your smile.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                type="button"
                onClick={onBookClick}
                className="px-7 py-3.5 bg-[#193B35] text-[#F7F6F1] text-sm font-medium tracking-wide hover:bg-[#122B27] active:scale-[0.99] transition-all duration-200 border border-[#193B35] shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193B35]"
              >
                Book Your Visit
              </button>

              <button
                type="button"
                onClick={onExploreTreatments}
                className="group px-6 py-3.5 bg-transparent text-[#193B35] text-sm font-medium tracking-wide hover:bg-[#E5ECE6]/60 transition-all duration-200 border border-[#193B35]/25 inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193B35]"
              >
                <span>Explore Treatments</span>
                <ArrowUpRight className="w-4 h-4 text-[#193B35]/60 group-hover:text-[#193B35] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Trust & Value Points (Unboxed text with delicate typographic bullets) */}
            <div className="pt-8 border-t border-[#193B35]/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-[13px] text-[#242B28]/85 font-medium">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BC8972]" aria-hidden="true" />
                <span>Care without pressure</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BC8972]" aria-hidden="true" />
                <span>Clear treatment guidance</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BC8972]" aria-hidden="true" />
                <span>A welcoming experience</span>
              </div>
            </div>
          </div>

          {/* Right Column (Balanced Asymmetric Editorial Photography) */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Main Photograph */}
              <div className="relative overflow-hidden border border-[#193B35]/15 bg-[#E5ECE6]/50 shadow-[0_16px_40px_rgba(25,59,53,0.06)]">
                <img
                  src="/src/assets/images/hero_dentist_studio_1794310882276.jpg"
                  alt="Friendly dentist smiling in the modern, naturally lit Morrow Dental Studio suite"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-center transform hover:scale-[1.015] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                {/* Subtle editorial framing overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#F7F6F1]/95 backdrop-blur-sm p-3.5 border border-[#193B35]/10 flex items-center justify-between text-xs text-[#242B28]/80">
                  <span className="font-serif-display text-sm text-[#193B35]">Suite 01 · Clinical Lounge</span>
                  <span className="text-[11px] font-sans-body uppercase tracking-wider text-[#BC8972] font-medium">Dr. Elena Morrow, DDS</span>
                </div>
              </div>

              {/* Secondary Asymmetric Detail Photo */}
              <div className="hidden sm:block absolute -bottom-10 -left-10 w-44 md:w-52 border border-[#193B35]/15 bg-[#F7F6F1] p-2 shadow-[0_12px_32px_rgba(25,59,53,0.08)] transform hover:-translate-y-1 transition-transform duration-300">
                <div className="overflow-hidden aspect-square bg-[#E5ECE6]/40 mb-2">
                  <img
                    src="/src/assets/images/hero_studio_detail_1794310882176.jpg"
                    alt="Warm fluted white oak and travertine interior details at Morrow Dental Studio reception"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="px-1 py-0.5">
                  <p className="text-[10px] uppercase tracking-wider font-sans-body text-[#193B35]/70 font-medium">
                    Natural materials & calm spaces
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
