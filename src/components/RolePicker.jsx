const roles = [
  { key: 'guest', label: 'Guest' },
  { key: 'customer', label: 'Customer' },
  { key: 'owner', label: 'Stay Owner' },
  { key: 'guide', label: 'Hippie Guide' },
  { key: 'manager', label: 'Country Manager' },
  { key: 'agency', label: 'Agency' },
  { key: 'admin', label: 'Super Admin' },
]

export default function RolePicker({ value, onChange }) {
  return (
    <div className="flex gap-2 overflow-auto no-scrollbar py-2">
      {roles.map(r => (
        <button
          key={r.key}
          onClick={() => onChange(r.key)}
          className={`px-3 py-1.5 rounded-full text-sm border ${
            value === r.key
              ? 'bg-hippie-500/10 border-hippie-500 text-hippie-600'
              : 'bg-white border-black/10 text-charcoal'
          }`}
        >
          {r.label}
        </button>
      ))}
    </div>
  )
}
