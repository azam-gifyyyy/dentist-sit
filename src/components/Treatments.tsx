import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Smile, 
  Sun, 
  Layers, 
  HeartHandshake, 
  ArrowRight 
} from 'lucide-react';
import { TreatmentModal, TreatmentItem } from './TreatmentModal';

interface TreatmentsProps {
  onSelectTreatmentForBooking: (treatmentTitle: string) => void;
}

export const Treatments: React.FC<TreatmentsProps> = ({ onSelectTreatmentForBooking }) => {
  const [activeModalTreatment, setActiveModalTreatment] = useState<TreatmentItem | null>(null);

  const treatmentsData: TreatmentItem[] = [
    {
      id: 'general',
      number: '01',
      title: 'General Dentistry',
      subtitle: 'Comprehensive examinations & preventive health',
      description: 'Routine checkups, gentle cleanings, low-radiation digital radiography, and preventive dental care designed to preserve your natural tooth structure for life.',
      details: [
        'Gentle ultrasonic hygiene cleanings tailored to sensitive teeth',
        'High-resolution digital photography so you can see what your doctor sees',
        'Oral cancer screenings and airway health evaluations',
        'Custom nightguards for clenching and jaw tension relief',
      ],
      duration: '45 – 60 minutes',
      idealFor: 'Annual checkups, preventive maintenance, and new patient baselines',
    },
    {
      id: 'cosmetic',
      number: '02',
      title: 'Cosmetic Dentistry',
      subtitle: 'Harmonious, natural aesthetic refinement',
      description: 'Thoughtful smile enhancement options focused on subtle symmetry, composite bonding, and hand-layered ceramic veneers that look authentically yours.',
      details: [
        'Minimal-prep porcelain veneers hand-crafted for lifelike translucency',
        'Composite aesthetic edge bonding for chips and spacing',
        'Enamel contouring and conservative smile balancing',
        'Digital smile simulation prior to any irreversible treatment',
      ],
      duration: '60 – 90 minutes per session',
      idealFor: 'Individuals looking to gently enhance tooth proportion, shape, or shade',
    },
    {
      id: 'aligners',
      number: '03',
      title: 'Clear Aligners',
      subtitle: 'Discreet, digital orthodontic alignment',
      description: 'Modern orthodontic treatment options utilizing custom clear aligner trays to gently guide teeth into balanced alignment with minimal lifestyle disruption.',
      details: [
        '3D intraoral digital scanning with zero messy impression trays',
        'Precise biomechanical staging for predictable bite correction',
        'Removable, discreet aligners designed for daily comfort',
        'Regular progress monitoring checkpoints in studio or remotely',
      ],
      duration: '30-minute progress visits (Treatment: 4 – 12 months)',
      idealFor: 'Mild to moderate crowding, spacing, and orthodontic relapse',
    },
    {
      id: 'whitening',
      number: '04',
      title: 'Teeth Whitening',
      subtitle: 'In-studio & custom take-home brightening',
      description: 'Professional cosmetic whitening services engineered to lift stubborn stains while safeguarding enamel integrity and minimizing post-treatment sensitivity.',
      details: [
        'Prescription-grade pH-balanced whitening formulations',
        'Protective gingival barrier application during in-studio sessions',
        'Custom-milled take-home trays with remineralizing desensitizer gel',
        'Guidance on shade maintenance and dietary stain prevention',
      ],
      duration: '60 minutes in-studio or 10-day at-home protocol',
      idealFor: 'Lifting coffee, tea, and natural aging discoloration safely',
    },
    {
      id: 'restorative',
      number: '05',
      title: 'Restorative Dentistry',
      subtitle: 'Biomimetic structural repair and dental function',
      description: 'Care focused on restoring dental function, replacing damaged fillings with tooth-colored composite ceramics, and placing crowns that integrate seamlessly.',
      details: [
        'Biomimetic composite restorations preserving maximum natural enamel',
        'All-ceramic inlays, onlays, and crowns color-matched to your bite',
        'Precision implant restorations for missing teeth',
        'Cracked tooth diagnosis and conservative structural reinforcement',
      ],
      duration: '60 – 90 minutes',
      idealFor: 'Treating decay, replacing old metal fillings, or restoring worn teeth',
    },
    {
      id: 'gum-care',
      number: '06',
      title: 'Gum Care',
      subtitle: 'Periodontal therapy & foundational support',
      description: 'Support for healthy gums and oral hygiene through gentle deep cleaning, pocket reduction therapy, and proactive periodontal wellness management.',
      details: [
        'Targeted microbial biofilm removal and deep pocket therapy',
        'Comfort-focused local anesthesia and soothing antimicrobial rinses',
        'Personalized at-home periodontal maintenance routines',
        'Monitoring tissue recession and long-term bone stability',
      ],
      duration: '45 – 60 minutes',
      idealFor: 'Bleeding gums, gingivitis, sensitivity, and periodontal maintenance',
    },
  ];

  return (
    <section id="treatments" className="py-24 md:py-32 bg-[#F7F6F1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-[#193B35]/10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#BC8972]" aria-hidden="true" />
              <span className="text-[11px] sm:text-[12px] font-sans-body uppercase tracking-[0.22em] text-[#193B35]/80 font-medium">
                Clinical Offerings
              </span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.2] text-[#193B35] font-normal [text-wrap:balance]">
              Care for every stage of your smile.
            </h2>
          </div>
          <p className="text-sm text-[#242B28]/70 max-w-sm font-sans-body leading-relaxed">
            Every procedure is planned around your unique biology, functional comfort, and aesthetic expectations.
          </p>
        </div>

        {/* Sophisticated Editorial Layout (Tier 1: Marquee Asymmetric Pair) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* 01. General Dentistry */}
          <div className="lg:col-span-7 bg-[#E5ECE6]/40 border border-[#193B35]/12 p-8 sm:p-10 flex flex-col justify-between hover:border-[#193B35]/30 transition-colors group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif-display text-2xl text-[#BC8972]">01</span>
                <div className="w-10 h-10 rounded-none bg-[#193B35]/5 border border-[#193B35]/10 flex items-center justify-center text-[#193B35]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-serif-display text-2xl sm:text-3xl text-[#193B35] mb-2">
                General Dentistry
              </h3>
              <p className="text-xs uppercase tracking-wider text-[#BC8972] font-medium mb-4">
                Routine checkups and preventive dental care
              </p>
              <p className="text-[#242B28]/80 text-sm sm:text-base leading-relaxed mb-6 font-sans-body">
                Routine checkups, gentle cleanings, low-radiation digital radiography, and preventive dental care designed to preserve your natural tooth structure for life.
              </p>
            </div>

            <div className="pt-6 border-t border-[#193B35]/10 flex items-center justify-between">
              <span className="text-xs text-[#242B28]/60 font-sans-body">
                Preventive Baseline · 45–60 min
              </span>
              <button
                type="button"
                onClick={() => setActiveModalTreatment(treatmentsData[0])}
                className="text-xs font-medium text-[#193B35] group-hover:text-[#122B27] inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#193B35]"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* 02. Cosmetic Dentistry */}
          <div className="lg:col-span-5 bg-[#F7F6F1] border border-[#193B35]/12 p-8 sm:p-10 flex flex-col justify-between hover:border-[#193B35]/30 transition-colors group shadow-[0_4px_20px_rgba(25,59,53,0.03)]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif-display text-2xl text-[#BC8972]">02</span>
                <div className="w-10 h-10 rounded-none bg-[#BC8972]/10 border border-[#BC8972]/20 flex items-center justify-center text-[#BC8972]">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-serif-display text-2xl sm:text-3xl text-[#193B35] mb-2">
                Cosmetic Dentistry
              </h3>
              <p className="text-xs uppercase tracking-wider text-[#BC8972] font-medium mb-4">
                Thoughtful smile enhancement options
              </p>
              <p className="text-[#242B28]/80 text-sm sm:text-base leading-relaxed mb-6 font-sans-body">
                Thoughtful smile enhancement options focused on subtle symmetry, composite bonding, and hand-layered ceramic veneers that look authentically yours.
              </p>
            </div>

            <div className="pt-6 border-t border-[#193B35]/10 flex items-center justify-between">
              <span className="text-xs text-[#242B28]/60 font-sans-body">
                Custom Aesthetics · Individualized Plan
              </span>
              <button
                type="button"
                onClick={() => setActiveModalTreatment(treatmentsData[1])}
                className="text-xs font-medium text-[#193B35] group-hover:text-[#122B27] inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#193B35]"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Tier 2: Refined 4-Grid for Categories 03, 04, 05, 06 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 03. Clear Aligners */}
          <div className="bg-[#F7F6F1] border border-[#193B35]/10 p-6 flex flex-col justify-between hover:border-[#193B35]/30 transition-colors group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif-display text-xl text-[#BC8972]">03</span>
                <Smile className="w-4 h-4 text-[#193B35]/60" />
              </div>
              <h3 className="font-serif-display text-xl text-[#193B35] mb-1.5">
                Clear Aligners
              </h3>
              <p className="text-[11px] uppercase tracking-wider text-[#BC8972] font-medium mb-3">
                Modern orthodontic treatment options
              </p>
              <p className="text-xs text-[#242B28]/75 leading-relaxed mb-6 font-sans-body">
                Modern orthodontic treatment options utilizing custom clear aligner trays to gently guide teeth into balanced alignment with minimal lifestyle disruption.
              </p>
            </div>

            <div className="pt-4 border-t border-[#193B35]/8 flex items-center justify-between">
              <span className="text-[11px] text-[#242B28]/55">Digital scan</span>
              <button
                type="button"
                onClick={() => setActiveModalTreatment(treatmentsData[2])}
                className="text-xs font-medium text-[#193B35] inline-flex items-center gap-1 hover:text-[#122B27]"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* 04. Teeth Whitening */}
          <div className="bg-[#F7F6F1] border border-[#193B35]/10 p-6 flex flex-col justify-between hover:border-[#193B35]/30 transition-colors group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif-display text-xl text-[#BC8972]">04</span>
                <Sun className="w-4 h-4 text-[#193B35]/60" />
              </div>
              <h3 className="font-serif-display text-xl text-[#193B35] mb-1.5">
                Teeth Whitening
              </h3>
              <p className="text-[11px] uppercase tracking-wider text-[#BC8972] font-medium mb-3">
                Professional cosmetic whitening services
              </p>
              <p className="text-xs text-[#242B28]/75 leading-relaxed mb-6 font-sans-body">
                Professional cosmetic whitening services engineered to lift stubborn stains while safeguarding enamel integrity and minimizing post-treatment sensitivity.
              </p>
            </div>

            <div className="pt-4 border-t border-[#193B35]/8 flex items-center justify-between">
              <span className="text-[11px] text-[#242B28]/55">In-studio & home</span>
              <button
                type="button"
                onClick={() => setActiveModalTreatment(treatmentsData[3])}
                className="text-xs font-medium text-[#193B35] inline-flex items-center gap-1 hover:text-[#122B27]"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* 05. Restorative Dentistry */}
          <div className="bg-[#F7F6F1] border border-[#193B35]/10 p-6 flex flex-col justify-between hover:border-[#193B35]/30 transition-colors group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif-display text-xl text-[#BC8972]">05</span>
                <Layers className="w-4 h-4 text-[#193B35]/60" />
              </div>
              <h3 className="font-serif-display text-xl text-[#193B35] mb-1.5">
                Restorative Dentistry
              </h3>
              <p className="text-[11px] uppercase tracking-wider text-[#BC8972] font-medium mb-3">
                Care focused on restoring dental function
              </p>
              <p className="text-xs text-[#242B28]/75 leading-relaxed mb-6 font-sans-body">
                Care focused on restoring dental function, replacing damaged fillings with tooth-colored composite ceramics, and placing crowns that integrate seamlessly.
              </p>
            </div>

            <div className="pt-4 border-t border-[#193B35]/8 flex items-center justify-between">
              <span className="text-[11px] text-[#242B28]/55">Enamel-preserving</span>
              <button
                type="button"
                onClick={() => setActiveModalTreatment(treatmentsData[4])}
                className="text-xs font-medium text-[#193B35] inline-flex items-center gap-1 hover:text-[#122B27]"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* 06. Gum Care */}
          <div className="bg-[#F7F6F1] border border-[#193B35]/10 p-6 flex flex-col justify-between hover:border-[#193B35]/30 transition-colors group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif-display text-xl text-[#BC8972]">06</span>
                <HeartHandshake className="w-4 h-4 text-[#193B35]/60" />
              </div>
              <h3 className="font-serif-display text-xl text-[#193B35] mb-1.5">
                Gum Care
              </h3>
              <p className="text-[11px] uppercase tracking-wider text-[#BC8972] font-medium mb-3">
                Support for healthy gums and oral hygiene
              </p>
              <p className="text-xs text-[#242B28]/75 leading-relaxed mb-6 font-sans-body">
                Support for healthy gums and oral hygiene through gentle deep cleaning, pocket reduction therapy, and proactive periodontal wellness management.
              </p>
            </div>

            <div className="pt-4 border-t border-[#193B35]/8 flex items-center justify-between">
              <span className="text-[11px] text-[#242B28]/55">Periodontal health</span>
              <button
                type="button"
                onClick={() => setActiveModalTreatment(treatmentsData[5])}
                className="text-xs font-medium text-[#193B35] inline-flex items-center gap-1 hover:text-[#122B27]"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Detail Modal */}
      <TreatmentModal
        treatment={activeModalTreatment}
        onClose={() => setActiveModalTreatment(null)}
        onBookTreatment={onSelectTreatmentForBooking}
      />
    </section>
  );
};
