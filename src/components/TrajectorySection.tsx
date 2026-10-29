import { motion } from 'framer-motion';
import { ArrowUpRight, Award, BookOpen, Briefcase, FileCode2, GraduationCap } from 'lucide-react';
import { useMemo } from 'react';
import lattesRaw from '../data/lattes.json';
import { PROFILE, TRAJECTORY_ITEMS, UI_COPY } from '../data/portfolio';
import type { Locale, ModalPayload, TrajectoryItem } from '../types/portfolio';

interface LattesPublication {
  id: string;
  typePt: string;
  typeEn: string;
  titlePt: string;
  titleEn: string;
  year: string;
  venue: string;
  doi?: string;
  authors?: string[];
}

interface LattesSoftware {
  id: string;
  titlePt: string;
  titleEn: string;
  year: string;
  purposePt: string;
  purposeEn: string;
  platform: string;
  institution: string;
}

interface LattesJson {
  lattesId: string;
  lattesUrl: string;
  citationName: string;
  publications: LattesPublication[];
  softwares: LattesSoftware[];
}

const lattesData = lattesRaw as LattesJson;

interface TrajectorySectionProps {
  locale: Locale;
  onSelectModal: (payload: ModalPayload) => void;
}

export function TrajectorySection({ locale, onSelectModal }: TrajectorySectionProps) {
  // Mescla itens curados com eventuais publicações/softwares extras vindos do importador XML do Lattes
  const combinedItems = useMemo<TrajectoryItem[]>(() => {
    const dynamicPublications: TrajectoryItem[] = (lattesData.publications || []).map((pub) => ({
        id: `lattes-${pub.id}`,
        category: 'academic',
        sourceBadge: 'Lattes',
        title: { pt: pub.titlePt, en: pub.titleEn || pub.titlePt },
        organization: pub.venue || 'Publicação Científica',
        period: { pt: pub.year, en: pub.year },
        summary: {
          pt: `${pub.typePt}${pub.authors?.length ? ` · Autores: ${pub.authors.join('; ')}` : ''}`,
          en: `${pub.typeEn}${pub.authors?.length ? ` · Authors: ${pub.authors.join('; ')}` : ''}`,
        },
        details: {
          pt: [
            `Modalidade: ${pub.typePt}`,
            pub.venue ? `Veículo / Evento: ${pub.venue}` : 'Registrado no Currículo Lattes CNPq.',
          ],
          en: [
            `Type: ${pub.typeEn}`,
            pub.venue ? `Venue / Journal: ${pub.venue}` : 'Indexed in CNPq Lattes CV.',
          ],
        },
        tags: [pub.typePt, 'Pesquisa', 'CNPq Lattes'],
        externalUrl: pub.doi ? `https://doi.org/${pub.doi}` : lattesData.lattesUrl,
      })
    );

    return [...TRAJECTORY_ITEMS, ...dynamicPublications];
  }, []);

  const handleOpenItem = (item: TrajectoryItem) => {
    onSelectModal({
      badge: item.sourceBadge,
      secondaryBadge:
        item.category === 'academic'
          ? locale === 'pt'
            ? 'Vida Acadêmica'
            : 'Academic'
          : locale === 'pt'
            ? 'Engenharia & Atuação'
            : 'Engineering',
      period: item.period[locale],
      title: item.title[locale],
      subtitle: item.organization,
      description: item.summary[locale],
      bulletsTitle: UI_COPY.modal.highlightsTitle[locale],
      bullets: item.details[locale],
      tags: item.tags,
      primaryLink: item.externalUrl
        ? {
            label:
              item.sourceBadge === 'Lattes' || item.sourceBadge === 'UESC'
                ? UI_COPY.trajectory.openOfficialLattes[locale]
                : UI_COPY.projects.openRepo[locale],
            url: item.externalUrl,
          }
        : undefined,
    });
  };

  return (
    <section
      id="trajectory"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20"
    >
      {/* Cabeçalho da Seção */}
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-apple-blue dark:text-apple-blueDark">
          {UI_COPY.trajectory.eyebrow[locale]}
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold tracking-tight leading-tight text-apple-textLight dark:text-apple-textDark">
          {UI_COPY.trajectory.title[locale]}
        </h2>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-apple-mutedLight dark:text-apple-mutedDark">
          {UI_COPY.trajectory.subtitle[locale]}
        </p>
      </div>

      {/* Card Oficial de Verificação do Currículo Lattes CNPq */}
      <div className="liquid-glass mt-10 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-apple-blue/10 dark:bg-apple-blueDark/15 text-apple-blue dark:text-apple-blueDark">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm sm:text-base font-semibold text-apple-textLight dark:text-apple-textDark">
                {UI_COPY.trajectory.lattesBannerTitle[locale]}
              </h3>
              <span className="liquid-glass-subtle rounded-full px-2.5 py-0.5 text-[11px] font-mono text-apple-mutedLight dark:text-apple-mutedDark">
                {lattesData.citationName}
              </span>
            </div>
            <p className="mt-0.5 text-xs sm:text-sm text-apple-mutedLight dark:text-apple-mutedDark">
              {UI_COPY.trajectory.lattesBannerDesc[locale]}
            </p>
          </div>
        </div>

        <a
          href={PROFILE.links.lattes}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-1.5 rounded-full bg-apple-blue dark:bg-apple-blueDark px-4 py-2 text-xs font-medium text-white shrink-0 hover:opacity-90 transition-opacity"
        >
          <span>{UI_COPY.trajectory.openOfficialLattes[locale]}</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Timeline Vertical Minimalista */}
      <div className="mt-10 relative pl-6 sm:pl-8 before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-px before:bg-black/10 dark:before:bg-white/10 space-y-5">
        {combinedItems.map((item, idx) => {
          const Icon =
            item.sourceBadge === 'UESC'
              ? GraduationCap
              : item.category === 'academic'
                ? Award
                : Briefcase;

          return (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              onClick={() => handleOpenItem(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenItem(item);
                }
              }}
              tabIndex={0}
              role="button"
              className="liquid-glass liquid-glass-interactive relative rounded-3xl p-6 sm:p-7 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue"
            >
              {/* Marcador na Linha do Tempo */}
              <span
                aria-hidden="true"
                className="absolute -left-[21px] sm:-left-[25px] top-8 flex h-4 w-4 items-center justify-center rounded-full bg-apple-bgLight dark:bg-apple-bgDark ring-2 ring-apple-blue dark:ring-apple-blueDark"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-apple-blue dark:bg-apple-blueDark" />
              </span>

              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-apple-blue/10 dark:bg-apple-blueDark/15 px-3 py-0.5 text-xs font-medium text-apple-blue dark:text-apple-blueDark">
                    <Icon className="h-3 w-3" />
                    {item.sourceBadge}
                  </span>
                  <span className="text-xs font-medium text-apple-mutedLight dark:text-apple-mutedDark">
                    {item.organization}
                  </span>
                </div>

                <span className="text-xs font-mono text-apple-mutedLight dark:text-apple-mutedDark">
                  {item.period[locale]}
                </span>
              </div>

              <h3 className="mt-3 text-lg sm:text-xl font-semibold tracking-tight text-apple-textLight dark:text-apple-textDark">
                {item.title[locale]}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-apple-mutedLight dark:text-apple-mutedDark">
                {item.summary[locale]}
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="liquid-glass-subtle rounded-full px-2.5 py-0.5 text-[11px] font-medium text-apple-textLight/80 dark:text-apple-textDark/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-semibold text-apple-blue dark:text-apple-blueDark group-hover:translate-x-0.5 transition-transform">
                  <span>{UI_COPY.trajectory.readMore[locale]}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Produção Técnica Registrada no Lattes (ex: Software SAPPI) */}
      {lattesData.softwares && lattesData.softwares.length > 0 && (
        <div className="mt-8 grid grid-cols-1 gap-4">
          {lattesData.softwares.map((sw) => (
            <div
              key={sw.id}
              className="liquid-glass-subtle rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex items-start sm:items-center gap-3">
                <FileCode2 className="h-4 w-4 mt-0.5 sm:mt-0 shrink-0 text-apple-blue dark:text-apple-blueDark" />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-apple-mutedLight dark:text-apple-mutedDark">
                    {locale === 'pt'
                      ? 'Produção Técnica · Software (Lattes)'
                      : 'Technical Production · Software (Lattes)'}
                  </span>
                  <h4 className="text-sm font-semibold text-apple-textLight dark:text-apple-textDark">
                    {locale === 'pt' ? sw.titlePt : sw.titleEn}
                  </h4>
                  <p className="text-xs text-apple-mutedLight dark:text-apple-mutedDark">
                    {locale === 'pt' ? sw.purposePt : sw.purposeEn}
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-apple-mutedLight dark:text-apple-mutedDark shrink-0">
                {sw.institution} · {sw.year}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
