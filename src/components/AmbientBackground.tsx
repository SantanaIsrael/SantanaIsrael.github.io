export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
    >
      {/* Luz ambiente superior fria (Apple Blue / Ice) */}
      <div className="animate-float-slow absolute -top-44 left-1/2 h-[540px] w-[860px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-300/30 via-blue-400/20 to-indigo-300/25 blur-[130px] dark:from-sky-600/18 dark:via-blue-700/14 dark:to-indigo-600/16" />

      {/* Luz ambiente lateral intermediária para refração nos cards de Projetos */}
      <div className="absolute top-[34%] -right-40 h-[480px] w-[520px] rounded-full bg-gradient-to-bl from-blue-300/22 via-cyan-200/16 to-transparent blur-[130px] dark:from-blue-600/12 dark:via-cyan-700/10" />

      {/* Luz ambiente inferior sutil para Trajetória e Parcerias */}
      <div className="absolute bottom-[12%] -left-40 h-[460px] w-[520px] rounded-full bg-gradient-to-tr from-indigo-300/20 via-slate-300/18 to-transparent blur-[130px] dark:from-indigo-700/12 dark:via-slate-800/15" />
    </div>
  );
}
