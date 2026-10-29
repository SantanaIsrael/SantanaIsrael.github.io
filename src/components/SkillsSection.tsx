import { motion } from 'framer-motion';
import { SKILL_GROUPS, UI_COPY } from '../data/portfolio';
import type { Locale } from '../types/portfolio';

interface SkillsSectionProps {
  locale: Locale;
}

export function SkillsSection({ locale }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20"
    >
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-apple-blue dark:text-apple-blueDark">
          {UI_COPY.skills.eyebrow[locale]}
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold tracking-tight leading-tight text-apple-textLight dark:text-apple-textDark">
          {UI_COPY.skills.title[locale]}
        </h2>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-apple-mutedLight dark:text-apple-mutedDark">
          {UI_COPY.skills.subtitle[locale]}
        </p>
      </div>

      {/* Spec-Sheet Apple Grid (sem barras de porcentagem artificiais) */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
        {SKILL_GROUPS.map((group, idx) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="liquid-glass rounded-3xl p-6 sm:p-8"
          >
            <h3 className="text-xl font-semibold tracking-tight text-apple-textLight dark:text-apple-textDark">
              {group.title[locale]}
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-apple-mutedLight dark:text-apple-mutedDark">
              {group.subtitle[locale]}
            </p>

            <ul className="mt-6 divide-y divide-black/[0.06] dark:divide-white/[0.08]">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4"
                >
                  <span className="text-sm font-semibold text-apple-textLight dark:text-apple-textDark shrink-0">
                    {skill.name}
                  </span>
                  <span className="text-xs sm:text-right text-apple-mutedLight dark:text-apple-mutedDark">
                    {skill.context[locale]}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
