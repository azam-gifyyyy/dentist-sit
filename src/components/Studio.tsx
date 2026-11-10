import React from 'react';
import { VolumeX, SunMedium, Compass, Wind } from 'lucide-react';

export const Studio: React.FC = () => {
  const architecturalFeatures = [
    {
      icon: <VolumeX className="w-4 h-4 text-[#BC8972]" />,
      title: 'Acoustic Buffering',
      description: 'Private treatment suites insulated with sound-dampening architectural elements to maintain a serene, confidential atmosphere.',
    },
    {
      icon: <SunMedium className="w-4 h-4 text-[#BC8972]" />,
      title: 'Courtyard Daylight',
      description: 'Expansive windows open into a tranquil bamboo stone courtyard, allowing natural light to soften the clinical space.',
    },
    {
      icon: <Wind className="w-4 h-4 text-[#BC8972]" />,
      title: 'Medical-Grade Air Filtration',
      description: 'Continuous surgical-grade HEPA air exchange cycles whisper-quietly throughout all treatment suites.',
    },
    {
      icon: <Compass className="w-4 h-4 text-[#BC8972]" />,
      title: 'Ergonomic Treatment Suites',
      description: 'Ultra-plush contoured memory foam chairs provide spinal support and minimize body fatigue during longer visits.',
    },
  ];

  return (
    <section id="studio" className="py-24 md:py-32 bg-[#E5ECE6]/30 border-y border-[#193B35]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#BC8972]" aria-hidden="true" />
            <span className="text-[11px] sm:text-[12px] font-sans-body uppercase tracking-[0.22em] text-[#193B35]/80 font-medium">
              The Physical Environment
            </span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.2] text-[#193B35] font-normal [text-wrap:balance]">
            Designed around your comfort.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#242B28]/80 leading-relaxed font-sans-body">
            We reimagined what a dental practice looks and feels like from the ground up. Every surface, sound, and lighting temperature is selected to replace sterile anxiety with relaxed, mindful reassurance.
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Main Visual: Treatment Suite with Garden View */}
          <div className="lg:col-span-7">
            <div className="relative border border-[#193B35]/15 bg-[#F7F6F1] p-3 sm:p-4 shadow-[0_16px_40px_rgba(25,59,53,0.06)]">
              <div className="overflow-hidden aspect-[16/9] bg-[#193B35]/5">
                <img
                  src="/src/assets/images/studio_interior_suite_1794310884518.jpg"
                  alt="Modern treatment room at Morrow Dental Studio with floor-to-ceiling bamboo garden windows and clean equipment"
                  className="w-full h-full object-cover transform hover:scale-[1.015] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="pt-3 px-1 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#242B28]/70 gap-1">
                <span className="font-sans-body">Suite 02 · Courtyard Suite</span>
                <span className="font-serif-display italic text-[#193B35]">Equipped with whisper-quiet electric handpieces</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Nuances */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="space-y-6">
              {architecturalFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="border-b border-[#193B35]/10 pb-5 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    {feature.icon}
                    <h3 className="text-sm font-semibold text-[#193B35]">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#242B28]/75 leading-relaxed font-sans-body pl-6.5">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#193B35]/10 bg-[#F7F6F1] p-5 border border-[#193B35]/10">
              <p className="text-xs text-[#242B28]/80 leading-relaxed font-sans-body">
                <strong className="text-[#193B35] font-semibold">Considered Appointment Pacing:</strong> We reserve generous buffers between appointments. You will never encounter crowded waiting areas or feel that your dentist is rushing to another operatory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
