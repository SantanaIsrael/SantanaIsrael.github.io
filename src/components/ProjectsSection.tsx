import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  FolderGit2,
  GitBranch,
  Globe,
  Lock,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  FEATURED_PROJECTS,
  GITHUB_REPO_ENRICHMENTS,
  PROFILE,
  UI_COPY,
} from '../data/portfolio';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import type { FeaturedProject, Locale, ModalPayload } from '../types/portfolio';

interface ProjectsSectionProps {
  locale: Locale;
  onSelectModal: (payload: ModalPayload) => void;
}

const LANGUAGE_DOT_COLOR: Record<string, string> = {
  Python: 'bg-sky-500',
  JavaScript: 'bg-amber-400',
  TypeScript: 'bg-blue-500',
  Java: 'bg-orange-500',
  C: 'bg-slate-500',
  'C++': 'bg-indigo-500',
  EJS: 'bg-rose-500',
};

export function ProjectsSection({ locale, onSelectModal }: ProjectsSectionProps) {
  const { repos, isLive } = useGitHubRepos();
  const [selectedLang, setSelectedLang] = useState<string>('ALL');

  const languages = useMemo(() => {
    const set = new Set<string>();
    for (const r of repos) {
      if (r.language) set.add(r.language);
    }
    return Array.from(set);
  }, [repos]);

  const filteredRepos = useMemo(() => {
    if (selectedLang === 'ALL') return repos;
    return repos.filter((r) => r.language === selectedLang);
  }, [repos, selectedLang]);

  const openProjectModal = (project: FeaturedProject) => {
    onSelectModal({
      badge: UI_COPY.projects.statusLabels[project.status][locale],
      secondaryBadge: UI_COPY.projects.visibilityLabels[project.visibility][locale],
      period: project.year,
      title: project.title,
      subtitle: project.subtitle[locale],
      description: project.description[locale],
      secondarySectionTitle: UI_COPY.modal.architectureTitle[locale],
      secondarySectionBody: project.architectureDetails[locale],
      bulletsTitle: UI_COPY.modal.highlightsTitle[locale],
      bullets: project.highlights[locale],
      tags: project.techStack,
      primaryLink: project.demoUrl
        ? {
            label: locale === 'pt' ? 'Acessar Projeto' : 'Visit Project',
            url: project.demoUrl,
          }
        : project.repoUrl
          ? {
              label: UI_COPY.projects.openRepo[locale],
              url: project.repoUrl,
            }
          : undefined,
      secondaryLink:
        project.demoUrl && project.repoUrl
          ? {
              label: UI_COPY.projects.openRepo[locale],
              url: project.repoUrl,
            }
          : undefined,
    });
  };

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20"
    >
      {/* Cabeçalho da Seção */}
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-apple-blue dark:text-apple-blueDark">
          {UI_COPY.projects.eyebrow[locale]}
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold tracking-tight leading-tight text-apple-textLight dark:text-apple-textDark">
          {UI_COPY.projects.title[locale]}
        </h2>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-apple-mutedLight dark:text-apple-mutedDark">
          {UI_COPY.projects.subtitle[locale]}
        </p>
      </div>

      {/* Vitrine Curada em Bento Grid (SAPPI, WEBGIS_PMRRIOS, The-Bots, MPI/Distribuídos) */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-5">
        {FEATURED_PROJECTS.map((project, index) => {
          const isLarge = project.featuredSpan === 'large';
          const VisibilityIcon =
            project.visibility === 'private'
              ? Lock
              : project.visibility === 'partner'
                ? Users
                : Globe;

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => openProjectModal(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openProjectModal(project);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`${project.title} — ${UI_COPY.projects.inspectDetails[locale]}`}
              className={`liquid-glass liquid-glass-interactive group relative overflow-hidden rounded-3xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue ${
                isLarge ? 'md:col-span-6' : 'md:col-span-6'
              }`}
            >
              {/* Reflexo interno sutil no topo do card */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${project.accentGradient} blur-3xl opacity-80 group-hover:opacity-100 transition-opacity`}
              />

              <div>
                {/* Badges de Status & Visibilidade */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                        project.status === 'in_development'
                          ? 'bg-apple-blue/12 text-apple-blue dark:bg-apple-blueDark/18 dark:text-apple-blueDark'
                          : 'liquid-glass-subtle text-apple-textLight/80 dark:text-apple-textDark/80'
                      }`}
                    >
                      {project.status === 'in_development' && (
                        <span className="h-1.5 w-1.5 rounded-full bg-apple-blue dark:bg-apple-blueDark animate-pulse" />
                      )}
                      {UI_COPY.projects.statusLabels[project.status][locale]}
                    </span>

                    <span className="liquid-glass-subtle inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium text-apple-mutedLight dark:text-apple-mutedDark">
                      <VisibilityIcon className="h-3 w-3" />
                      {UI_COPY.projects.visibilityLabels[project.visibility][locale]}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-apple-mutedLight dark:text-apple-mutedDark">
                    {project.year}
                  </span>
                </div>

                {/* Título e Subtítulo */}
                <div className="mt-6">
                  {project.partnerTag && (
                    <div className="text-xs font-medium text-apple-blue dark:text-apple-blueDark mb-1">
                      {project.partnerTag[locale]}
                    </div>
                  )}
                  <h3 className="text-2xl sm:text-[1.65rem] font-semibold tracking-tight text-apple-textLight dark:text-apple-textDark">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-apple-textLight/75 dark:text-apple-textDark/75">
                    {project.subtitle[locale]}
                  </p>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-apple-mutedLight dark:text-apple-mutedDark">
                  {project.description[locale]}
                </p>
              </div>

              <div className="mt-7 pt-5 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="liquid-glass-subtle rounded-full px-2.5 py-0.5 text-[11px] font-medium text-apple-textLight/80 dark:text-apple-textDark/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-semibold text-apple-blue dark:text-apple-blueDark shrink-0 group-hover:translate-x-0.5 transition-transform">
                  <span>{UI_COPY.projects.inspectDetails[locale]}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Catálogo Público Sincronizado com a API do GitHub */}
      <div className="mt-16 sm:mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-black/10 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <FolderGit2 className="h-4 w-4 text-apple-blue dark:text-apple-blueDark" />
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-apple-textLight dark:text-apple-textDark">
                {UI_COPY.projects.githubSectionTitle[locale]}
              </h3>
            </div>
            <p className="mt-1 flex items-center gap-2 text-xs sm:text-sm text-apple-mutedLight dark:text-apple-mutedDark">
              <span>{UI_COPY.projects.githubSectionSub[locale]}</span>
              {isLive && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  <Sparkles className="h-2.5 w-2.5" />
                  API Live
                </span>
              )}
            </p>
          </div>

          {/* Filtro por Linguagem em Liquid Glass */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setSelectedLang('ALL')}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                selectedLang === 'ALL'
                  ? 'bg-apple-textLight text-white dark:bg-white dark:text-apple-textLight shadow-sm'
                  : 'liquid-glass-subtle text-apple-mutedLight dark:text-apple-mutedDark hover:text-apple-textLight dark:hover:text-white'
              }`}
            >
              {UI_COPY.projects.allLanguages[locale]}
            </button>
            {languages.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setSelectedLang(lang)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                  selectedLang === lang
                    ? 'bg-apple-textLight text-white dark:bg-white dark:text-apple-textLight shadow-sm'
                    : 'liquid-glass-subtle text-apple-mutedLight dark:text-apple-mutedDark hover:text-apple-textLight dark:hover:text-white'
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${LANGUAGE_DOT_COLOR[lang] || 'bg-apple-blue'}`}
                />
                <span>{lang}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Repositórios */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRepos.map((repo) => {
            const enrichment = GITHUB_REPO_ENRICHMENTS[repo.name];
            const displayDescription = enrichment
              ? enrichment.description[locale]
              : repo.description ||
                (locale === 'pt'
                  ? `Repositório público desenvolvido por @${PROFILE.githubUsername}.`
                  : `Public repository maintained by @${PROFILE.githubUsername}.`);

            const categoryTag = enrichment?.category[locale];
            const yearUpdated = repo.updated_at ? new Date(repo.updated_at).getFullYear() : '';

            return (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="liquid-glass liquid-glass-interactive rounded-2xl p-5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      {categoryTag && (
                        <div className="text-[11px] font-medium text-apple-blue dark:text-apple-blueDark mb-1">
                          {categoryTag}
                        </div>
                      )}
                      <h4 className="text-base font-semibold tracking-tight text-apple-textLight dark:text-apple-textDark truncate">
                        {repo.name}
                      </h4>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-apple-mutedLight dark:text-apple-mutedDark group-hover:text-apple-blue dark:group-hover:text-apple-blueDark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-apple-mutedLight dark:text-apple-mutedDark line-clamp-3">
                    {displayDescription}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between text-xs text-apple-mutedLight dark:text-apple-mutedDark">
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <span className="inline-flex items-center gap-1.5 font-medium text-apple-textLight/80 dark:text-apple-textDark/80">
                        <span
                          className={`h-2 w-2 rounded-full ${
                            LANGUAGE_DOT_COLOR[repo.language] || 'bg-apple-blue'
                          }`}
                        />
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="inline-flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="inline-flex items-center gap-1">
                        <GitBranch className="h-3 w-3" />
                        {repo.forks_count}
                      </span>
                    )}
                  </div>

                  {yearUpdated && <span className="font-mono text-[11px]">{yearUpdated}</span>}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
