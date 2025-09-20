import React from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ open, onClose, title, children }) {
  const dialogRef = React.useRef(null)
  const lastActiveRef = React.useRef(null)

  React.useEffect(() => {
    if (open) {
      lastActiveRef.current = document.activeElement
      const t = setTimeout(() => {
        dialogRef.current?.focus()
      }, 0)
      const onKey = (e) => {
        if (e.key === 'Escape') onClose()
      }
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
      return () => {
        clearTimeout(t)
        document.removeEventListener('keydown', onKey)
        document.body.style.overflow = ''
        if (lastActiveRef.current && lastActiveRef.current.focus) {
          lastActiveRef.current.focus()
        }
      }
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[1000] flex items-end sm:items-center justify-center"
      aria-labelledby="modal-title"
      aria-modal="true"
      role="dialog"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative z-[1001] w-full sm:max-w-md m-4 rounded-xl bg-surface border border-border shadow-xl focus:outline-none"
      >
        <div className="px-5 py-4 border-b border-border bg-espresso text-white rounded-t-xl">
          <div className="flex items-center justify-between">
            <h3 id="modal-title" className="text-base font-semibold">{title}</h3>
            <button
              onClick={onClose}
              className="ml-3 inline-flex items-center justify-center rounded-md p-1.5 hover:bg-espresso-dark focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd"/></svg>
            </button>
          </div>
        </div>
        <div className="px-5 py-4 text-sm text-text-primary">
          {children}
        </div>
        <div className="px-5 py-4 border-t border-border bg-beige-bg rounded-b-xl flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-espresso text-white rounded-md hover:bg-espresso-dark"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}


