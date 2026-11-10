import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle2, Clock, MapPin, AlertCircle } from 'lucide-react';

interface AppointmentSectionProps {
  selectedTreatment?: string;
  onClearSelectedTreatment?: () => void;
}

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  treatment: string;
  preferredDate: string;
  timeSlot: string;
  notes: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  treatment?: string;
  preferredDate?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  selectedTreatment,
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    treatment: selectedTreatment || '',
    preferredDate: '',
    timeSlot: 'Morning (9:00 AM – 12:00 PM)',
    notes: '',
  });

  useEffect(() => {
    if (selectedTreatment) {
      setFormData((prev) => ({ ...prev, treatment: selectedTreatment }));
    }
  }, [selectedTreatment]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  const treatmentsList = [
    'General Dentistry (Checkup & Cleaning)',
    'Cosmetic Dentistry (Bonding & Veneers)',
    'Clear Aligners (Orthodontic Consultation)',
    'Teeth Whitening (In-Studio / Take-Home)',
    'Restorative Dentistry (Fillings / Crowns)',
    'Gum Care (Periodontal Therapy)',
    'New Patient Comprehensive Consultation',
    'Second Opinion / Treatment Review',
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format (e.g., name@example.com).';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone number.';
    } else if (phoneDigits.length < 8) {
      newErrors.phone = 'Please enter a valid telephone number with area code.';
    }

    if (!formData.treatment) {
      newErrors.treatment = 'Please select a treatment or visit type.';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ ...formData });
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      treatment: '',
      preferredDate: '',
      timeSlot: 'Morning (9:00 AM – 12:00 PM)',
      notes: '',
    });
    setErrors({});
  };

  // Get minimum date as tomorrow in YYYY-MM-DD
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateString = tomorrow.toISOString().split('T')[0];

  return (
    <section id="appointment" className="py-24 md:py-32 bg-[#193B35] text-[#F7F6F1] relative overflow-hidden">
      {/* Background architectural grain pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F7F6F1_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context, Hours & Studio Reassurance */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#BC8972]" aria-hidden="true" />
              <span className="text-[11px] sm:text-[12px] font-sans-body uppercase tracking-[0.24em] text-[#BC8972] font-medium">
                Reserve Your Time
              </span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-[#F7F6F1] font-normal mb-6 [text-wrap:balance]">
              Let's make time for your smile.
            </h2>

            <p className="text-sm sm:text-base text-[#F7F6F1]/80 leading-relaxed font-sans-body mb-10">
              Whether you are scheduling a routine checkup or taking the first step toward aesthetic treatment, we set aside dedicated, private time to answer your questions and understand your goals.
            </p>

            <div className="space-y-6 pt-6 border-t border-[#F7F6F1]/15 text-xs sm:text-[13px] text-[#F7F6F1]/85 font-sans-body">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#BC8972] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#F7F6F1] font-medium">Morrow Dental Studio</strong>
                  <span>428 Montgomery Boulevard, Suite 300 · Downtown Medical District</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#BC8972] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#F7F6F1] font-medium">Studio Hours</strong>
                  <span>Monday – Thursday: 8:00 AM – 5:00 PM</span>
                  <span className="block">Friday: 8:00 AM – 2:00 PM (By Appointment)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-[#BC8972] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#F7F6F1] font-medium">New Patient Guidance</strong>
                  <span>First visits include digital photography, 3D scan, and a dedicated 1-on-1 consultation.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form / Submission State */}
          <div className="lg:col-span-7 bg-[#122B27] border border-[#F7F6F1]/15 p-6 sm:p-10 shadow-2xl">
            {isSubmitted && submittedData ? (
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-[#BC8972]">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <span className="text-xs uppercase tracking-widest font-semibold">
                    Request Received (Demo Environment)
                  </span>
                </div>

                <h3 className="font-serif-display text-2xl sm:text-3xl text-[#F7F6F1]">
                  Thank you, {submittedData.fullName}.
                </h3>

                {/* Explicit honest demo message required by prompt */}
                <div className="bg-[#193B35] border border-[#BC8972]/40 p-5 text-xs text-[#F7F6F1]/90 leading-relaxed font-sans-body space-y-2">
                  <div className="flex items-center gap-2 text-[#BC8972] font-semibold text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>Demo Notice: Backend Integration Required</span>
                  </div>
                  <p>
                    This is a front-end demonstration of the Morrow Dental Studio website. 
                    <strong> No appointment was actually scheduled.</strong> In a live deployment, this form would connect to your clinical EHR or calendar booking API (such as Dentrix, Curve, or Google Calendar).
                  </p>
                </div>

                <div className="bg-[#193B35]/70 border border-[#F7F6F1]/10 p-5 text-xs text-[#F7F6F1]/80 space-y-2.5">
                  <h4 className="text-[11px] uppercase tracking-wider text-[#BC8972] font-semibold mb-2">
                    Submitted Inquiry Summary
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px]">
                    <div>
                      <span className="text-[#F7F6F1]/50 text-xs block">Patient:</span>
                      <span className="text-[#F7F6F1] font-medium">{submittedData.fullName}</span>
                    </div>
                    <div>
                      <span className="text-[#F7F6F1]/50 text-xs block">Contact:</span>
                      <span className="text-[#F7F6F1]">{submittedData.email} · {submittedData.phone}</span>
                    </div>
                    <div>
                      <span className="text-[#F7F6F1]/50 text-xs block">Selected Care:</span>
                      <span className="text-[#F7F6F1] font-medium">{submittedData.treatment}</span>
                    </div>
                    <div>
                      <span className="text-[#F7F6F1]/50 text-xs block">Preferred Date & Window:</span>
                      <span className="text-[#F7F6F1]">{submittedData.preferredDate} ({submittedData.timeSlot})</span>
                    </div>
                  </div>
                  {submittedData.notes && (
                    <div className="pt-2 border-t border-[#F7F6F1]/10 text-xs">
                      <span className="text-[#F7F6F1]/50 block">Patient Notes:</span>
                      <span className="italic text-[#F7F6F1]/90">"{submittedData.notes}"</span>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full py-3 px-6 bg-[#BC8972] text-[#122B27] text-sm font-semibold tracking-wide hover:bg-[#c9957e] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F6F1]"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="border-b border-[#F7F6F1]/10 pb-4 mb-2">
                  <h3 className="font-serif-display text-xl sm:text-2xl text-[#F7F6F1]">
                    Appointment Request
                  </h3>
                  <p className="text-xs text-[#F7F6F1]/70 font-sans-body mt-1">
                    Fill in your details below. Our studio coordinator will review your requested time.
                  </p>
                </div>

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs uppercase tracking-wider font-medium text-[#F7F6F1]/80 mb-1.5">
                    Full Name <span className="text-[#BC8972]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Clara Henderson"
                    className={`w-full bg-[#193B35]/80 border ${
                      errors.fullName ? 'border-red-400 focus:ring-red-400' : 'border-[#F7F6F1]/20 focus:border-[#BC8972]'
                    } px-4 py-2.5 text-sm text-[#F7F6F1] placeholder-[#F7F6F1]/30 focus:outline-none focus:ring-1 focus:ring-[#BC8972] transition-colors`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-300 mt-1 font-sans-body">{errors.fullName}</p>
                  )}
                </div>

                {/* Contact Row (Phone & Email) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-medium text-[#F7F6F1]/80 mb-1.5">
                      Phone Number <span className="text-[#BC8972]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 234-8901"
                      className={`w-full bg-[#193B35]/80 border ${
                        errors.phone ? 'border-red-400' : 'border-[#F7F6F1]/20 focus:border-[#BC8972]'
                      } px-4 py-2.5 text-sm text-[#F7F6F1] placeholder-[#F7F6F1]/30 focus:outline-none focus:ring-1 focus:ring-[#BC8972] transition-colors`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-300 mt-1 font-sans-body">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider font-medium text-[#F7F6F1]/80 mb-1.5">
                      Email Address <span className="text-[#BC8972]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="clara@example.com"
                      className={`w-full bg-[#193B35]/80 border ${
                        errors.email ? 'border-red-400' : 'border-[#F7F6F1]/20 focus:border-[#BC8972]'
                      } px-4 py-2.5 text-sm text-[#F7F6F1] placeholder-[#F7F6F1]/30 focus:outline-none focus:ring-1 focus:ring-[#BC8972] transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-300 mt-1 font-sans-body">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Treatment Dropdown */}
                <div>
                  <label htmlFor="treatment" className="block text-xs uppercase tracking-wider font-medium text-[#F7F6F1]/80 mb-1.5">
                    Treatment of Interest <span className="text-[#BC8972]">*</span>
                  </label>
                  <select
                    id="treatment"
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    className={`w-full bg-[#193B35] border ${
                      errors.treatment ? 'border-red-400' : 'border-[#F7F6F1]/20 focus:border-[#BC8972]'
                    } px-4 py-2.5 text-sm text-[#F7F6F1] focus:outline-none focus:ring-1 focus:ring-[#BC8972] transition-colors`}
                  >
                    <option value="" disabled className="bg-[#122B27] text-[#F7F6F1]/60">
                      Select treatment or inquiry type...
                    </option>
                    {treatmentsList.map((t) => (
                      <option key={t} value={t} className="bg-[#122B27] text-[#F7F6F1]">
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.treatment && (
                    <p className="text-xs text-red-300 mt-1 font-sans-body">{errors.treatment}</p>
                  )}
                </div>

                {/* Date & Time Slot Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferredDate" className="block text-xs uppercase tracking-wider font-medium text-[#F7F6F1]/80 mb-1.5">
                      Preferred Date <span className="text-[#BC8972]">*</span>
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      min={minDateString}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full bg-[#193B35]/80 border ${
                        errors.preferredDate ? 'border-red-400' : 'border-[#F7F6F1]/20 focus:border-[#BC8972]'
                      } px-4 py-2.5 text-sm text-[#F7F6F1] focus:outline-none focus:ring-1 focus:ring-[#BC8972] transition-colors [color-scheme:dark]`}
                    />
                    {errors.preferredDate && (
                      <p className="text-xs text-red-300 mt-1 font-sans-body">{errors.preferredDate}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="timeSlot" className="block text-xs uppercase tracking-wider font-medium text-[#F7F6F1]/80 mb-1.5">
                      Preferred Window
                    </label>
                    <select
                      id="timeSlot"
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full bg-[#193B35] border border-[#F7F6F1]/20 px-4 py-2.5 text-sm text-[#F7F6F1] focus:outline-none focus:border-[#BC8972] focus:ring-1 focus:ring-[#BC8972] transition-colors"
                    >
                      <option value="Morning (8:30 AM – 11:30 AM)" className="bg-[#122B27]">Morning (8:30 AM – 11:30 AM)</option>
                      <option value="Midday (11:30 AM – 2:00 PM)" className="bg-[#122B27]">Midday (11:30 AM – 2:00 PM)</option>
                      <option value="Afternoon (2:00 PM – 5:00 PM)" className="bg-[#122B27]">Afternoon (2:00 PM – 5:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Notes (Optional) */}
                <div>
                  <label htmlFor="notes" className="block text-xs uppercase tracking-wider font-medium text-[#F7F6F1]/80 mb-1.5">
                    Questions or Comfort Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Let us know if you experience dental anxiety, have questions about past treatments, or have specific goals..."
                    className="w-full bg-[#193B35]/80 border border-[#F7F6F1]/20 px-4 py-2 text-sm text-[#F7F6F1] placeholder-[#F7F6F1]/30 focus:outline-none focus:border-[#BC8972] focus:ring-1 focus:ring-[#BC8972] transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#BC8972] text-[#122B27] text-sm font-semibold tracking-wide hover:bg-[#c9957e] active:scale-[0.99] transition-all duration-200 border border-[#BC8972] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F6F1]"
                  >
                    Submit Appointment Request
                  </button>
                  <p className="text-[11px] text-[#F7F6F1]/60 text-center mt-2.5 font-sans-body">
                    Our team reviews inquiries within one business day. No payment required today.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
