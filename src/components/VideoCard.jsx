export default function VideoCard({ src, title, author, onClick }) {
  return (
    <button onClick={onClick} className="w-full text-left">
      <div className="aspect-[9/16] w-full bg-light/60 rounded-xl overflow-hidden relative shadow-sm">
        <video
          className="h-full w-full object-cover"
          src={src}
          muted
          playsInline
          preload="metadata"
          onMouseEnter={e => e.currentTarget.play()}
          onMouseLeave={e => e.currentTarget.pause()}
        />
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white">
          <p className="text-sm font-medium line-clamp-2">{title}</p>
          {author && <p className="text-xs text-white/80">{author}</p>}
        </div>
      </div>
    </button>
  )
}
