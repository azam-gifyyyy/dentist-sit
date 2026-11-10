import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Treatments } from './components/Treatments';
import { Studio } from './components/Studio';
import { Team } from './components/Team';
import { PatientJourney } from './components/PatientJourney';
import { AppointmentSection } from './components/AppointmentSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedTreatment, setSelectedTreatment] = useState<string>('');

  const scrollToAppointment = () => {
    const el = document.getElementById('appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTreatments = () => {
    const el = document.getElementById('treatments');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectTreatmentForBooking = (treatmentTitle: string) => {
    setSelectedTreatment(treatmentTitle);
    scrollToAppointment();
  };

  return (
    <div className="min-h-screen bg-[#F7F6F1] text-[#242B28] selection:bg-[#193B35] selection:text-[#F7F6F1]">
      {/* Sticky Editorial Navigation */}
      <Navbar onBookClick={scrollToAppointment} />

      <main>
        {/* Section 3: Hero */}
        <Hero
          onBookClick={scrollToAppointment}
          onExploreTreatments={scrollToTreatments}
        />

        {/* Section 4: Philosophy / Introduction */}
        <Philosophy />

        {/* Section 5: Treatments (with Interactive Modals) */}
        <Treatments
          onSelectTreatmentForBooking={handleSelectTreatmentForBooking}
        />

        {/* Section 6: The Studio (Environment & Atmosphere) */}
        <Studio />

        {/* Section 7: Dentist / Team Profile */}
        <Team />

        {/* Section 8: Patient Journey */}
        <PatientJourney />

        {/* Section 9: Appointment Section */}
        <AppointmentSection
          selectedTreatment={selectedTreatment}
          onClearSelectedTreatment={() => setSelectedTreatment('')}
        />

        {/* Section 10: FAQ Section */}
        <FaqSection />
      </main>

      {/* Section 11: Footer */}
      <Footer />
    </div>
  );
}
