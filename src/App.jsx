import React, { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DomainExplorer from './components/DomainExplorer';
import ProjectCatalog from './components/ProjectCatalog';
import DeliverablesMatrix from './components/DeliverablesMatrix';
import ProcessWorkflow from './components/ProcessWorkflow';
import CostEstimator from './components/CostEstimator';
import InternshipsSection from './components/InternshipsSection';
import AboutTISLegacy from './components/AboutTISLegacy';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import AbstractModal from './components/AbstractModal';
import BookProjectModal from './components/BookProjectModal';
import CustomIdeaModal from './components/CustomIdeaModal';
import Toast from './components/Toast';

export function App() {
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals state
  const [activeAbstractProject, setActiveAbstractProject] = useState(null);
  const [bookingModalProject, setBookingModalProject] = useState(null);
  const [isCustomIdeaModalOpen, setIsCustomIdeaModalOpen] = useState(false);
  
  // Toast state
  const [toastMessage, setToastMessage] = useState(null);

  // Search handler from Hero section
  const handleHeroSearch = ({ domain, query }) => {
    if (domain) setSelectedDomain(domain);
    if (query) setSearchQuery(query);
  };

  const handleDomainSelect = (domainId) => {
    setSelectedDomain(domainId);
  };

  const handleOpenBookingModal = (projectOrSubject) => {
    setBookingModalProject(projectOrSubject || { title: "General Inquiry" });
  };

  const handleCloseBookingModal = () => {
    setBookingModalProject(null);
  };

  const handleFormSubmitted = ({ name, message }) => {
    setToastMessage(message || `Thank you ${name}! We have received your request.`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-[#0050CD] selection:text-white">
      
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Sticky Navbar */}
      <Navbar 
        onOpenBookingModal={handleOpenBookingModal}
        onOpenCustomIdeaModal={() => setIsCustomIdeaModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 3. Hero Section */}
        <Hero 
          onSearchSubmit={handleHeroSearch}
          onOpenBookingModal={handleOpenBookingModal}
          onOpenCustomIdeaModal={() => setIsCustomIdeaModalOpen(true)}
        />

        {/* 4. Domain Spectrum */}
        <DomainExplorer 
          onSelectDomain={handleDomainSelect}
          onOpenCustomIdeaModal={() => setIsCustomIdeaModalOpen(true)}
        />

        {/* 5. Live Interactive Project Catalog */}
        <ProjectCatalog 
          selectedDomain={selectedDomain}
          setSelectedDomain={setSelectedDomain}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onViewAbstract={(project) => setActiveAbstractProject(project)}
          onBookProject={(project) => setBookingModalProject(project)}
        />

        {/* 6. Complete Deliverables Guarantee Matrix */}
        <DeliverablesMatrix 
          onOpenBookingModal={handleOpenBookingModal}
        />

        {/* 7. The 5-Step Project Execution Lifecycle */}
        <ProcessWorkflow 
          onOpenBookingModal={handleOpenBookingModal}
        />

        {/* 8. Interactive Project Cost & Package Estimator */}
        <CostEstimator 
          onOpenBookingModal={handleOpenBookingModal}
        />

        {/* 9. Student Internships & IPT Wing */}
        <InternshipsSection 
          onOpenBookingModal={handleOpenBookingModal}
        />

        {/* 10. About Technofinity & TIS Legacy */}
        <AboutTISLegacy 
          onOpenBookingModal={handleOpenBookingModal}
        />

        {/* 11. Student Testimonials & Hall of Fame */}
        <Testimonials />

        {/* 12. Frequently Asked Questions */}
        <FAQSection />

        {/* 13. Comprehensive Contact & Office Hub (Priyadarshini) */}
        <ContactSection 
          onFormSubmitted={handleFormSubmitted}
        />

      </main>

      {/* 14. Corporate Footer */}
      <Footer 
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* 15. Floating Action Buttons (WhatsApp + Call + ScrollTop) */}
      <FloatingContact />

      {/* Interactive Overlays & Modals */}
      {activeAbstractProject && (
        <AbstractModal 
          project={activeAbstractProject}
          onClose={() => setActiveAbstractProject(null)}
          onBookProject={(proj) => {
            setActiveAbstractProject(null);
            setBookingModalProject(proj);
          }}
        />
      )}

      {bookingModalProject && (
        <BookProjectModal 
          project={bookingModalProject}
          onClose={handleCloseBookingModal}
          onSubmitted={handleFormSubmitted}
        />
      )}

      {isCustomIdeaModalOpen && (
        <CustomIdeaModal 
          onClose={() => setIsCustomIdeaModalOpen(false)}
          onSubmitted={handleFormSubmitted}
        />
      )}

      {/* Toast Feedback */}
      <Toast 
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

    </div>
  );
}

export default App;
