import { DeleteNoteButton, NewNoteButton, ThemeToggleButton } from '@/components'
import { ComponentProps } from 'react'

export const ActionButtonsRow = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewNoteButton />
      <ThemeToggleButton />
      <DeleteNoteButton />
    </div>
  )
}
