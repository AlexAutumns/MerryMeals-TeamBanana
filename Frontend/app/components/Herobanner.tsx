// src/components/HeroBanner.tsx
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useCallback, useState } from 'react';
import { useNavigate } from 'react-router';

const slides = [
  {
    image: '/assets/herobanner_1.jpg',
    title: 'Delivering Meals with Love',
    text: 'Join our mission to feed those in need.',
    button: 'Join Us',
    link: '/login',
  },
  {
    image: '/assets/herobanner_2.jpg',
    title: 'Volunteer Today',
    text: 'Help bring smiles to our community.',
    button: 'Become a Volunteer',
    link: '/volunteer',
  },
  {
    image: '/assets/herobanner_3.jpg',
    title: 'Support the Cause',
    text: 'Every donation makes a difference.',
    button: 'Donate Now',
    link: '/donate',
  },
];

export default function HeroBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {/* Embla carousel wrapper */}
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="flex-[0_0_100%] relative h-full w-full"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-6 drop-shadow">
                  {slide.text}
                </p>
                <button
                  onClick={() => navigate(slide.link)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition"
                >
                  {slide.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={`w-3 h-3 rounded-full ${
              selectedIndex === idx ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
