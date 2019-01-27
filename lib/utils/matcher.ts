export function matchRoute(path: string, matcher: string) {
  if (!matcher) {
    return true
  }
  return path.match(matcher)
}
