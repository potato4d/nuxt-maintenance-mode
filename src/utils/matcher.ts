export function matchRoute(path: string, matcher: any) {
  if (!matcher) {
    return true
  }

  if (matcher.constructor === Array) {
    return matcher.some((matcher: string) => path.match(matcher))
  }

  return path.match(matcher)
}
