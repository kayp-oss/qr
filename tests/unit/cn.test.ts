import { cn } from '@/shared/lib/cn'
import { describe, it } from 'vitest'

describe('cn', () => {
  it('should merge class names correctly', ({ expect }) => {
    const result = cn('class1', 'class2')
    expect(result).toBe('class1 class2')
  })

  it('should handle conditional class names', ({ expect }) => {
    const result = cn('class1', false && 'class2', 'class3')
    expect(result).toBe('class1 class3')
  })

  it('should handle arrays of class names', ({ expect }) => {
    const result = cn(['class1', 'class2'], 'class3')
    expect(result).toBe('class1 class2 class3')
  })

  it('should handle objects with truthy values', ({ expect }) => {
    const result = cn({ class1: true, class2: false, class3: true })
    expect(result).toBe('class1 class3')
  })

  it('should handle mixed inputs', ({ expect }) => {
    const result = cn(
      'class1',
      ['class2', { class3: true, class4: false }],
      'class5',
    )
    expect(result).toBe('class1 class2 class3 class5')
  })
})
