import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'How do I book my first appointment?',
      answer:
        'You can reserve a consultation directly through our online appointment form above or by calling our studio reception. When you get in touch, we will ask a few simple questions regarding your availability, any current symptoms or dental concerns, and whether you are transferring records from a previous dentist.',
    },
    {
      id: 'faq-2',
      question: 'What should I bring to my first visit?',
      answer:
        'Please bring a government-issued photo ID, your dental benefit card (if utilizing insurance coverage), and a list of any current medications. If you have dental X-rays taken within the past twelve months, you may request that your prior clinic email them to us beforehand, or we can assist in requesting them on your behalf.',
    },
    {
      id: 'faq-3',
      question: 'Do you offer cosmetic treatments?',
      answer:
        'Yes. We offer thoughtful cosmetic services including conservative composite bonding, custom porcelain veneers, enamel recontouring, and professional in-office whitening. We always evaluate aesthetic goals in harmony with your natural bite and facial features, providing digital previews before beginning any irreversible treatment.',
    },
    {
      id: 'faq-4',
      question: 'Can I discuss treatment options before deciding?',
      answer:
        'Absolutely. In fact, we insist on it. Every comprehensive examination concludes with a private 1-on-1 dialogue in our consultation room. We display your digital imagery on screen, explain the pros and cons of each pathway, provide itemized cost breakdowns, and give you time to consider options at your own pace without pressure.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-[#F7F6F1]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#BC8972]" aria-hidden="true" />
            <span className="text-[11px] sm:text-[12px] font-sans-body uppercase tracking-[0.22em] text-[#193B35]/80 font-medium">
              Common Inquiries
            </span>
            <span className="w-6 h-[1px] bg-[#BC8972]" aria-hidden="true" />
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-[#193B35] font-normal [text-wrap:balance]">
            Answers to your questions.
          </h2>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#193B35]/12 border-y border-[#193B35]/12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.id} className="py-6 sm:py-7">
                <button
                  type="button"
                  id={`btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={faq.id}
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#193B35] gap-4"
                >
                  <span className="font-serif-display text-xl sm:text-2xl text-[#193B35] group-hover:text-[#122B27] transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={`w-7 h-7 shrink-0 flex items-center justify-center border transition-colors ${
                      isOpen
                        ? 'border-[#BC8972] bg-[#BC8972]/10 text-[#BC8972]'
                        : 'border-[#193B35]/20 text-[#193B35]/60 group-hover:border-[#193B35]/50 group-hover:text-[#193B35]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={faq.id}
                    role="region"
                    aria-labelledby={`btn-${faq.id}`}
                    className="mt-4 pr-6 sm:pr-12 text-[#242B28]/80 text-sm sm:text-[15px] leading-relaxed font-sans-body animate-fadeIn"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Subdued reassurance note below FAQ */}
        <div className="mt-12 text-center text-xs text-[#242B28]/60 font-sans-body">
          Have an inquiry not answered here? Reach our patient concierge at{' '}
          <a
            href="mailto:care@morrowdentalstudio.com"
            className="text-[#193B35] underline hover:text-[#BC8972] transition-colors"
          >
            care@morrowdentalstudio.com
          </a>
        </div>
      </div>
    </section>
  );
};
