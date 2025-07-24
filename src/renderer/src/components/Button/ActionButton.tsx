import { themeAtom } from '@renderer/store'
import { cn } from '@renderer/utils'
import { useAtomValue } from 'jotai'
import { ComponentProps } from 'react'

export type ActionButtonProps = ComponentProps<'button'>

export const ActionButton = ({ className, children, ...props }: ActionButtonProps) => {
  const theme = useAtomValue(themeAtom)
  
  return (
    <button
      className={cn(
        'px-2 py-1 rounded-md border transition-colors duration-100',
        theme === 'dark' 
          ? 'border-zinc-400/50 hover:bg-zinc-600/50' 
          : 'border-gray-300 hover:bg-gray-200',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
