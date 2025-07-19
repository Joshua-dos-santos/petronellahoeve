import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef, useState } from "react";

export default function ImageCarousel({
  images = [],
  height = "h-screen",
  autoplay = true,
  interval = 4000,
  rounded = false,
  showArrows = false, // NEW PROP
}) {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
    },
  });

  const timer = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!slider || !autoplay) return;

    timer.current = setInterval(() => {
      slider.current?.next();
    }, interval);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [slider, autoplay, interval]);

  useEffect(() => {
    if (!slider) return;

    slider.current?.on("slideChanged", (instance) => {
      setCurrentSlide(instance.track.details.rel);
    });
  }, [slider]);

  return (
    <div className="relative w-full">
      {/* Carousel */}
      <div
        ref={sliderRef}
        className={`keen-slider w-full ${height} overflow-hidden ${
          rounded ? "rounded-lg" : ""
        }`}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="keen-slider__slide flex justify-center items-center"
          >
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover brightness-75"
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      {showArrows && slider && (
        <>
          <button
            onClick={() => slider.current?.prev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow transition z-10"
          >
            ‹
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow transition z-10"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
