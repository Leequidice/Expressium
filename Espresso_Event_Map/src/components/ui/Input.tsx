import React, { InputHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  icon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', error, icon, ...props }, ref) => {
    const baseStyles = 'flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors duration-200 placeholder:text-espresso-neutral focus-visible disabled:cursor-not-allowed disabled:opacity-50'
    
    const errorStyles = error 
      ? 'border-error text-error focus:border-error focus:ring-error' 
      : 'border-gray-300 focus:border-espresso-primary focus:ring-espresso-primary'

    return (
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-espresso-neutral">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={clsx(
            baseStyles,
            errorStyles,
            icon && 'pl-10',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)

Input.displayName = 'Input'
