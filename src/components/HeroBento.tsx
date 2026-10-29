import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  Cpu,
  GraduationCap,
  Layers,
  MapPin,
} from 'lucide-react';
import { PROFILE, UI_COPY } from '../data/portfolio';
import type { Locale } from '../types/portfolio';

interface HeroBentoProps {
  locale: Locale;
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function HeroBento({ locale }: HeroBentoProps) {
  return (
    <section
      id="overview"
      className="relative pt-14 sm:pt-20 md:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Hero Central Minimalista estilo Apple */}
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="inline-flex items-center gap-2.5 liquid-glass-pill rounded-full pl-1.5 pr-4 py-1 text-xs font-medium text-apple-mutedLight dark:text-apple-mutedDark"
        >
          <img
            src={PROFILE.avatarUrl}
            alt={PROFILE.name}
            className="h-6 w-6 rounded-full object-cover ring-1 ring-black/10 dark:ring-white/20"
            loading="eager"
          />
          <span>{UI_COPY.hero.availabilityBadge[locale]}</span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.08}
          variants={fadeUp}
          className="mt-7 text-4xl sm:text-5xl lg:text-[3.65rem] font-semibold tracking-[-0.03em] leading-[1.08] text-apple-textLight dark:text-apple-textDark"
        >
          {PROFILE.roleHeadline[locale]}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.16}
          variants={fadeUp}
          className="mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-apple-mutedLight dark:text-apple-mutedDark font-normal max-w-2xl mx-auto"
        >
          {PROFILE.heroLead[locale]}
        </motion.p>

        {/* CTAs Primários */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.24}
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-apple-textLight text-white dark:bg-white dark:text-apple-textLight px-6 py-3 text-sm font-medium shadow-sm hover:opacity-90 transition-opacity"
          >
            <span>{UI_COPY.hero.exploreProjects[locale]}</span>
            <ArrowDownRight className="h-4 w-4" />
          </a>

          <a
            href={PROFILE.links.lattes}
            target="_blank"
            rel="noreferrer"
            className="liquid-glass-pill inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-apple-textLight dark:text-apple-textDark hover:border-apple-blue/40 dark:hover:border-apple-blueDark/40 transition-colors"
          >
            <BookOpen className="h-4 w-4 text-apple-blue dark:text-apple-blueDark" />
            <span>{UI_COPY.hero.viewLattes[locale]}</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
          </a>
        </motion.div>
      </div>

      {/* Bento Grid de Visão Geral */}
      <motion.div
        initial="hidden"
        animate="visible"
        custom={0.32}
        variants={fadeUp}
        className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5"
      >
        {/* Card 1: Em Desenvolvimento Agora (7 colunas) */}
        <a
          href="#projects"
          className="liquid-glass liquid-glass-interactive md:col-span-7 rounded-3xl p-6 sm:p-7 flex flex-col justify-between group"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-apple-blue dark:text-apple-blueDark">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-apple-blue dark:bg-apple-blueDark opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-apple-blue dark:bg-apple-blueDark" />
              </span>
              {UI_COPY.hero.bento.buildingNowLabel[locale]}
            </span>
            <Layers className="h-4 w-4 text-apple-mutedLight dark:text-apple-mutedDark group-hover:text-apple-blue dark:group-hover:text-apple-blueDark transition-colors" />
          </div>

          <div className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-apple-textLight dark:text-apple-textDark">
              {UI_COPY.hero.bento.buildingNowTitle[locale]}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-apple-mutedLight dark:text-apple-mutedDark">
              {UI_COPY.hero.bento.buildingNowDesc[locale]}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {['Python', 'PostgreSQL', 'WebGIS', 'JavaScript', 'Docker'].map((item) => (
              <span
                key={item}
                className="liquid-glass-subtle rounded-full px-3 py-1 text-xs font-medium text-apple-textLight/80 dark:text-apple-textDark/80"
              >
                {item}
              </span>
            ))}
          </div>
        </a>

        {/* Card 2: Base Acadêmica UESC (5 colunas) */}
        <a
          href="#trajectory"
          className="liquid-glass liquid-glass-interactive md:col-span-5 rounded-3xl p-6 sm:p-7 flex flex-col justify-between group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-apple-mutedLight dark:text-apple-mutedDark">
              {UI_COPY.hero.bento.academicBaseLabel[locale]}
            </span>
            <GraduationCap className="h-4 w-4 text-apple-blue dark:text-apple-blueDark" />
          </div>

