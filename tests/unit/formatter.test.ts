import { mergeParagraph } from '@/shared/lib/formatter'
import { describe, it } from 'vitest'

describe('mergeParagraph', () => {
  it('should merge multiple paragraphs into a single string with spaces', ({
    expect,
  }) => {
    const result = mergeParagraph(
      'This is paragraph one.',
      'This is paragraph two.',
      'This is paragraph three.',
    )
    expect(result).toBe(
      'This is paragraph one. This is paragraph two. This is paragraph three.',
    )
  })

  it('should return a single paragraph as is', ({ expect }) => {
    const result = mergeParagraph('This is a single paragraph.')
    expect(result).toBe('This is a single paragraph.')
  })

  it('should return an empty string when no paragraphs are provided', ({
    expect,
  }) => {
    const result = mergeParagraph()
    expect(result).toBe('')
  })

  it('should handle paragraphs with leading and trailing spaces correctly', ({
    expect,
  }) => {
    const result = mergeParagraph('  Leading space.', 'Trailing space.  ')
    expect(result).not.toBe('  Leading space. Trailing space.  ')
    expect(result).toBe('Leading space. Trailing space.')
  })

  it('should handle empty strings within paragraphs', ({ expect }) => {
    const result = mergeParagraph('First paragraph.', '', 'Third paragraph.')
    expect(result).not.toBe('First paragraph.  Third paragraph.')
    expect(result).toBe('First paragraph. Third paragraph.')
  })
})
