import { useEffect, useRef, type RefObject } from "react";

export function useHorizontalScroll<
  T extends HTMLElement,
>(): RefObject<T | null> {
  const elRef = useRef<T>(null);
  const targetScrollLeft = useRef<number>(0);
  const isAnimating = useRef<boolean>(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    targetScrollLeft.current = el.scrollLeft;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      if (!el) return;

      const diff = targetScrollLeft.current - el.scrollLeft;

      if (Math.abs(diff) < 0.5) {
        el.scrollLeft = targetScrollLeft.current;
        isAnimating.current = false;
        return;
      }

      el.scrollLeft = lerp(el.scrollLeft, targetScrollLeft.current, 0.1);

      requestAnimationFrame(animate);
    };

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;

      e.preventDefault();

      targetScrollLeft.current += e.deltaY * 1.5;

      const maxScroll = el.scrollWidth - el.clientWidth;
      targetScrollLeft.current = Math.max(
        0,
        Math.min(targetScrollLeft.current, maxScroll),
      );

      if (!isAnimating.current) {
        isAnimating.current = true;
        requestAnimationFrame(animate);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return elRef;
}
