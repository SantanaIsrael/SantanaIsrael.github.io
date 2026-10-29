import { motion } from 'framer-motion';
import {
  Building2,
  Cpu,
  FolderGit2,
  GraduationCap,
  Home,
  Mail,
  Monitor,
  Moon,
  Sun,
} from 'lucide-react';
import { PROFILE, UI_COPY } from '../data/portfolio';
import type { Locale, ThemeMode } from '../types/portfolio';

interface NavbarProps {
  locale: Locale;
  onChangeLocale: (locale: Locale) => void;
  themeMode: ThemeMode;
  resolvedTheme: 'light' | 'dark';
  onToggleTheme: () => void;
  onResetSystemTheme: () => void;
  activeSection: string;
}

const NAV_ITEMS = [
  { id: 'overview', label: UI_COPY.nav.overview, Icon: Home },
  { id: 'projects', label: UI_COPY.nav.projects, Icon: FolderGit2 },
  { id: 'trajectory', label: UI_COPY.nav.trajectory, Icon: GraduationCap },
  { id: 'partners', label: UI_COPY.nav.partners, Icon: Building2 },
  { id: 'skills', label: UI_COPY.nav.skills, Icon: Cpu },
  { id: 'contact', label: UI_COPY.nav.contact, Icon: Mail },
] as const;

export function Navbar({
  locale,
  onChangeLocale,
  themeMode,
  resolvedTheme,
  onToggleTheme,
  onResetSystemTheme,
  activeSection,
}: NavbarProps) {
  return (
    <header className="fixed bottom-4 md:bottom-auto md:top-4 inset-x-0 z-40 flex justify-center px-2.5 sm:px-6 pointer-events-none pb-[env(safe-area-inset-bottom)]">
      <nav
        aria-label="Primary Navigation"
        className="liquid-glass-pill pointer-events-auto flex items-center justify-between md:justify-start gap-1 sm:gap-2 rounded-full px-2.5 py-2 md:px-4 md:py-2 max-w-full"
      >
        {/* Identidade compacta (exibida em telas médias/grandes) */}
        <a
          href="#overview"
          className="hidden md:flex items-center gap-2 pr-3 border-r border-black/10 dark:border-white/10 shrink-0 group"
        >
          <span className="h-2 w-2 rounded-full bg-apple-blue dark:bg-apple-blueDark transition-transform group-hover:scale-125" />
          <span className="text-sm font-semibold tracking-tight text-apple-textLight dark:text-apple-textDark">
            {PROFILE.name}
          </span>
        </a>

        {/* Links de Seção (Desktop & Tablet >= md) */}
        <ul className="hidden md:flex items-center gap-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    isActive
                      ? 'text-apple-textLight dark:text-white'
                      : 'text-apple-mutedLight hover:text-apple-textLight dark:text-apple-mutedDark dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-pill-desktop"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 -z-10 rounded-full bg-black/[0.07] dark:bg-white/[0.12]"
                    />
                  )}
                  {item.label[locale]}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Dock Inferior estilo iOS em Telas Menores (< md) */}
        <ul className="flex md:hidden items-center gap-0.5">
          {NAV_ITEMS.map(({ id, label, Icon }) => {
            const isActive = activeSection === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-label={label[locale]}
                  className={`relative flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-medium transition-colors ${
                    isActive
                      ? 'text-apple-textLight dark:text-white'
                      : 'text-apple-mutedLight dark:text-apple-mutedDark hover:text-apple-textLight dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-pill-mobile"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 -z-10 rounded-full bg-black/[0.08] dark:bg-white/[0.14]"
                    />
                  )}
                  <Icon className="h-4 w-4 shrink-0" />
                  {isActive && (
                    <span className="max-w-[72px] truncate leading-none">{label[locale]}</span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Controles: Idioma (PT/EN) + Tema (Light/Dark + System) */}
        <div className="flex items-center gap-1.5 pl-1.5 sm:pl-2 border-l border-black/10 dark:border-white/10 shrink-0">
          {/* Seletor PT / EN */}
          <div
            role="group"
            aria-label="Language switcher"
            className="flex items-center rounded-full bg-black/[0.05] dark:bg-white/[0.08] p-0.5 text-[11px] font-medium"
          >
            <button
              type="button"
              onClick={() => onChangeLocale('pt')}
              className={`px-1.5 sm:px-2 py-0.5 rounded-full transition-all ${
                locale === 'pt'
                  ? 'bg-white text-apple-textLight shadow-sm dark:bg-white/20 dark:text-white'
                  : 'text-apple-mutedLight dark:text-apple-mutedDark hover:text-apple-textLight dark:hover:text-white'
              }`}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => onChangeLocale('en')}
              className={`px-1.5 sm:px-2 py-0.5 rounded-full transition-all ${
                locale === 'en'
                  ? 'bg-white text-apple-textLight shadow-sm dark:bg-white/20 dark:text-white'
                  : 'text-apple-mutedLight dark:text-apple-mutedDark hover:text-apple-textLight dark:hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Botão de alternância Light / Dark (Shift+Clique restaura automático do sistema) */}
          <button
            type="button"
            onClick={(e) => {
              if (e.shiftKey) {
                onResetSystemTheme();
              } else {
                onToggleTheme();
              }
            }}
            title={
              locale === 'pt'
                ? `Tema atual: ${
                    themeMode === 'system'
                      ? `Sistema (${resolvedTheme === 'dark' ? 'Escuro' : 'Claro'})`
                      : resolvedTheme === 'dark'
                        ? 'Escuro'
                        : 'Claro'
                  }. Clique para alternar (Shift+Clique segue o sistema).`
                : `Current theme: ${
                    themeMode === 'system' ? `System (${resolvedTheme})` : resolvedTheme
                  }. Click to toggle (Shift+Click for system default).`
            }
            aria-label="Toggle color theme"
            className="relative flex h-7 w-7 items-center justify-center rounded-full bg-black/[0.05] dark:bg-white/[0.08] text-apple-textLight dark:text-apple-textDark hover:bg-black/[0.1] dark:hover:bg-white/[0.15] transition-colors"
          >
            {resolvedTheme === 'dark' ? (
              <Moon className="h-3.5 w-3.5 text-sky-300" />
            ) : (
              <Sun className="h-3.5 w-3.5 text-amber-500" />
            )}
            {themeMode === 'system' && (
              <span
                aria-hidden="true"
                className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-apple-bgLight dark:bg-apple-bgDark ring-1 ring-black/10 dark:ring-white/20"
              >
                <Monitor className="h-2 w-2 text-apple-mutedLight dark:text-apple-mutedDark" />
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
