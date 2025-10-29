import { useState, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlider = ({
  images = [],
  autoPlay = false,
  interval = 3000,
  showDots = true,
  showArrows = true,
  className = "",
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // if (images.length === 0) {
  //   return (
  //     <div className={`image-slider ${className}`}>
  //       <div className="image-slider-empty">No images to display</div>
  //     </div>
  //   );
  // }

  return (
    <div className={`image-slider ${className}`} {...props}>
      <div className="image-slider-container">
        <div
          className="image-slider-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="image-slider-slide">
              <img
                src={image.src}
                alt={image.alt || `Slide ${index + 1}`}
                className="image-slider-image"
              />
            </div>
          ))}
        </div>

        {showArrows && images.length > 1 && (
          <>
            <button
              className="image-slider-arrow image-slider-arrow-left"
              onClick={goToPrevious}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              className="image-slider-arrow image-slider-arrow-right"
              onClick={goToNext}
              aria-label="Next slide"
            >
              ›
            </button>
          </>
        )}
      </div>

      {showDots && images.length > 1 && (
        <div className="image-slider-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`image-slider-dot ${
                index === currentIndex ? "image-slider-dot-active" : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
