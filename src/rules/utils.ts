export const isUseState = (v: string): boolean => {
  return /^use[A-Z0-9]/.test(v)
}
