import { useEffect, useState } from 'react';

function getMatches(query: string): boolean {
  return typeof window !== 'undefined' && window.matchMedia(query).matches;
}

export function useMediaQuery(query: string): boolean {
  const [state, setState] = useState(() => ({ query, matches: getMatches(query) }));

  if (state.query !== query) {
    setState({ query, matches: getMatches(query) });
  }

  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = (event: MediaQueryListEvent) =>
      setState({ query, matches: event.matches });
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [query]);

  return state.matches;
}
