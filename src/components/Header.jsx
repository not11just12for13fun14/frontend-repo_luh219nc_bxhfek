export default function Header({ title = 'Hippie', subtitle }) {
  return (
    <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="max-w-md mx-auto px-4 py-3">
        <h1 className="text-2xl font-semibold text-charcoal">{title}</h1>
        {subtitle && <p className="text-sm text-charcoal/60">{subtitle}</p>}
      </div>
    </header>
  )
}
