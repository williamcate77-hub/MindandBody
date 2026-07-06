export function Header() {
  return (
    <header className="flex items-center gap-3 px-5 pt-6 pb-2">
      <span
        className="material-symbols-outlined text-brand text-[30px]"
        style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
        aria-hidden="true"
      >
        self_improvement
      </span>
      <div>
        <h1 className="font-serif text-xl leading-tight text-ink">Peaceful Mind</h1>
        <p className="text-[11px] text-ink-3 font-sans tracking-wide uppercase">Meditation</p>
      </div>
    </header>
  );
}
