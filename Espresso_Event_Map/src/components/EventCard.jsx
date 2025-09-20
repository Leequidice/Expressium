import React from 'react'

export default function EventCard({ title, date, venue, description, compact = false, onClick }) {
  return (
    <article
      className="card p-5 transition-shadow hover:shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-espresso"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick?.()
        }
      }}
      aria-label={`View details for ${title}`}
    >
      <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
      <p className="mt-1 text-sm text-text-muted">{date} • {venue}</p>
      {!compact && description ? (
        <p className="mt-3 text-sm leading-6 text-text-primary">{description}</p>
      ) : null}
    </article>
  )
}


