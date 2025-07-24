import { selectedNoteAtom, themeAtom } from '@renderer/store'
import { cn } from '@renderer/utils'
import { useAtomValue } from 'jotai'
import { ComponentProps } from 'react'

export const FloatingNoteTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const selectedNote = useAtomValue(selectedNoteAtom)
  const theme = useAtomValue(themeAtom)

  if (!selectedNote) return null

  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <span className={cn(
        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
      )}>{selectedNote.title}</span>
    </div>
  )
}
