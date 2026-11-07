import { useEffect, useRef, useState } from "react";

export default function SectionTitle({ title }: { title: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const element = headingRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        console.log(entry.target);
        setIsVisible(true);
        observer.unobserve(entry.target);
      },
      { threshold: 1 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <h2
      ref={headingRef}
      className={`mb-8 text-center font-mono text-xs font-bold uppercase tracking-[0.08em] text-foreground/60 transition-all duration-1200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      {title}
    </h2>
  );
}
