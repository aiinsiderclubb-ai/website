/** Landing routes use plain paths; i18n is client-side only. */
export function useLocalePath() {
  return (path: string) => path;
}
