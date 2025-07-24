import {
  ActionButtonsRow,
  Content,
  DraggableTopBar,
  FloatingNoteTitle,
  MarkdownEditor,
  NotePreviewList,
  RootLayout,
  Sidebar
} from '@/components'
import { themeAtom } from '@renderer/store'
import { cn } from '@renderer/utils'
import { useAtomValue } from 'jotai'
import { useRef } from 'react'

const App = () => {
  const theme = useAtomValue(themeAtom)
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <>
      <DraggableTopBar />
      <RootLayout className={cn(
        theme === 'dark' ? 'bg-zinc-800 backdrop-blur-sm' : 'bg-gray-100'
      )}>
        <Sidebar className={cn(
          'p-3',
          theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-100'
        )}>
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
        </Sidebar>

        <Content ref={contentContainerRef} className={cn(
          'border-l pt-2',
          theme === 'dark' 
            ? 'bg-zinc-900 border-l-white/20' 
            : 'bg-white border-l-gray-300'
        )}>
          <FloatingNoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App