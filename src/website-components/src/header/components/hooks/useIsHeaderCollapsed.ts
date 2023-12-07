import _throttle from 'lodash.throttle';
import { useState, useCallback, useEffect } from 'react';
const SCROLL_TRIGGER_MARGIN = 24;

const useIsHeaderCollapsed = (): boolean => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  const onScroll = useCallback((): void => {
    const headerHeight = parseInt(
      getComputedStyle(document.documentElement)
        .getPropertyValue('--header-height')
        .slice(0, -2),
    );
    const scrollOffset = headerHeight + SCROLL_TRIGGER_MARGIN;
    setHasScrolled(window.scrollY > scrollOffset);
  }, []);

  useEffect(() => {
    const handleScroll = _throttle(onScroll, 80);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [onScroll]);

  return hasScrolled;
};

export default useIsHeaderCollapsed;
