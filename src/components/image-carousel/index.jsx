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
    }, 4000);

    return () => clearInterval(timer.current);
  }, [slider]);

  return (
    <div
      ref={sliderRef}
      className="keen-slider h-screen w-screen absolute top-0 left-0 z-0"
    >
      {["camping1.jpg", "camping2.jpg", "camping3.jpg"].map((img, i) => (
        <div key={i} className="keen-slider__slide">
          <img
            src={`/images/${img}`}
            alt={`Camping ${i + 1}`}
            className="w-full h-screen object-cover brightness-75"
          /> 
        </div>
      ))}
    </div>
  );
}
