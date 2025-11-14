import { Home, Calendar, ShoppingBag, User, PlaySquare, LayoutDashboard, BookOpen, ClipboardCheck, Users, Boxes, BarChart3, Package, Briefcase } from 'lucide-react'

const TabButton = ({ active, label, icon: Icon, onClick }) => (
  <button
    onClick={onClick}
    className={`flex-1 flex flex-col items-center justify-center gap-1 py-2 transition-colors duration-200 ${
      active ? 'text-hippie-500' : 'text-charcoal/60'
    }`}
  >
    <Icon size={24} strokeWidth={2} />
    <span className={`text-xs font-medium ${active ? 'text-hippie-500' : ''}`}>{label}</span>
  </button>
)

const roleTabsMap = {
  guest: [
    { key: 'clips', label: 'HippieClips', icon: PlaySquare },
    { key: 'events', label: 'Events', icon: Calendar },
    { key: 'market', label: 'Marketplace', icon: ShoppingBag },
    { key: 'profile', label: 'Profile', icon: User },
  ],
  customer: [
    { key: 'clips', label: 'HippieClips', icon: PlaySquare },
    { key: 'events', label: 'Events', icon: Calendar },
    { key: 'market', label: 'Marketplace', icon: ShoppingBag },
    { key: 'portal', label: 'Customer Portal', icon: ClipboardCheck },
    { key: 'profile', label: 'Profile', icon: User },
  ],
  owner: [
    { key: 'reservations', label: 'Reservations', icon: Calendar },
    { key: 'events', label: 'Events', icon: Calendar },
    { key: 'market', label: 'Marketplace', icon: ShoppingBag },
    { key: 'dashboard', label: 'Owner Dashboard', icon: LayoutDashboard },
  ],
  guide: [
    { key: 'clips', label: 'HippieClips', icon: PlaySquare },
    { key: 'guideDash', label: 'Guide Dashboard', icon: LayoutDashboard },
    { key: 'enrollments', label: 'Enrollments', icon: BookOpen },
    { key: 'profile', label: 'Profile', icon: User },
  ],
  manager: [
    { key: 'regional', label: 'Regional', icon: LayoutDashboard },
    { key: 'events', label: 'Events', icon: Calendar },
    { key: 'properties', label: 'Properties', icon: Boxes },
    { key: 'analytics', label: 'Analytics', icon: BarChart3 },
  ],
  agency: [
    { key: 'packages', label: 'Packages', icon: Package },
    { key: 'bookings', label: 'Bookings', icon: Calendar },
    { key: 'events', label: 'Events', icon: Calendar },
    { key: 'dashboard', label: 'Agency', icon: Briefcase },
  ],
  admin: [
    { key: 'global', label: 'Global', icon: LayoutDashboard },
    { key: 'users', label: 'Users', icon: Users },
    { key: 'content', label: 'Content', icon: PlaySquare },
    { key: 'analytics', label: 'Analytics', icon: BarChart3 },
  ],
}

export default function BottomTabs({ role = 'guest', active, onChange }) {
  const tabs = roleTabsMap[role] || roleTabsMap.guest
  return (
    <nav className="fixed bottom-0 inset-x-0 z-20 bg-white/90 backdrop-blur border-t border-black/5">
      <div className="max-w-md mx-auto flex items-center">
        {tabs.map(t => (
          <TabButton
            key={t.key}
            active={active === t.key}
            label={t.label}
            icon={t.icon}
            onClick={() => onChange(t.key)}
          />
        ))}
      </div>
    </nav>
  )
}
