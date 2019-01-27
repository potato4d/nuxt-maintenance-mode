export function matchRoute(path, matcher) {
  if (!matcher) {
    return true
  }
  return path.match(matcher)
}
