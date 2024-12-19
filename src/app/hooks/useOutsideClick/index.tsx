import { useEffect, useRef, useState } from 'react';

export function useOutsideClick() {
  const [targetActive, setTargetActive] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        targetRef.current &&
        !targetRef.current.contains(event.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        setTargetActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function toggleTarget() {
    setTargetActive((prev) => !prev);
  }

  return { targetActive, targetRef, toggleTarget, toggleRef };
}
