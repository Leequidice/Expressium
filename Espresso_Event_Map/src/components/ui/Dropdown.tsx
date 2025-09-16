import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { clsx } from 'clsx'

interface DropdownOption {
  value: string
  label: string
}

interface DropdownProps {
  options: DropdownOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  disabled?: boolean
}

export function Dropdown({ 
  options, 
  value, 
  onChange, 
  placeholder = 'Select option',
  className,
  disabled = false
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find(opt => opt.value === value)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setIsOpen(!isOpen)
    } else if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  return (
    <div className={clsx('relative', className)} ref={dropdownRef}>
      <button
        type="button"
        className={clsx(
          'flex h-10 w-full items-center justify-between rounded-lg border bg-white px-3 py-2 text-sm transition-colors duration-200',
          'focus-visible disabled:cursor-not-allowed disabled:opacity-50',
          isOpen 
            ? 'border-espresso-primary ring-2 ring-espresso-primary/20' 
            : 'border-gray-300 hover:border-espresso-neutral',
          disabled && 'cursor-not-allowed opacity-50'
        )}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={selectedOption ? 'text-espresso-foreground' : 'text-espresso-neutral'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown 
          className={clsx(
            'ml-2 h-4 w-4 transition-transform duration-200',
            isOpen ? 'rotate-180' : 'rotate-0'
          )} 
        />
      </button>

      {isOpen && (
        <div 
          className="absolute z-50 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg animate-slide-up"
          role="listbox"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={clsx(
                'flex w-full items-center px-3 py-2 text-sm transition-colors duration-150',
                'hover:bg-espresso-primary/10 focus:bg-espresso-primary/10 focus:outline-none',
                'first:rounded-t-lg last:rounded-b-lg',
                option.value === value && 'bg-espresso-primary/20 text-espresso-primary font-medium'
              )}
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
              role="option"
              aria-selected={option.value === value}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
