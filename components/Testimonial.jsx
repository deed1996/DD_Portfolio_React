'use client';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
export default function Testimonial({ slides }) {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Track screen size
  useEffect(() => {
    setMounted(true);
    if (!mounted) return undefined;
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop(); // set correct value on mount
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
}, []);

  // Toggle dragging based on screen size
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit({ watchDrag: !isDesktop });
  }, [emblaApi, isDesktop]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__card">
                <h3>{slide.name}</h3>
                <span className="embla__company">{slide.company}</span>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    {!isDesktop && (
      <button className="embla__button embla__button--prev" onClick={scrollPrev} aria-label="Previous slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      )};

      {!isDesktop && (
      <button className="embla__button embla__button--next" onClick={scrollNext} aria-label="Next slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
      )}
    </div>
  );
}