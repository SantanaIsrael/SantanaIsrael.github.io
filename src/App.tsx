import { useEffect, useState } from 'react';
import { AmbientBackground } from './components/AmbientBackground';
import { ContactSection } from './components/ContactSection';
import { DetailModal } from './components/DetailModal';
import { HeroBento } from './components/HeroBento';
import { Navbar } from './components/Navbar';
import { PartnersSection } from './components/PartnersSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { TrajectorySection } from './components/TrajectorySection';
import { useTheme } from './hooks/useTheme';
import type { Locale, ModalPayload } from './types/portfolio';

const SECTION_IDS = ['overview', 'projects', 'trajectory', 'partners', 'skills', 'contact'];

export function App() {
  const { mode, resolvedTheme, toggleTheme, resetToSystem } = useTheme();
  const [locale, setLocale] = useState<Locale>('pt');
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [modalPayload, setModalPayload] = useState<ModalPayload | null>(null);

  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
  }, [locale]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        rootMargin: '-28% 0px -55% 0px',
        threshold: 0.05,
      }
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen">
      <AmbientBackground />

      <Navbar
        locale={locale}
        onChangeLocale={setLocale}
        themeMode={mode}
        resolvedTheme={resolvedTheme}
        onToggleTheme={toggleTheme}
        onResetSystemTheme={resetToSystem}
        activeSection={activeSection}
      />

      <main>
        <HeroBento locale={locale} />
        <ProjectsSection locale={locale} onSelectModal={setModalPayload} />
        <TrajectorySection locale={locale} onSelectModal={setModalPayload} />
        <PartnersSection locale={locale} />
        <SkillsSection locale={locale} />
      </main>

      <ContactSection locale={locale} />

      <DetailModal
        payload={modalPayload}
        locale={locale}
        onClose={() => setModalPayload(null)}
      />
    </div>
  );
}

export default App;
