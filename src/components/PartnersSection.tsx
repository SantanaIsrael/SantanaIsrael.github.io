import { motion } from 'framer-motion';
import { ArrowUpRight, Building2, MapPin } from 'lucide-react';
import { INSTITUTIONAL_PARTNERS, UI_COPY } from '../data/portfolio';
import type { Locale } from '../types/portfolio';

interface PartnersSectionProps {
  locale: Locale;
}

export function PartnersSection({ locale }: PartnersSectionProps) {
  return (
    <section
      id="partners"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20"
    >
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-apple-blue dark:text-apple-blueDark">
          {UI_COPY.partners.eyebrow[locale]}
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold tracking-tight leading-tight text-apple-textLight dark:text-apple-textDark">
          {UI_COPY.partners.title[locale]}
        </h2>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-apple-mutedLight dark:text-apple-mutedDark">
          {UI_COPY.partners.subtitle[locale]}
        </p>
      </div>

      {/* Vitrine Institucional Minimalista */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
        {INSTITUTIONAL_PARTNERS.map((partner, index) => (
          <motion.article
            key={partner.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="liquid-glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              {/* Monograma Institucional Sóbrio + Localização */}
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex items-center gap-2.5 rounded-2xl bg-black/[0.04] dark:bg-white/[0.07] px-3.5 py-2 border border-black/[0.06] dark:border-white/[0.09]">
                  <Building2 className="h-4 w-4 text-apple-blue dark:text-apple-blueDark shrink-0" />
                  <span className="text-xs sm:text-sm font-bold tracking-wider text-apple-textLight dark:text-apple-textDark">
                    {partner.acronym}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1 text-xs text-apple-mutedLight dark:text-apple-mutedDark">
                  <MapPin className="h-3.5 w-3.5 opacity-75" />
                  {partner.location}
                </span>
              </div>

              <div className="mt-5">
                <p className="text-xs font-medium text-apple-blue dark:text-apple-blueDark">
                  {partner.unitType[locale]}
                </p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-apple-textLight dark:text-apple-textDark">
                  {partner.name[locale]}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-apple-mutedLight dark:text-apple-mutedDark">
                  {partner.description[locale]}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-medium text-apple-mutedLight dark:text-apple-mutedDark mr-1">
                  {UI_COPY.partners.relatedLabel[locale]}:
                </span>
                {partner.relatedProjects.map((proj) => (
                  <span
                    key={proj}
                    className="liquid-glass-subtle rounded-full px-2.5 py-0.5 text-[11px] font-medium text-apple-textLight/85 dark:text-apple-textDark/85"
                  >
                    {proj}
                  </span>
                ))}
              </div>

              {partner.website && (
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-apple-blue dark:text-apple-blueDark hover:underline"
                >
                  <span>{UI_COPY.partners.visitSite[locale]}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
