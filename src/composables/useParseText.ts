export function useParseText(raw: string): Record<string, string> {
  const lines = raw
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
  const result: Record<string, string> = {}
  for (let i = 0; i < lines.length; i += 2) {
    const keyLine = lines[i]
    const valLine = lines[i + 1] ?? ''
    const key = keyLine.replace(/:$/, '').trim()
    result[key] = valLine
  }
  return result
}