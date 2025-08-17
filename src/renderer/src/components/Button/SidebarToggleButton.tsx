import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface SidebarToggleButtonProps extends ComponentProps<'button'> {
  isCollapsed: boolean
  onToggle: () => void
}

export const SidebarToggleButton = ({
  className,
  isCollapsed,
  onToggle,
  ...props
}: SidebarToggleButtonProps) => {
  return (
    <button
      className={twMerge(
        'absolute top-1/2 -translate-y-1/2 -right-3 z-20',
        'w-6 h-6 rounded-full',
        'bg-white dark:bg-zinc-700',
        'border border-gray-300 dark:border-zinc-600',
        'shadow-lg hover:shadow-xl',
        'flex items-center justify-center',
        'transition-all duration-300',
        'hover:bg-gray-50 dark:hover:bg-zinc-600',
        'hover:scale-110',
        className
      )}
      onClick={onToggle}
      {...props}
    >
      <svg
        className={twMerge(
          'w-3 h-3 text-gray-600 dark:text-gray-300',
          'transition-transform duration-200',
          isCollapsed && 'rotate-180'
        )}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  )
}