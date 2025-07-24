import { cn, formatDateFromMs } from '@renderer/utils'
import { themeAtom } from '@renderer/store'
import { NoteInfo } from '@shared/models'
import { useAtomValue } from 'jotai'
import { ComponentProps } from 'react'

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

export const NotePreview = ({
  title,
  content,
  lastEditTime,
  isActive = false,
  className,
  ...props
}: NotePreviewProps) => {
  const theme = useAtomValue(themeAtom)
  const date = formatDateFromMs(lastEditTime)

  return (
    <div
      className={cn(
        'cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75',
        {
          'bg-zinc-400/75': isActive && theme === 'dark',
          'hover:bg-zinc-500/75': !isActive && theme === 'dark',
          'bg-gray-300': isActive && theme === 'light',
          'hover:bg-gray-200': !isActive && theme === 'light'
        },
        theme === 'dark' ? 'text-white' : 'text-gray-900',
        className
      )}
      {...props}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className={cn(
        "inline-block w-full mb-2 text-xs font-light text-left",
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      )}>{date}</span>
    </div>
  )
}
