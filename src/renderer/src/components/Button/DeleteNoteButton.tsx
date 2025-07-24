import { ActionButton, ActionButtonProps } from '@/components'
import { deleteNoteAtom } from '@/store'
import { themeAtom } from '@renderer/store'
import { cn } from '@renderer/utils'
import { useAtomValue, useSetAtom } from 'jotai'
import { FaRegTrashCan } from 'react-icons/fa6'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)
  const theme = useAtomValue(themeAtom)

  const handleDelete = async () => {
    await deleteNote()
  }

  return (
    <ActionButton onClick={handleDelete} {...props}>
      <FaRegTrashCan 
        className={cn(
          'inline-block',
          theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'
        )}
       />
    </ActionButton>
  )
}
