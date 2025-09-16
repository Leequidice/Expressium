// ...existing code...
import { clsx } from 'clsx'

interface ToggleSwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function ToggleSwitch({ 
  checked, 
  onChange, 
  label, 
  disabled = false,
  size = 'md' 
}: ToggleSwitchProps) {
  const sizes = {
    sm: {
      switch: 'h-5 w-9',
      thumb: 'h-3 w-3',
      translate: 'translate-x-4'
    },
    md: {
      switch: 'h-6 w-11',
      thumb: 'h-4 w-4', 
      translate: 'translate-x-5'
    },
    lg: {
      switch: 'h-7 w-13',
      thumb: 'h-5 w-5',
      translate: 'translate-x-6'
    }
  }

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        <div
          className={clsx(
            'rounded-full transition-colors duration-200',
            sizes[size].switch,
            checked 
              ? 'bg-espresso-primary' 
              : 'bg-gray-300',
            disabled && 'opacity-50 cursor-not-allowed'
          )}
        >
          <div
            className={clsx(
              'bg-white rounded-full shadow-sm transition-transform duration-200 flex items-center justify-center',
              sizes[size].thumb,
              'absolute top-1 left-1',
              checked && sizes[size].translate
            )}
          />
        </div>
      </div>
      {label && (
        <span className={clsx(
          'ml-3 text-sm',
          disabled ? 'text-espresso-neutral' : 'text-espresso-foreground'
        )}>
          {label}
        </span>
      )}
    </label>
  )
}
