import ImageSlider from "../../components/ImageSlider/ImageSlider";
import {
  ComponentDemo,
  ComponentSection,
} from "../../layouts/ComponentLayout/ComponentLayout";

const ImageSliderPage = () => {
  const demoImages = [
    {
      src: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Laptop",
    },
    {
      src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Working on Laptop",
    },
    {
      src: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Multiple Screens",
    },
    {
      src: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Office Meeting",
    },
  ];

  const simpleImages = demoImages.map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  return (
    <div>
      <h1>Image Slider</h1>
      <p>Carousel component for displaying a collection of images.</p>

      <ComponentSection title="Basic Image Slider">
        <ComponentDemo
          title="Simple Slider"
          description="Image slider with navigation arrows and dot indicators"
          component={
            <div style={{ width: "100%", maxWidth: "700px" }}>
              <ImageSlider images={simpleImages} />
            </div>
          }
          code={`const images = [
  { src: 'image1.jpg', alt: 'Image 1' },
  { src: 'image2.jpg', alt: 'Image 2' },
  { src: 'image3.jpg', alt: 'Image 3' },
];

<ImageSlider images={images} />`}
        />
      </ComponentSection>
    </div>
  );
};

export default ImageSliderPage;
