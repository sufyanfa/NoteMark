import { ActionButton, ActionButtonProps } from '@/components'
import { themeAtom, toggleThemeAtom } from '@renderer/store'
import { useAtomValue, useSetAtom } from 'jotai'
import { LuMoon, LuSun } from 'react-icons/lu'

export const ThemeToggleButton = ({ ...props }: ActionButtonProps) => {
  const theme = useAtomValue(themeAtom)
  const toggleTheme = useSetAtom(toggleThemeAtom)

  const handleToggle = () => {
    toggleTheme()
  }

  return (
    <ActionButton onClick={handleToggle} {...props}>
      {theme === 'dark' ? (
        <LuSun className="w-4 h-4 text-zinc-300" />
      ) : (
        <LuMoon className="w-4 h-4 text-zinc-700" />
      )}
    </ActionButton>
  )
}