import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin
} from '@mdxeditor/editor'
import { useMarkdownEditor } from '@renderer/hooks/useMarkdownEditor'
import { themeAtom } from '@renderer/store'
import { cn } from '@renderer/utils'
import { useAtomValue } from 'jotai'

export const MarkdownEditor = () => {
  const { editorRef, selectedNote, handleAutoSaving, handleBlur } = useMarkdownEditor()
  const theme = useAtomValue(themeAtom)

  if (!selectedNote) return null

  return (
    <MDXEditor
      ref={editorRef}
      key={selectedNote.title}
      markdown={selectedNote.content}
      onChange={handleAutoSaving}
      onBlur={handleBlur}
      plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), markdownShortcutPlugin()]}
      contentEditableClassName={cn(
        "outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-yellow-500 prose prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:before:content-[''] prose-code:after:content-['']",
        theme === 'dark' 
          ? 'prose-invert prose-code:text-red-500' 
          : 'prose-slate prose-code:text-red-600'
      )}
    />
  )
}
