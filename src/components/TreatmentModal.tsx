import React, { useEffect } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

export interface TreatmentItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  duration: string;
  idealFor: string;
}

interface TreatmentModalProps {
  treatment: TreatmentItem | null;
  onClose: () => void;
  onBookTreatment: (treatmentTitle: string) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  treatment,
  onClose,
  onBookTreatment,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (treatment) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [treatment, onClose]);

  if (!treatment) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#193B35]/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#F7F6F1] border border-[#193B35]/15 p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh] text-[#242B28]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-6 right-6 p-2 text-[#242B28]/60 hover:text-[#193B35] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193B35]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Number & Category */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-serif-display text-lg text-[#BC8972]">{treatment.number}</span>
          <span className="w-4 h-[1px] bg-[#193B35]/20" aria-hidden="true" />
          <span className="text-xs uppercase tracking-widest text-[#193B35]/70 font-medium">
            Clinical Service
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 id="modal-title" className="font-serif-display text-2xl sm:text-3xl text-[#193B35] mb-2">
          {treatment.title}
        </h3>
        <p className="text-sm text-[#BC8972] font-medium mb-6">
          {treatment.subtitle}
        </p>

        {/* Main Narrative */}
        <p className="text-base text-[#242B28]/85 leading-relaxed mb-6 font-sans-body">
          {treatment.description}
        </p>

        {/* What to Expect / Clinical Details */}
        <div className="bg-[#E5ECE6]/50 border border-[#193B35]/10 p-5 mb-6">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-[#193B35] mb-3">
            What to Expect During Your Care
          </h4>
          <ul className="space-y-2.5">
            {treatment.details.map((point, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm text-[#242B28]/80">
                <CheckCircle2 className="w-4 h-4 text-[#193B35] shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Clinical Parameters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#193B35]/10 text-xs text-[#242B28]/80 mb-8">
          <div>
            <span className="block uppercase tracking-wider text-[#193B35]/60 font-semibold mb-1">
              Typical Appointment Duration
            </span>
            <p className="text-sm font-medium text-[#193B35]">{treatment.duration}</p>
          </div>
          <div>
            <span className="block uppercase tracking-wider text-[#193B35]/60 font-semibold mb-1">
              Recommended For
            </span>
            <p className="text-sm font-medium text-[#193B35]">{treatment.idealFor}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#193B35]/10">
          <button
            type="button"
            onClick={() => {
              onBookTreatment(treatment.title);
              onClose();
            }}
            className="flex-1 py-3.5 px-6 bg-[#193B35] text-[#F7F6F1] text-sm font-medium tracking-wide hover:bg-[#122B27] transition-colors flex items-center justify-center gap-2"
          >
            <span>Book a Consultation for this Care</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="py-3.5 px-6 bg-transparent text-[#242B28] text-sm font-medium hover:bg-[#193B35]/5 transition-colors border border-[#193B35]/20"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
