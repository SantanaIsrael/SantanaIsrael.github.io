import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { useEffect } from 'react';
import { UI_COPY } from '../data/portfolio';
import type { Locale, ModalPayload } from '../types/portfolio';

interface DetailModalProps {
  payload: ModalPayload | null;
  locale: Locale;
  onClose: () => void;
}

export function DetailModal({ payload, locale, onClose }: DetailModalProps) {
  useEffect(() => {
    if (!payload) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [payload, onClose]);

  return (
    <AnimatePresence>
      {payload && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop translúcido */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/35 dark:bg-black/65 backdrop-blur-md"
          />

          {/* Painel Modal em Liquid Glass */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: 'spring', stiffness: 360, damping: 30 }}
            className="liquid-glass-modal relative z-10 w-full max-w-2xl max-h-[86vh] overflow-y-auto rounded-3xl p-6 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-apple-blue/10 dark:bg-apple-blueDark/15 px-3 py-1 text-xs font-medium text-apple-blue dark:text-apple-blueDark">
                  {payload.badge}
                </span>
                {payload.secondaryBadge && (
                  <span className="liquid-glass-subtle inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-apple-mutedLight dark:text-apple-mutedDark">
                    {payload.secondaryBadge}
                  </span>
                )}
                {payload.period && (
                  <span className="text-xs font-mono text-apple-mutedLight dark:text-apple-mutedDark">
                    {payload.period}
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label={UI_COPY.modal.close[locale]}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/[0.06] dark:bg-white/[0.1] text-apple-mutedLight dark:text-apple-mutedDark hover:text-apple-textLight dark:hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5">
              <h3
                id="modal-title"
                className="text-2xl sm:text-3xl font-semibold tracking-tight text-apple-textLight dark:text-apple-textDark"
              >
                {payload.title}
              </h3>
              <p className="mt-1.5 text-sm sm:text-base font-medium text-apple-mutedLight dark:text-apple-mutedDark">
                {payload.subtitle}
              </p>
            </div>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-apple-textLight/90 dark:text-apple-textDark/90">
              {payload.description}
            </p>

            {payload.secondarySectionTitle && payload.secondarySectionBody && (
              <div className="liquid-glass-subtle mt-6 rounded-2xl p-4 sm:p-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-apple-mutedLight dark:text-apple-mutedDark">
                  {payload.secondarySectionTitle}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-apple-textLight/85 dark:text-apple-textDark/85">
                  {payload.secondarySectionBody}
                </p>
              </div>
            )}

            {payload.bullets.length > 0 && (
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-apple-mutedLight dark:text-apple-mutedDark">
                  {payload.bulletsTitle}
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {payload.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-apple-textLight/90 dark:text-apple-textDark/90"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-apple-blue dark:text-apple-blueDark" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-1.5">
              {payload.tags.map((tag) => (
                <span
                  key={tag}
                  className="liquid-glass-subtle rounded-full px-3 py-1 text-xs font-medium text-apple-textLight/80 dark:text-apple-textDark/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            {(payload.primaryLink || payload.secondaryLink) && (
              <div className="mt-8 flex flex-wrap items-center gap-3 pt-5 border-t border-black/10 dark:border-white/10">
                {payload.primaryLink && (
                  <a
                    href={payload.primaryLink.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-apple-blue dark:bg-apple-blueDark px-5 py-2.5 text-xs sm:text-sm font-medium text-white shadow-sm hover:opacity-90 transition-opacity"
                  >
                    <span>{payload.primaryLink.label}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {payload.secondaryLink && (
                  <a
                    href={payload.secondaryLink.url}
                    target="_blank"
                    rel="noreferrer"
                    className="liquid-glass-subtle inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium text-apple-textLight dark:text-apple-textDark hover:bg-black/[0.06] dark:hover:bg-white/[0.1] transition-colors"
                  >
                    <span>{payload.secondaryLink.label}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
