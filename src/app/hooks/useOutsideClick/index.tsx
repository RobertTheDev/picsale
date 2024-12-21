import { useEffect, useRef, useState } from 'react';

export function useOutsideClick() {
  const [isActive, setIsActive] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !targetRef.current?.contains(event.target as Node) &&
        !toggleRef.current?.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleActive = () => setIsActive((prev) => !prev);

  return { isActive, targetRef, toggleActive, toggleRef };
}
