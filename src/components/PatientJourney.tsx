import React from 'react';

export const PatientJourney: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Get in Touch',
      tagline: 'Tell us what you need.',
      description: 'Reach out online or by phone. Let us know whether you are visiting for a routine examination, a specific dental question, or a cosmetic inquiry.',
      detail: 'Quick digital intake with zero redundant paperwork.',
    },
    {
      number: '02',
      title: 'Meet Your Dentist',
      tagline: 'Discuss your concerns and options.',
      description: 'Relax in our consultation lounge for an unhurried conversation. We examine your teeth, review high-resolution digital imaging together, and listen to what matters to you.',
      detail: 'Comprehensive 1-on-1 clinician review.',
    },
    {
      number: '03',
      title: 'Plan Your Care',
      tagline: 'Understand the next steps.',
      description: 'We present clear, transparent recommendations with clear pricing and scheduling options. You are always in control of what you choose to proceed with.',
      detail: 'Clear treatment outlines with zero hidden surprises.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#E5ECE6]/30 border-y border-[#193B35]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#BC8972]" aria-hidden="true" />
            <span className="text-[11px] sm:text-[12px] font-sans-body uppercase tracking-[0.22em] text-[#193B35]/80 font-medium">
              The Experience
            </span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.2] text-[#193B35] font-normal [text-wrap:balance]">
            From your first visit, made simple.
          </h2>
        </div>

        {/* 3 Step Minimal Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative flex flex-col justify-between border-t border-[#193B35]/15 pt-8 group"
            >
              <div>
                {/* Numbered Typography */}
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-serif-display text-4xl sm:text-5xl text-[#BC8972] font-normal">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-sans-body uppercase tracking-widest text-[#193B35]/40 font-semibold">
                    Step {idx + 1}
                  </span>
                </div>

                {/* Step Title & Tagline */}
                <h3 className="font-serif-display text-2xl text-[#193B35] mb-1">
                  {step.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#BC8972] font-medium mb-4">
                  {step.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-[#242B28]/80 font-sans-body leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Subdued foot note */}
              <div className="pt-4 border-t border-[#193B35]/8 text-xs text-[#242B28]/60 font-sans-body">
                {step.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
