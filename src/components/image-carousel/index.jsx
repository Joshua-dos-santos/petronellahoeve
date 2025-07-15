import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";

export default function ImageCarousel() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
    },
  });

  const timer = useRef(null);

  useEffect(() => {
    if (!slider) return;

    timer.current = setInterval(() => {
      slider.current?.next();
    }, 3000); // Slide every 3 seconds

    return () => {
      clearInterval(timer.current);
    };
  }, [slider]);

  return (
    <div
      ref={sliderRef}
      className="keen-slider rounded-xl overflow-hidden my-8 shadow-lg max-w-4xl mx-auto"
    >
      <div className="keen-slider__slide">
        <img
          src="/images/camping1.jpg"
          alt="Camping 1"
          className="w-full h-128 object-cover"
        />
      </div>
      <div className="keen-slider__slide">
        <img
          src="/images/camping2.jpg"
          alt="Camping 2"
          className="w-full h-128 object-cover"
        />
      </div>
      <div className="keen-slider__slide">
        <img
          src="/images/camping3.jpg"
          alt="Camping 3"
          className="w-full h-128 object-cover"
        />
      </div>
    </div>
  );
}
