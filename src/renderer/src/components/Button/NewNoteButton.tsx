import { ActionButton, ActionButtonProps } from '@/components'
import { createEmptyNoteAtom, themeAtom } from '@renderer/store'
import { cn } from '@renderer/utils'
import { useAtomValue, useSetAtom } from 'jotai'
import { LuFileSignature } from 'react-icons/lu'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)
  const theme = useAtomValue(themeAtom)

  const handleCreation = async () => {
    await createEmptyNote()
  }

  return (
    <ActionButton onClick={handleCreation} {...props}>
      <LuFileSignature 
        className={cn(
          'inline-block',
          theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'
        )}
      />
    </ActionButton>
  )
}
