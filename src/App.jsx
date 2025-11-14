import { useMemo, useState } from 'react'
import Header from './components/Header'
import BottomTabs from './components/BottomTabs'
import VideoCard from './components/VideoCard'
import RolePicker from './components/RolePicker'

const sampleVideos = [
  {
    id: 1,
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    title: 'Sunset Kayak in Goa – Hidden Mangrove Trails',
    author: 'Hippie Guide • Priya',
  },
  {
    id: 2,
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: 'Eco Stay Spotlight – Treehouse in Munnar',
    author: 'Stay Owner • Ravi',
  },
  {
    id: 3,
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    title: 'Local Festival Walkthrough – Pushkar Mela',
    author: 'Country Manager • Aisha',
  },
]

function ClipsScreen() {
  return (
    <div className="space-y-4 px-4 pb-28">
      {sampleVideos.map(v => (
        <VideoCard key={v.id} {...v} onClick={() => {}} />
      ))}
    </div>
  )
}

function EventsScreen() {
  return (
    <div className="px-4 pb-28">
      <h2 className="text-charcoal text-lg font-semibold mb-2">Upcoming Events</h2>
      <div className="grid grid-cols-2 gap-3">
        {[1,2,3,4].map(i => (
          <div key={i} className="bg-white border border-black/5 rounded-lg p-3 shadow-sm">
            <div className="aspect-video bg-light/60 rounded mb-2" />
            <p className="text-sm font-medium text-charcoal">Hippie Beach Cleanup #{i}</p>
            <p className="text-xs text-charcoal/60">Sat 5:00 PM • Goa</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function MarketplaceScreen() {
  return (
    <div className="px-4 pb-28">
      <h2 className="text-charcoal text-lg font-semibold mb-2">Experiences</h2>
      <div className="grid grid-cols-2 gap-3">
        {[1,2,3,4].map(i => (
          <div key={i} className="bg-white border border-black/5 rounded-lg p-3 shadow-sm">
            <div className="aspect-square bg-light/60 rounded mb-2" />
            <p className="text-sm font-medium text-charcoal">Kayak at Dawn</p>
            <p className="text-xs text-charcoal/60">From ₹1,999</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProfileScreen() {
  return (
    <div className="px-4 pb-28">
      <h2 className="text-charcoal text-lg font-semibold mb-2">Profile</h2>
      <div className="bg-white border border-black/5 rounded-lg p-4 shadow-sm">
        <p className="text-sm text-charcoal/80">Sign in to sync bookings and preferences.</p>
      </div>
    </div>
  )
}

const screenByKey = {
  clips: <ClipsScreen />,
  events: <EventsScreen />,
  market: <MarketplaceScreen />,
  profile: <ProfileScreen />,
  portal: <div className="px-4 pb-28"><h2 className="text-charcoal text-lg font-semibold">Customer Portal</h2></div>,
  reservations: <div className="px-4 pb-28"><h2 className="text-charcoal text-lg font-semibold">Reservations</h2></div>,
  dashboard: <div className="px-4 pb-28"><h2 className="text-charcoal text-lg font-semibold">Dashboard</h2></div>,
  guideDash: <div className="px-4 pb-28"><h2 className="text-charcoal text-lg font-semibold">Guide Dashboard</h2></div>,
  enrollments: <div className="px-4 pb-28"><h2 className="text-charcoal text-lg font-semibold">Enrollments</h2></div>,
  regional: <div className="px-4 pb-28"><h2 className="text-charcoal text-lg font-semibold">Regional</h2></div>,
  properties: <div className="px-4 pb-28"><h2 className="text-charcoal text-lg font-semibold">Properties</h2></div>,
  analytics: <div className="px-4 pb-28"><h2 className="text-charcoal text-lg font-semibold">Analytics</h2></div>,
  packages: <div className="px-4 pb-28"><h2 className="text-charcoal text-lg font-semibold">Packages</h2></div>,
  bookings: <div className="px-4 pb-28"><h2 className="text-charcoal text-lg font-semibold">Bookings</h2></div>,
  global: <div className="px-4 pb-28"><h2 className="text-charcoal text-lg font-semibold">Global</h2></div>,
  users: <div className="px-4 pb-28"><h2 className="text-charcoal text-lg font-semibold">Users</h2></div>,
  content: <div className="px-4 pb-28"><h2 className="text-charcoal text-lg font-semibold">Content</h2></div>,
}

export default function App() {
  const [role, setRole] = useState('guest')
  const [active, setActive] = useState('clips')

  const subtitle = useMemo(() => {
    switch (role) {
      case 'guest':
        return 'Video-first discovery. Sign in for more.'
      case 'customer':
        return 'Explore clips, book experiences, and manage trips.'
      case 'owner':
        return 'Track reservations and manage your stays.'
      case 'guide':
        return 'Manage tours and enrollments.'
      case 'manager':
        return 'Regional oversight and performance.'
      case 'agency':
        return 'Packages and bookings for your clients.'
      case 'admin':
        return 'Global control and analytics.'
      default:
        return undefined
    }
  }, [role])

  return (
    <div className="min-h-screen bg-light">
      <Header title="Hippie" subtitle={subtitle} />

      <main className="max-w-md mx-auto pt-3 pb-24 space-y-3">
        <div className="px-4">
          <RolePicker value={role} onChange={setRole} />
        </div>
        {screenByKey[active] || <ClipsScreen />}
      </main>

      <BottomTabs role={role} active={active} onChange={setActive} />
    </div>
  )
}
