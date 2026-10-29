import {
  ArrowUpRight,
  BookOpen,
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from 'lucide-react';
import { useState } from 'react';
import { PROFILE, UI_COPY } from '../data/portfolio';
import type { Locale } from '../types/portfolio';

interface ContactSectionProps {
  locale: Locale;
}

export function ContactSection({ locale }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <footer
      id="contact"
      className="pt-20 pb-28 md:pb-20 sm:pt-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20"
    >
      <div className="liquid-glass relative overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-14">
        {/* Brilho ambiente interno */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-gradient-to-tl from-apple-blue/20 via-indigo-400/15 to-transparent blur-3xl"
        />

        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-apple-blue dark:text-apple-blueDark">
            {UI_COPY.contact.eyebrow[locale]}
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight leading-tight text-apple-textLight dark:text-apple-textDark">
            {UI_COPY.contact.title[locale]}
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-apple-mutedLight dark:text-apple-mutedDark">
            {UI_COPY.contact.subtitle[locale]}
          </p>
        </div>

        {/* Ações Primárias: Copiar E-mail + Download CV PDF */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2.5 rounded-full bg-apple-textLight text-white dark:bg-white dark:text-apple-textLight px-6 py-3 text-xs sm:text-sm font-medium shadow-sm hover:opacity-90 transition-opacity"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-400 dark:text-emerald-600" />
                <span>{UI_COPY.contact.emailCopied[locale]}</span>
              </>
            ) : (
              <>
                <Mail className="h-4 w-4" />
                <span>{PROFILE.email}</span>
                <Copy className="h-3.5 w-3.5 opacity-70" />
              </>
            )}
          </button>

          <a
            href={PROFILE.links.cvPdf}
            download="CV-Israel-Santana.pdf"
            className="liquid-glass-pill inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-medium text-apple-textLight dark:text-apple-textDark hover:border-apple-blue/40 dark:hover:border-apple-blueDark/40 transition-colors"
          >
            <Download className="h-4 w-4 text-apple-blue dark:text-apple-blueDark" />
            <span>{UI_COPY.contact.downloadCv[locale]}</span>
          </a>
        </div>

        {/* Pílulas de Redes & Plataformas */}
        <div className="mt-8 pt-8 border-t border-black/10 dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noreferrer"
            className="liquid-glass-subtle flex items-center justify-between rounded-2xl px-4 py-3.5 text-xs sm:text-sm font-medium text-apple-textLight dark:text-apple-textDark hover:border-apple-blue/40 dark:hover:border-apple-blueDark/40 transition-colors"
          >
            <span className="inline-flex items-center gap-2">
              <Github className="h-4 w-4 text-apple-blue dark:text-apple-blueDark" />
              GitHub
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
          </a>

          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="liquid-glass-subtle flex items-center justify-between rounded-2xl px-4 py-3.5 text-xs sm:text-sm font-medium text-apple-textLight dark:text-apple-textDark hover:border-apple-blue/40 dark:hover:border-apple-blueDark/40 transition-colors"
          >
            <span className="inline-flex items-center gap-2">
              <Linkedin className="h-4 w-4 text-apple-blue dark:text-apple-blueDark" />
              LinkedIn
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
          </a>

          <a
            href={PROFILE.links.lattes}
            target="_blank"
            rel="noreferrer"
            className="liquid-glass-subtle flex items-center justify-between rounded-2xl px-4 py-3.5 text-xs sm:text-sm font-medium text-apple-textLight dark:text-apple-textDark hover:border-apple-blue/40 dark:hover:border-apple-blueDark/40 transition-colors"
          >
            <span className="inline-flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-apple-blue dark:text-apple-blueDark" />
              Lattes CNPq
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
          </a>

          <a
            href={PROFILE.links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="liquid-glass-subtle flex items-center justify-between rounded-2xl px-4 py-3.5 text-xs sm:text-sm font-medium text-apple-textLight dark:text-apple-textDark hover:border-apple-blue/40 dark:hover:border-apple-blueDark/40 transition-colors"
          >
            <span className="inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-apple-blue dark:text-apple-blueDark" />
              WhatsApp
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
          </a>
        </div>
      </div>

      {/* Assinatura Minimalista de Rodapé */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-2 px-2 text-xs text-apple-mutedLight dark:text-apple-mutedDark">
        <p>
          © {new Date().getFullYear()} {PROFILE.fullName} · {PROFILE.institutionShort}
        </p>
        <p>
          {locale === 'pt'
            ? 'Desenvolvido com React, TypeScript · Hospedado no GitHub Pages'
            : 'Built with React, TypeScript & Liquid Glass · Hosted on GitHub Pages'}
        </p>
      </div>
    </footer>
  );
}