          <div className="mt-6">
            <div className="inline-flex items-center rounded-lg bg-apple-blue/10 dark:bg-apple-blueDark/15 px-2.5 py-1 text-xs font-semibold text-apple-blue dark:text-apple-blueDark">
              {PROFILE.institutionShort}
            </div>
            <h2 className="mt-3 text-xl sm:text-2xl font-semibold tracking-tight text-apple-textLight dark:text-apple-textDark">
              {UI_COPY.hero.bento.academicBaseTitle[locale]}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-apple-mutedLight dark:text-apple-mutedDark">
              {UI_COPY.hero.bento.academicBaseDesc[locale]}
            </p>
          </div>

          <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-apple-mutedLight dark:text-apple-mutedDark">
            <MapPin className="h-3.5 w-3.5 text-apple-blue dark:text-apple-blueDark" />
            <span>{PROFILE.location[locale]}</span>
          </div>
        </a>

        {/* Card 3: Domínios Técnicos (5 colunas) */}
        <a
          href="#skills"
          className="liquid-glass liquid-glass-interactive md:col-span-5 rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-apple-mutedLight dark:text-apple-mutedDark">
              {UI_COPY.hero.bento.focusAreasLabel[locale]}
            </span>
            <Cpu className="h-4 w-4 text-apple-mutedLight dark:text-apple-mutedDark" />
          </div>

          <ul className="mt-5 grid grid-cols-1 gap-2.5">
            {UI_COPY.hero.bento.focusAreasItems[locale].map((domain) => (
              <li
                key={domain}
                className="liquid-glass-subtle flex items-center justify-between rounded-2xl px-3.5 py-2 text-xs sm:text-sm font-medium text-apple-textLight dark:text-apple-textDark"
              >
                <span>{domain}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-apple-blue dark:bg-apple-blueDark" />
              </li>
            ))}
          </ul>
        </a>

        {/* Card 4: Fontes Integradas GitHub + Lattes + LinkedIn (7 colunas) */}
        <div className="liquid-glass md:col-span-7 rounded-3xl p-6 sm:p-7 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-apple-mutedLight dark:text-apple-mutedDark">
              {UI_COPY.hero.bento.ecosystemLabel[locale]}
            </span>
            <Code2 className="h-4 w-4 text-apple-mutedLight dark:text-apple-mutedDark" />
          </div>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-apple-textLight/90 dark:text-apple-textDark/90">
            {UI_COPY.hero.bento.ecosystemDesc[locale]}
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noreferrer"
              className="liquid-glass-subtle flex items-center justify-between rounded-2xl px-4 py-3 text-xs font-semibold text-apple-textLight dark:text-apple-textDark hover:border-apple-blue/40 dark:hover:border-apple-blueDark/40 transition-colors"
            >
              <div>
                <div className="text-[11px] font-normal text-apple-mutedLight dark:text-apple-mutedDark">
                  Código & Projetos
                </div>
                <div className="mt-0.5">GitHub</div>
              </div>
              <ArrowUpRight className="h-4 w-4 opacity-70" />
            </a>

            <a
              href={PROFILE.links.lattes}
              target="_blank"
              rel="noreferrer"
              className="liquid-glass-subtle flex items-center justify-between rounded-2xl px-4 py-3 text-xs font-semibold text-apple-textLight dark:text-apple-textDark hover:border-apple-blue/40 dark:hover:border-apple-blueDark/40 transition-colors"
            >
              <div>
                <div className="text-[11px] font-normal text-apple-mutedLight dark:text-apple-mutedDark">
                  Vida Acadêmica
                </div>
                <div className="mt-0.5">CNPq Lattes</div>
              </div>
              <ArrowUpRight className="h-4 w-4 opacity-70" />
            </a>

            <a
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="liquid-glass-subtle flex items-center justify-between rounded-2xl px-4 py-3 text-xs font-semibold text-apple-textLight dark:text-apple-textDark hover:border-apple-blue/40 dark:hover:border-apple-blueDark/40 transition-colors"
            >
              <div>
                <div className="text-[11px] font-normal text-apple-mutedLight dark:text-apple-mutedDark">
                  Rede & Carreira
                </div>
                <div className="mt-0.5">LinkedIn</div>
              </div>
              <ArrowUpRight className="h-4 w-4 opacity-70" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
