'use client';

import { useEffect, useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export function ScrollAnimation({ 
  children, 
  className = '', 
  delay = 0,
  threshold = 0.1 
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove('opacity-0', 'translate-y-8');
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }, delay);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay, threshold]);

  return (
    <div 
      ref={elementRef}
      className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
