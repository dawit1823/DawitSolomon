import { useState } from 'react';
import AutomationLab from './components/AutomationLab';
import ContactSection from './components/ContactSection';
import Hero from './components/Hero';
import MarqueeDivider from './components/MarqueeDivider';
import Navbar from './components/Navbar';
import ProjectModal from './components/ProjectModal';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import TimelineSection from './components/TimelineSection';
import { ProjectItem } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleNavigateContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#09090B]">
      <Navbar onNavigateContact={handleNavigateContact} />

      <main className="flex-1">
        <Hero />
        <MarqueeDivider />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <TimelineSection />
        <SkillsSection />
        <AutomationLab />
      </main>

      <ContactSection />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
