export function mergeParagraph(...paragraphs: string[]): string {
  return paragraphs.filter(Boolean).join(' ').trim()
}
